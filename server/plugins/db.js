module.exports = app => {
    const mongoose = require("mongoose")
        // mongoose.connect("mongodb://zy_123:zy_123@101.132.226.132:27017/zy",{useNewUrlParser: true ,useUnifiedTopology: true});
    mongoose.connect("mongodb://127.0.0.1:27017/shangcheng", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('error', () => {
        console.log('Mongoose connection error')
    });

    mongoose.connection.on('open', () => {
        console.log('数据库连接成功')
    });
    require('require-all')(__dirname + '/../models')
}