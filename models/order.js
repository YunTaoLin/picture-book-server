var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Order = mongoose.model('Order', {
    name: { //訂購者名稱
        type: String,
        required: true
    },
    address: { //地址
        type: String,
        required: true,
    },
    tel: { //電話
        type: String,
        required: true,
    },
    pay: { //付款方式
        type: String,
        required: true,
    },
    total: { //總金額
        type: Number,
        required: true
    },
    buy: { //購買清單
        type: Array,
        default: [],
        required: true,
    },
    userId: { //我是哪個會員下單的
        type: String,
        required: true,
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
        //0: 等待，1:送出去了，2:完成
        enum: [0, 1, 2]
    }
})

module.exports = Order