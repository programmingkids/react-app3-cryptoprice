import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { Divider } from '@mui/material';

export const CoinData = ({ coinData }) => {
  const coin = coinData[0];
  // コイン名
  const name = coin.name;
  // コインシンボル名
  const symbol = coin.symbol;
  // コイン画像URL
  const image = coin.image;
  // 現在の価格
  const current_price = coin.current_price;
  // 過去24時間の最高価格
  const high_24h = coin.high_24h;
  // 過去24時間の最低価格
  const low_24h = coin.low_24h;

  // 24時間の変動割合
  const price_change_24h = coin.price_change_percentage_24h;

  // 過去1時間の変動割合
  const price_change_1h_cur = coin.price_change_percentage_1h_in_currency;
  // 過去24時間の変動割合
  const price_change_24h_cur = coin.price_change_percentage_24h_in_currency;
  // 過去7日間の変動割合
  const price_change_7d_cur = coin.price_change_percentage_7d_in_currency;
  // 最終更新日時
  const last_updated = coin.last_updated;

  return (
    <Container sx={{ my: 2 }}>
      <Paper sx={{ p: 2, my: 2 }} elevation={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={image} width={30} />
          <Typography variant="coinName">{name}</Typography>
          <Typography variant="coinSymbol">{symbol}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="coinPrice">
            &yen;{current_price.toLocaleString()}
          </Typography>
          <Typography
            variant={price_change_24h > 0 ? 'coinChangeUp' : 'coinChangeDown'}
          >
            {price_change_24h.toFixed(2)}%
          </Typography>
        </Stack>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }} elevation={2}>
        <Stack
          direction="row"
          spacing={2}
          my={1}
          py={1}
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #cecece' }}
        >
          <Typography variant="subtitle2">24時間最高</Typography>
          <Typography>&yen;{high_24h.toLocaleString()}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          my={1}
          py={1}
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #cecece' }}
        >
          <Typography variant="subtitle2">24時間最低</Typography>
          <Typography>&yen;{low_24h.toLocaleString()}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          my={1}
          py={1}
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #cecece' }}
        >
          <Typography variant="subtitle2">取得日時</Typography>
          <Typography>{new Date(last_updated).toLocaleString()}</Typography>
        </Stack>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }} elevation={2}>
        <Stack direction="row" p={1} justifyContent="space-around">
          <Box textAlign="center">
            <Typography variant="subtitle2">1時間</Typography>
            <Typography
              variant={price_change_1h_cur > 0 ? 'changeUp' : 'changeDown'}
            >
              {price_change_1h_cur.toFixed(2)}%
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box textAlign="center">
            <Typography variant="subtitle2">24時間</Typography>
            <Typography
              variant={price_change_24h_cur > 0 ? 'changeUp' : 'changeDown'}
            >
              {price_change_24h_cur.toFixed(2)}%
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box textAlign="center">
            <Typography variant="subtitle2">7日間</Typography>
            <Typography
              variant={price_change_7d_cur > 0 ? 'changeUp' : 'changeDown'}
            >
              {price_change_7d_cur.toFixed(2)}%
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
