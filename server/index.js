const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('secret', '78ty287qiaou1') //加密

app.use(require('cors')()); //跨域

app.use(bodyParser.json({ limit: '1mb' }));

app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', (req, res) => {
    res.send(`<h1>hello</h1>`)
})

require('./plugins/db')(app)

require("./router/admin/index")(app);

require("./router/web/index")(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})