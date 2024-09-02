import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const Crypt = () => (
  <Container>
    <Stack direction="column" p={2} gap={3} marginBottom={10}>
      <Typography variant="h5" component="h2" textAlign="center">
        暗号通貨について
      </Typography>
      <Paper sx={{ p: 2 }} elevation={2}>
        <Typography variant="body1">
          暗号通貨とは、インターネット上でやり取りできる財産的価値であり、「資金決済に関する法律」において、次の性質をもつものと定義されています。
        </Typography>
      </Paper>
      <Paper sx={{ p: 2 }} elevation={2}>
        <List dense={true} sx={{ listStyleType: 'disc', pl: 3 }}>
          <ListItem sx={{ display: 'list-item' }}>
            不特定の者に対して、代金の支払い等に使用でき、かつ、法定通貨（日本円や米国ドル等）と相互に交換できる
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            電子的に記録され、移転できる
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            法定通貨または法定通貨建ての資産（プリペイドカード等）ではない
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            代表的な暗号通貨には、ビットコインやイーサリアムなどがあります。暗号通貨は、銀行等の第三者を介することなく、財産的価値をやり取りすることが可能な仕組みとして、高い注目を集めました
          </ListItem>
        </List>
      </Paper>
      <Paper sx={{ p: 2 }} elevation={2}>
        <Typography variant="body1">
          一般に、暗号通貨は、「交換所」や「取引所」と呼ばれる事業者（暗号資産交換業者）から入手・換金することができます。暗号資産交換業は、金融庁・財務局の登録を受けた事業者のみが行うことができます。
        </Typography>
      </Paper>
      <Paper sx={{ p: 2 }} elevation={2}>
        <Typography variant="body1">
          暗号通貨は、国家やその中央銀行によって発行された、法定通貨ではありません。また、裏付け資産を持っていないことなどから、利用者の需給関係などのさまざまな要因によって、暗号通貨の価格が大きく変動する傾向にある点には注意が必要です。また、暗号通貨に関する詐欺などの事例も数多く報告されていますので、注意が必要です。
        </Typography>
      </Paper>
    </Stack>
  </Container>
);
