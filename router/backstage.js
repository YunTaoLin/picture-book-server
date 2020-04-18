const express = require('express')
let router = express.Router()

let User = require('../models/user.js', { useMongoClient: true })
let Commodity = require('../models/commodity.js', { useMongoClient: true })
let Order = require('../models/order.js', { useMongoClient: true })
const fs = require('fs');


router.get('/admin', function(req, res) {
    fs.readFile('./backstage/index.html', (err, data) => {
        if (err) throw err;
        res.end(data)
    })
})


//處理新增商品
router.post('/backstage/newCommodity', async function(req, rew) {
    let body = req.body
    await new Commodity(body).save((err, commodity) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        return res.status(500).json({
            err_code: 0,
            commodity: commodity
        })
    })
})



//取得會員列表
router.get('/backstage/getMember', function(req, res) {
    User.find()
        .then(data => {
            return res.json({
                member: data
            })
        })
})

//更新會員狀態
router.post('/backstage/updateMember', (req, res) => {
    let body = req.body
    User.updateOne({ '_id': body.member_id }, { "status": body.status }, function(err, data) {

        return res.json({
            err_code: 0
        })
    });
})

//取得商品列表
router.get('/backstage/getCommodity', function(req, res) {
    Commodity.find()
        .then(data => {
            return res.json({
                commodity: data
            })
        })
})

//新增商品
router.post('/backstage/addCommodity', (req, res) => {
    let body = req.body
    new Commodity(body).save((err, commodity) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        return res.json({
            err_code: 0,
            message: 'OK',
            commodity: commodity
        })
    })
})

//更新商品資料
router.post('/backstage/updateCommodity', async(req, res) => {
    let body = req.body
    await Commodity.updateOne({ '_id': body.commodity_id }, {
        title: body.data.title,
        img: body.data.img,
        ori_price: body.data.ori_price,
        sale_price: body.data.sale_price,
        info: body.data.info,
        classify: body.data.classify,
        last_time: new Date()
    }, function(err, responsion) {
        if (err) return console.log(err)
    });
    await Commodity.findOne({ '_id': body.commodity_id })
        .then((data) => {
            return res.json({
                err_code: 0,
                data: data
            })
        })
})


//取得訂單
router.get('/backstage/getOrder', function(req, res) {
    Order.find()
        .then(data => {
            return res.json({
                order: data
            })
        })
})


//刪除會員
router.post('/backstage/deleteMember', function(req, res) {
  let body = req.body
  // 目前不需要密碼驗證
  User.findByIdAndDelete(body.deleteID)
    .then(data => {
      return res.json({
        error_code: 0
      })
  })
})

//刪除訂單
router.post('/backstage/deleteOrder', function(req, res) {
  let body = req.body
  // 目前不需要密碼驗證
  Order.findByIdAndDelete(body.deleteID)
    .then(data => {
      return res.json({
        error_code: 0
      })
  })
})
//更新訂單狀態
router.post('/backstage/updateOrder', (req, res) => {
  let body = req.body
  Order.updateOne({ '_id': body.order_id }, { "status": body.status }, function(err, data) {
    if (err) {
      return res.status(500).json({
          err_code: 500,
          message: 'Internal error'
      })
    }   
    return res.json({
          err_code: 0
      })
  });
})



module.exports = router