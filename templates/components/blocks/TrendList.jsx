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

export const TrendList = ({ trendData }) => {
  const navigate = useNavigate();
  // コインデータの取得
  const coins = trendData.coins;

  const handleOnClick = (e, coinName) => {
    navigate(`/coin/${coinName}`);
  };

  return (
    <Container sx={{ my: 2 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="body1" textAlign="center">
          過去24時間で話題の通貨を紹介します
        </Typography>
      </Box>
      <TableContainer component={Paper} sx={{ marginBottom: 10 }}>
        <Table sx={{ minWidth: 400 }} aria-label="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>コイン名</StyledTableCell>
              <StyledTableCell>シンボル</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin, index) => (
              <TableRow
                key={index}
                hover
                sx={{ cursor: 'pointer' }}
                onClick={(e) => handleOnClick(e, coin.item.id)}
              >
                <StyledTableCell component="th" scope="row">
                  {coin.item.name}
                </StyledTableCell>
                <StyledTableCell>{coin.item.symbol}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
