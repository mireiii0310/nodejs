var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('views', {
        title: "node.js Views Test",
        text: "테스트입니다."
    });
});
 
module.exports = router;