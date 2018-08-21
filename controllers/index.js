const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
      pageTitle: 'Express' 
    });
});


router.use('/demo1', require('./demo1/demo1.js'));
router.use('/demo2', require('./demo2/demo2.js'));
router.use('/demo3', require('./demo3/demo3.js'));


module.exports = router;