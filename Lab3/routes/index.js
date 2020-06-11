'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'My Family' });
});

router.get('/alap', function (req, res) {
    res.render('alap', { title: 'Alap' });
});

router.get('/viral', function (req, res) {
    res.render('viral', { title: 'Viral' });
});

router.get('/paresh', function (req, res) {
    res.render('paresh', { title: 'Paresh' });
});

router.get('/minal', function (req, res) {
    res.render('minal', { title: 'Minal' });
});

module.exports = router;
