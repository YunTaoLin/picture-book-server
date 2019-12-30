const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(cors())
app.use('/', express.static(path.join(__dirname + '/dist')))
app.use('/admin', express.static(path.join(__dirname + '/backstage')))

app.use(session({
    secret: 'YunTaoLin', //加密
    resave: false,
    saveUninitialized: true, //不管有無用到，都創建session
    // cookie: { secure: true }//這個設置代表安全性，若不是Https協議則不儲存cookie
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const main = require('./router/main')
const backstage = require('./router/backstage')
app.use(main)
app.use(backstage)

app.listen(3000, (err, res) => {
    if (err) throw err
    console.log('啟動成功')
})