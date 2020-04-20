const express = require('express')
let router = express.Router()
const fs = require('fs');
//密碼加密
let md5 = require('blueimp-md5')
let User = require('../models/user.js', { useMongoClient: true })
let Commodity = require('../models/commodity.js', { useMongoClient: true })
let Order = require('../models/order.js', { useMongoClient: true })


router.get('/mall', function(req, res) {
    fs.readFile('./dist/mall.html', (err, data) => {
        if (err) throw err;
        res.end(data)
    })
})

router.get('/ ', function(req, res) {
    fs.readFile('./dist/index.html', (err, data) => {
        if (err) throw err;
        res.end(data)
    })
})


// 處理註冊
router.post('/ajax/registered', async function(req, res) {
    let body = req.body
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
        'email': body.email,
        'password': body.password
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
    if (req.session.user) {
        return res.json({
            isLogin: true,
            user: req.session.user
        })
    } else {
        return res.json({
            isLogin: false
        })
    }
})

//處理新增追蹤
router.post('/ajax/like', async(req, res) => {
    let body = req.body
    let commodityLikeList = []
    await Commodity.findOne({ '_id': body.commodity_id }, (err, commodity) => {
        commodityLikeList = commodity.like
    })
    commodityLikeList.push(body.user._id)
    await Commodity.updateOne({ '_id': body.commodity_id }, { 'like': commodityLikeList }, (err) => {
        if (err) return console.log(err)
    })
    await User.updateOne({ '_id': body.user._id }, {
        'like': body.user.like
    }, (err, data) => {
        if (err) return console.log(err)
        return res.json({
            err_code: 0
        })
    })
})

//處理刪除追蹤
router.post('/ajax/dislike', async(req, res) => {
    let body = req.body
    let commodityLikeList = []
    await Commodity.findOne({ '_id': body.commodity_id }, (err, commodity) => {
        commodityLikeList = commodity.like.filter(item => {
            return item != body.user._id
        })
    })
    await Commodity.updateOne({ '_id': body.commodity_id }, { 'like': commodityLikeList }, (err) => {
        if (err) return console.log(err)
    })
    await User.updateOne({ '_id': body.user._id }, {
        'like': body.user.like
    }, (err, data) => {
        if (err) return console.log(err)
        return res.json({
            err_code: 0
        })
    })
})

//處理更新用戶資訊
router.post('/ajax/updateUser', async function(req, res) {
    let body = req.body
    let password = md5(body.password)
    await User.findOne({
        '_id': body._id,
        'password': password
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
            User.updateOne({ '_id': body._id }, {
                'firstname': body.firstname,
                'lastname': body.lastname,
                'email': body.email,
                'gender': body.gender,
                'birthday': body.birthday,
                'tel': body.tel,
                'address': body.address,
                'identity': body.identity
            }, (err, data) => {
                if (err) return console.log(err)
                return res.json({
                    err_code: 0
                })
            })
        }
    })
})


//處理更新用戶購物車
router.post('/ajax/updateCart', async function(req, res) {
    let body = req.body
    User.updateOne({ '_id': body.userID }, {
        'cart': body.cart
    }, (err, data) => {
        if (err) {
            return res.json({
                err_code: 1
            })
        }
        return res.json({
            err_code: 0
        })
    })
})

//新增訂單
router.post('/ajax/addOrder', function(req, res) {
    let body = req.body
    new Order(body.order).save((err, order) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        console.log('新增訂單成功' + order)
        return res.status(200).json({
            err_code: 0,
            message: 'ok',
            order: order
        })
    })

})

//更新會員訂單庫
router.post('/ajax/updateOrder', async function(req, res) {
    let body = req.body
    User.updateOne({ '_id': body.userID }, {
        'order': body.order,
        'cart': body.cart
    }, (err, data) => {
        if (err) {
            return res.json({
                err_code: 1
            })
        }
        return res.json({
            err_code: 0
        })
    })
})

//取得訂單資料
router.post('/ajax/getOrder', async function(req, res) {
    let body = req.body
    Order.findOne({ '_id': body.id }, (err, order) => {
        if (err) {
            return res.json({
                err_code: 1
            })
        }
        return res.json({
            err_code: 0,
            order: order
        })
    })
})

module.exports = router