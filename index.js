const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//CORS対策
app.use(cors());

//jsonパーサー リクエストContent-Type:application/json場合自動パースされる
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ルーティング設定 apiディレクト配下を全て読み込む
const filenames = fs.readdirSync('./api');
filenames.forEach((filename) => {
  app.use(require(`./api/${filename}`));
});

//全リクエスト処理
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

const server = app.listen(3003, () => console.log(server.address().port + '😇ポートでモックサーバ起動したで'));
