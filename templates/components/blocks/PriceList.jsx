import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const PriceList = ({ prices }) => {
  const navigate = useNavigate();

  const handleOnClick = (e, coinName) => {
    navigate(`/coin/${coinName}`);
  };

  return (
    <Container sx={{ my: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>コイン名</StyledTableCell>
              <StyledTableCell align="right">金額&nbsp;（円）</StyledTableCell>
              <StyledTableCell align="right">24時間</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(prices).map((coinName, index) => (
              <TableRow
                key={index}
                hover
                sx={{ cursor: 'pointer' }}
                onClick={(e) => handleOnClick(e, coinName)}
              >
                <StyledTableCell component="th" scope="row">
                  {coinName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  &yen;{Math.round(prices[coinName].jpy).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    variant={
                      prices[coinName].jpy_24h_change > 0
                        ? 'changeUp'
                        : 'changeDown'
                    }
                  >
                    {prices[coinName].jpy_24h_change.toFixed(2)}%
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
