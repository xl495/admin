module.exports = options => {

    const AdminUser = require("../models/AdminUser");
    const jwt = require("jsonwebtoken");
    const assert = require("http-assert")

    return async(req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop();
        assert(token, 422, '未授权')
        const { id } = jwt.verify(token, req.app.get('secret'));
        assert(id, 422, { message: '请先登录' })
        req.user = AdminUser.findById(id);
        await next()
    }
}