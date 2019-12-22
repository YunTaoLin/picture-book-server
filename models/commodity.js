var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Commodity = mongoose.model('Commodity', {
    title: { //商品名稱
        type: String,
        required: true
    },
    img: { //密碼
        type: String,
        required: true,
    },
    ori_price: { //商品原價
        type: Number,
        required: true
    },
    sale_price: { //優惠價格
        type: Number,
        required: true
    },
    info: { //商品資訊
        type: String,
        default: '熱銷中'
    },
    like: { //追蹤者的ID
        type: Array,
        default: []
    },
    sale: { //銷售數量(累計)
        type: Number,
        default: 0
    },
    create_time: { //商品建立時間
        type: Date,
        default: Date.now
    },
    last_time: { //商品最後修改時間
        type: Date,
        default: Date.now
    },
    status: { //狀態
        type: Number,
        default: 0,
        //0: 正常，1:缺貨中，2:已下架
        enum: [0, 1, 2]
    }
})

module.exports = Commodity