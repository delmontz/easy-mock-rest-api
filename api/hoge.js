const express = require('express');
const router = express.Router();

router.get('/hoge', function(req, res) {
  res.json({
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
