# EASY MOCK REST API SERVER
## **#使い方**
### 起動
`yarn start`  
http://localhost:3003/

### エンドポイントの作り方
`api`ディレクトリ配下に以下のフォーマットでjsファイルを作成すると自動で読み込まれるよ  
 **注意!!** ファイル新規追加はホットリロードに対応していないので起動しなおしてね☆　ファイル編集して保存すると自動的にリロードするよ

```
const express = require('express');
const router = express.Router();

router.get('/hoge', function(req, res) {
  res.json({
    id: 19,
    body: 'hello world hoge hoge'
  });
});

router.post('/hoge', function(req, res) {
  res.json({
    id: 19,
    body: 'hello world hoge hoge'
  });
});

module.exports = router;
```


