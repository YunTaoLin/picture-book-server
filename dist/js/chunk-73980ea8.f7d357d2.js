(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73980ea8"],{"0540":function(t,e,i){},"0b26":function(t,e,i){},"1fd6":function(t,e,i){},2387:function(t,e,i){"use strict";var a=i("0b26"),s=i.n(a);s.a},"2fdc":function(t,e,i){"use strict";var a=i("78ae"),s=i.n(a);s.a},"51e5":function(t,e,i){"use strict";var a=i("1fd6"),s=i.n(a);s.a},"78ae":function(t,e,i){},"7db0":function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").find,r=i("44d2"),n="find",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)},b789:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart"},[i("header",[4!=t.step?i("div",{staticClass:"flow"},[i("p",{class:{active:1==t.step}},[t._v("購物明細")]),i("p",{class:{active:2==t.step}},[t._v("付款方式")]),i("p",{class:{active:3==t.step}},[t._v("資料確認")])]):t._e()]),t.idList.length<1?i("div",{staticClass:"nothing"},[i("h3",[t._v("空空如也，購物車內沒有任何東西！")]),i("img",{attrs:{src:"https://thumbs.dreamstime.com/t/%E4%BA%BA%E6%89%8B%E6%89%93%E5%BC%80%E5%9C%A8%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%E9%9A%94-%E7%9A%84%E4%B8%80%E4%B8%AA%E7%A9%BA%E7%9A%84%E9%92%B1%E5%8C%85%E4%B8%8E-94426914.jpg",alt:""}})]):1==t.step?i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.totalChecked},on:{change:function(e){return t.selectAll()}}})]),i("div",[t._v("商品")]),i("div",[t._v("單價")]),i("div",[t._v("數量")]),i("div",[t._v("總計")]),i("div",[t._v("操作")])]),i("div",{staticClass:"main"},t._l(t.idList,(function(e,a){return i("cartItem",{key:e.id,attrs:{item:e},on:{updateChecked:function(i){e.checked=i,t.updateCart()},updateNumber:function(i){e.number=i,t.updateCart()},remove:function(e){t.idList.splice(a,1),t.updateCart()}}})})),1),i("div",{staticClass:"checkout"},[i("p",[t._v("總金額："),i("span",[t._v("＄"+t._s(t.totalPrice))])]),i("a",{attrs:{href:"javascript:'"},on:{click:function(e){t.step=2}}},[t._v("前往結帳")])])]):t._e(),2==t.step?i("cartFrom",{on:{next:function(e){return t.next(e)},toBack:function(e){t.step--}}}):3==t.step?i("sendOrder",{attrs:{data:t.orderData},on:{addOrder:function(e){return t.addOrder(e)},toBack:function(e){t.step--}}}):4==t.step?i("div",{staticClass:"final"},[i("h1",[t._v("已送出訂單")]),t.orderId?i("h3",[t._v("訂單編號："+t._s(t.orderId))]):t._e(),"郵局轉帳"==t.orderData.pay?i("h3",[t._v("轉帳帳號：123-456-789-887")]):t._e(),i("p",[t._v("提醒您：可到訂單查詢專區查看您的所有訂單")])]):t._e(),i("myFooter")],1)},s=[],r=(i("4de4"),i("7db0"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.checked,expression:"item.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.item.checked)?t._i(t.item.checked,null)>-1:t.item.checked},on:{change:[function(e){var i=t.item.checked,a=e.target,s=!!a.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);a.checked?n<0&&t.$set(t.item,"checked",i.concat([r])):n>-1&&t.$set(t.item,"checked",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.item,"checked",s)},t.updateCheck]}})]),i("div",{staticClass:"item_inner"},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.commodity.img,alt:t.commodity.title}})]),i("div",{staticClass:"title"},[t._v(t._s(t.commodity.title))])]),i("div",{staticClass:"price"},[i("span",[t._v("$"+t._s(t.commodity.ori_price))]),t._v(" $"+t._s(t.commodity.sale_price))]),i("div",[i("div",{staticClass:"number_control"},[i("button",{attrs:{disabled:t.number<2},on:{click:function(e){t.number--}}},[t._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"number"},domProps:{value:t.number},on:{change:t.positive,input:function(e){e.target.composing||(t.number=e.target.value)}}}),i("button",{on:{click:function(e){t.number++}}},[t._v("+")])])]),i("div",[t._v("$"+t._s(t.commodity.sale_price*t.number))]),i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:t.remove}},[t._v("刪除")])])])}),n=[],c=(i("e25e"),{props:{item:{type:Object}},data:function(){var t=this;return{commodity:this.$store.state.commodity.find((function(e){return e._id==t.item.id})),number:this.item.number,checked:this.item.checked}},methods:{positive:function(){this.number=parseInt(this.number)<1?1:parseInt(this.number)},updateCheck:function(){this.$emit("updateChecked",this.item.checked)},remove:function(){this.$emit("remove")}},watch:{number:function(t){this.$emit("updateNumber",t)}}}),o=c,d=(i("b806"),i("2877")),u=Object(d["a"])(o,r,n,!1,null,"720be6a8",null),l=u.exports,m=i("fd2d"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"cartFrom"},[i("div",{staticClass:"commodity"},[t._m(0),t._l(t.itemList,(function(e){return i("div",{key:e.obj._id,staticClass:"item"},[i("div",{staticClass:"item_inner"},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:e.obj.img,alt:""}})]),i("div",{staticClass:"title"},[t._v(t._s(e.obj.title))])]),i("div",[t._v("$"+t._s(e.obj.sale_price))]),i("div",[t._v(t._s(e.number))]),i("div",[t._v("$"+t._s(e.obj.sale_price*e.number))])])}))],2),i("div",{staticClass:"send"},[i("div",{staticClass:"header"},[i("div",[t._v("寄送資料 "),i("label",[i("input",{attrs:{type:"checkbox"},on:{change:t.toMember}}),t._v(" 同會員資料 ")])])]),i("form",[i("label",[i("span",[t._v("收件人：")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("label",[i("span",[t._v("寄送地址：")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.address,expression:"address",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("label",[i("span",[t._v("連絡電話：")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.tel,expression:"tel",modifiers:{trim:!0}}],attrs:{type:"tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),i("div",{staticClass:"pay"},[t._m(1),i("form",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pay,expression:"pay"}],attrs:{type:"radio",value:"貨到付款"},domProps:{checked:t._q(t.pay,"貨到付款")},on:{change:function(e){t.pay="貨到付款"}}}),i("span",[t._v("貨到付款")])]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pay,expression:"pay"}],attrs:{type:"radio",value:"郵局轉帳"},domProps:{checked:t._q(t.pay,"郵局轉帳")},on:{change:function(e){t.pay="郵局轉帳"}}}),i("span",[t._v("郵局轉帳")])]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pay,expression:"pay"}],attrs:{type:"radio",value:"順豐到付"},domProps:{checked:t._q(t.pay,"順豐到付")},on:{change:function(e){t.pay="順豐到付"}}}),t._m(2)])]),i("div",{staticClass:"total"},[i("p",[t._v("商品總金額："),i("span",[t._v("$"+t._s(t.totalPrice))])]),"順豐到付"==t.pay?i("p",[t._v("海外宅配郵資計算重量："),i("span",[t._v(t._s(t.overseaWeight)+"公克")])]):t._e(),i("p",[t._v("運費總金額："),i("span",[t._v("$"+t._s(t.freight))])]),i("p",[t._v("本次訂單金額："),i("span",[t._v("$"+t._s(t.freight+t.totalPrice))])])])]),i("div",{staticClass:"btn_group"},[i("a",{attrs:{href:"javascript:;"},on:{click:t.toBack}},[t._v("取消，回上一步")]),i("a",{attrs:{href:"javascript:;"},on:{click:t.next}},[t._v("確認資料")])])])])},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",[t._v("訂單商品")]),i("div",[t._v("單價")]),i("div",[t._v("數量")]),i("div",[t._v("總計")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",[t._v("付款方式")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t._v("順豐到付"),i("span",[t._v("（陸港澳）")])])}],h=(i("b0c0"),{data:function(){return{name:"",address:"",tel:"",pay:"貨到付款",totalPrice:this.$store.state.checkout.totalPrice}},computed:{itemList:function(){var t=this,e=[];return this.$store.state.checkout.buy.forEach((function(i){var a=t.$store.state.commodity.find((function(t){return t._id==i.id}));e.push({number:i.number,obj:a})})),e},overseaWeight:function(){var t=0;return"順豐到付"==this.pay&&this.itemList.forEach((function(e){"3"==e.obj.classify?t+=1e3*e.number:t+=475*e.number})),t},freight:function(){return"順豐到付"==this.pay?this.overseaWeight/1e3<1?120:120+50*Math.floor(this.overseaWeight/1e3-1):this.$store.state.config.freight}},methods:{toMember:function(){this.$store.state.user._id&&(this.name=this.$store.state.user.lastname+this.$store.state.user.firstname,this.address=this.$store.state.user.address,this.tel=this.$store.state.user.tel)},toBack:function(){this.$emit("toBack")},next:function(){return""==this.name?alert("請輸入收件人姓名"):""==this.address?alert("請輸入寄送地址"):""==this.tel?alert("請輸入連絡電話"):void this.$emit("next",{name:this.name,address:this.address,tel:this.tel,pay:this.pay,total:this.freight+this.totalPrice})}}}),f=h,_=(i("2fdc"),Object(d["a"])(f,v,p,!1,null,"8391f254",null)),b=_.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"sendOrder"},[i("h2",[t._v("請確認資料是否有誤")]),i("hr"),i("div",{staticClass:"order_info"},[i("p",[i("span",[t._v("收件者：")]),t._v(t._s(t.data.name))]),i("p",[i("span",[t._v("連絡電話：")]),t._v(t._s(t.data.tel))]),i("p",[i("span",[t._v("郵寄地址：")]),t._v(t._s(t.data.address))]),i("p",[i("span",[t._v("付款方式：")]),t._v(t._s(t.data.pay))]),i("p",[i("span",[t._v("應付金額：")]),t._v("$"+t._s(t.data.total))])]),i("div",{staticClass:"btn_group"},[i("a",{attrs:{href:"javascript:;"},on:{click:t.toBack}},[t._v("取消，回上一步")]),i("a",{attrs:{href:"javascript:;"},on:{click:t.final}},[t._v("下訂單")])])])])},y=[],C={props:{data:{type:Object}},methods:{toBack:function(){this.$emit("toBack")},final:function(){this.$emit("addOrder",{name:this.data.name,address:this.data.address,tel:this.data.tel,pay:this.data.pay,total:this.data.total,buy:this.$store.state.checkout.buy,userId:this.$store.state.user._id})}}},$=C,g=(i("2387"),Object(d["a"])($,k,y,!1,null,"ddf84c32",null)),E=g.exports,x={components:{cartItem:l,myFooter:m["a"],cartFrom:b,sendOrder:E},data:function(){return{idList:this.$store.state.cart,step:1,orderData:{},orderId:this.$store.state.nowOrder}},methods:{updateCart:function(){this.$store.commit("updateCartList",this.idList),this.$store.dispatch("a_updateCart")},selectAll:function(){this.totalChecked?(this.idList.forEach((function(t){t.checked=!1})),this.updateCart()):(this.idList.forEach((function(t){t.checked=!0})),this.updateCart())},next:function(t){this.orderData=t,this.step=3},addOrder:function(t){this.$store.dispatch("a_addOrder",t),this.step=4}},computed:{totalChecked:function(){return this.idList.every((function(t){return 1==t.checked}))},totalPrice:function(){var t=this,e=0;return this.idList.forEach((function(i){if(i.checked){var a=t.$store.state.commodity.find((function(t){return t._id==i.id}));e+=a.sale_price*i.number}})),e}},watch:{totalPrice:function(t){this.$store.commit("updateTotalPrice",{totalPrice:t,buy:this.idList.filter((function(t){return 1==t.checked}))})}},created:function(){if(!this.$store.state.user._id)return this.$router.push({path:"/login"});this.$store.commit("updateTotalPrice",{totalPrice:this.totalPrice,buy:this.idList.filter((function(t){return 1==t.checked}))})}},P=x,j=(i("51e5"),Object(d["a"])(P,a,s,!1,null,"4be71fb1",null));e["default"]=j.exports},b806:function(t,e,i){"use strict";var a=i("0540"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-73980ea8.f7d357d2.js.map