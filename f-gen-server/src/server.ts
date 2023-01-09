import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(cors());

app.get('/api/finalConfigs', (req, res) => {
  fs.readFile(
    __dirname + '/data/' + 'finalConfigs.json',
    'utf8',
    (err, data) => {
      console.log('data sended');
      res.end(data);
    }
  );
});

app.listen(3012);
