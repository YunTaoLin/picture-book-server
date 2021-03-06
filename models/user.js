var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    firstname: { //名字
        type: String,
        required: true
    },
    lastname: { //姓氏
        type: String,
        required: true
    },
    password: { //密碼
        type: String,
        required: true,
    },
    email: { //登入信箱
        type: String,
        required: true
    },
    create_time: { //會員建立時間
        type: Date,
        default: Date.now
    },
    gender: { //性別
        type: Number,
        enum: [0, 1, -1],
        default: -1
    },
    tel: { //電話
        type: String,
        default: ''
    },
    address: { //住址
        type: String,
        default: ''
    },
    identity: { //身分證字號
        type: String,
        default: ''
    },
    status: { //狀態
        type: Number,
        default: 0,
        //0: 正常，1:禁止貨到付款，2:封鎖帳號中
        enum: [0, 1, 2]
    },
    birthday: { //生日
        type: Date,
        default: Date.now
    },
    cart: { //購物車內東西
        type: Array,
        default: []
    },
    order: { //訂單ID
        type: Array,
        default: []
    },
    //追蹤中的商品ID
    like: {
        type: Array,
        default: []
    }

})

module.exports = User