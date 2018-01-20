var express = require('express');
var router = express.Router();

/* GET home page. */
// http://localhost:3000/ 요청시 다음 구문을 실행함. index.ejs를 보여줌.
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕, nodejs' });
});

module.exports = router;
