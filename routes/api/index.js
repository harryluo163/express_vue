/**
 * Created by Harry on 2018/2/8.
 */

var express = require('express');
var router = express.Router();

router.get('/getinfo', function (req, res, next) {
  res.json({id:1,name:"张三"})
});
module.exports = router
