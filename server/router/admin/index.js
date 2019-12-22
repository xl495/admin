module.exports = app => {
    const express = require("express");
    const AdminUser = require("../../models/AdminUser");
    const jwt = require("jsonwebtoken");
    const assert = require("http-assert")
    const router = express.Router({
        mergeParams: true
    })

    // 查询资源
    router.get('/', async(req, res) => {
        const data = await req.Model.find().limit(20)
        res.status(200).send(data)
    });

    router.get('/:id', async(req, res) => {
        const data = await req.Model.findById(req.params.id);
        res.send(data)
    });

    // 添加资源
    router.post('/', async(req, res) => {
        const data = await req.Model.insertMany(req.body);
        res.status(200).send(data)
    });

    // 更新资源
    router.put('/:id', async(req, res) => {
        const data = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(data)
    });

    // 删除资源
    router.delete('/:id', async(req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })

    const responseAuth = require('../../auth/response'); // 是否登陆中间件
    app.use('/admin/api/rest/:resource', responseAuth(), async(req, res, next) => {
        const modelName = await require('inflection').classify(req.params.resource);
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    app.post('/admin/api/login', async(req, res) => {
        const { username, password } = req.body;
        assert(username, 422, '请输入用户名!')
        assert(password, 422, '请输入密码!')
        const user = await AdminUser.findOne({ username }).select('+password');
        assert(user, 422, '用户不存在!')
        const isPassWord = require('bcryptjs').compareSync(password, user.password)
        assert(isPassWord, 422, '密码错误!')
        const token = jwt.sign({ id: user._id }, app.get('secret'));
        res.send({ token, message: '登陆成功' })
    })

    app.use(async(err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}