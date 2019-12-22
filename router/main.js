const express = require('express')
let router = express.Router()
const fs = require('fs');
//密碼加密
let md5 = require('blueimp-md5')
let User = require('../models/user.js', { useMongoClient: true })


router.get('/', function(req, res) {
    fs.readFile('../dist/index.html', (err, data) => {
        if (err) throw err;
        res.end(data)
    })
})


// 處理註冊
router.post('/ajax/registered', async function(req, res) {
    let body = req.body
    console.log(body)
    body.password = md5(body.password)
        // 判斷用戶是否存在
    await User.findOne({ email: body.email }, (err, data) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        if (data) {
            //email已存在
            return res.status(200).json({
                err_code: 1,
                message: 'Email or username aleady exists'
            })
        }
    })
    await new User(body).save((err, user) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        //註冊成功，使用Session紀錄登入狀態
        req.session.user = user
        return res.json({
            err_code: 0,
            message: 'OK',
            user: user
        })
    })
})

// 處理登入
router.post('/ajax/login', async function(req, res) {
    let body = req.body
    body.password = md5(body.password)
    await User.findOne({
        email: body.email,
        password: body.password
    }, (err, user) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        } else if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'email or password error'
            })
        } else {
            //登入成功，使用Session紀錄登入狀態
            console.log('登入成功')
            req.session.user = user
            console.log(req.session)
            res.json({
                err_code: 0,
                message: 'OK',
                user: user
            })
        }
    })
})

// 剛進來網站時，檢查session是否有資料
router.get('/isLogin', (req, res) => {
    console.log(req.session)
    if (req.session.user) {
        console.log('目前有登入')
        return res.json({
            isLogin: true,
            user: req.session.user
        })
    } else {
        console.log('沒登入資料')
        return res.json({
            isLogin: false
        })
    }
})
















module.exports = router