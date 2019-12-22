const express = require('express')
let router = express.Router()

let Commodity = require('../models/Commodity.js', { useMongoClient: true })


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











module.exports = router