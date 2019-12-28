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
    img: { //圖片
        type: String,
        required: true,
    },
    classify: { //分類
        type: Number,
        default: 0,
        //0: 幼兒，1:兒童，2:青少年，3:其他周邊，-1:當季精選
        enum: [0, 1, 2, 3, -1]
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
    star: { //星星數陣列
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
        //0: 正常，1:預購中，2:缺貨中
        enum: [0, 1, 2]
    }
})

module.exports = Commodity