const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({
    body: 'hello world hoge'
  });
});

module.exports = router;
