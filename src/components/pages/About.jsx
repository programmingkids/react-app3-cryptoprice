import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LOGOIMAGE from './../../coingecko_logo_with_dark_text.png';

export const About = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2">
      アプリケーションの紹介
      </Typography>
      <Typography variant="subtitle1" component="h3">
      暗号通貨価格を提供します
      </Typography>
      <Box>
        <Link onClick={() => window.location.replace("https://www.coingecko.com/")}>
          <img src={LOGOIMAGE} width={'200px'}/>
        </Link>
      </Box>
      <Box>
        This App is Powered by CoinGecko
      </Box>
    </Stack>
  </Container>
);
