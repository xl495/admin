module.exports = app => {
    const express = require("express");
    const router = express.Router();
    const mongoose = require('mongoose');
    app.use('/web/api', router)
}