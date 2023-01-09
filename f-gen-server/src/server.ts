import express from 'express';
import cors from 'cors';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();

const jsonParser = bodyParser.json();

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

app.post('/api/addConfig', jsonParser, (req, res) => {
  fs.readFile(
    __dirname + '/data/' + 'finalConfigs.json',
    'utf8',
    (err, data) => {
      data = JSON.parse(data);

      const lastElement: any = data[data.length - 1];
      const newData = req.body;

      newData.id = lastElement.id + 1;

      const test = JSON.stringify(data.concat(newData));

      fs.writeFile(__dirname + '/data/' + 'finalConfigs.json', test, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
    }
  );

  res.sendStatus(200);
});

app.listen(3012);
