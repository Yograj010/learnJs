const express = require("express");
const router =  express();

const jsController = require('./jsvascript.controller');
const controller = new jsController();

router.post('/call',controller.callBindApply);

module.exports = router; 