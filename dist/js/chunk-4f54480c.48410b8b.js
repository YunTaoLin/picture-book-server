(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f54480c"],{"05c0":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wow fadeIn"},[i("list",{attrs:{banner:t.banner,title:t.title}})],1)},a=[],o=i("2e90"),r={components:{list:o["a"]},data:function(){return{banner:"https://webtribune.rs/wp-content/uploads/2018/05/ghfdekiurhfgeiwsj.jpg",title:"少年繪本"}}},n=r,c=i("2877"),l=Object(c["a"])(n,e,a,!1,null,null,null);s["default"]=l.exports},"2e90":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.banner,alt:""}}),i("div",{staticClass:"title"},[i("p",[t._v(t._s(t.title))])])]),i("div",{staticClass:"filter_bar"},[i("div",{staticClass:"sort"},[t._v(" 排序方式： "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.sort=s.target.multiple?i:i[0]},function(s){return t.sortList(t.sort)}]}},[i("option",{attrs:{value:"1"}},[t._v("依上架時間（ 由新到舊 ）")]),i("option",{attrs:{value:"2"}},[t._v("由舊到新排列")]),i("option",{attrs:{value:"3"}},[t._v("價格高到低排列")]),i("option",{attrs:{value:"4"}},[t._v("價格低到高排列")])])]),i("div",{staticClass:"showHowMany"},[t._v(" 搜尋商品數量： "),i("span",[t._v(t._s(t.list.length))]),t._v("筆 ")])]),i("div",{staticClass:"list"},[i("div",{staticClass:"row"},t._l(t.list,(function(s){return i("div",{key:s._id,staticClass:"col-4"},[i("item",{attrs:{commodity:s},on:{like:function(s){return t.showToast(s)}}})],1)})),0)]),t.toastContent_like?i("div",{staticClass:"myToast"},[i("p",[t._v("已追蹤該商品")])]):t._e(),t.toastContent_dislike?i("div",{staticClass:"myToast"},[i("p",[t._v("已取消追蹤")])]):t._e(),t.toastContent_cart?i("div",{staticClass:"myToast cart"},[i("p",[t._v("已將商品加入購物車"),i("br"),t.$store.state.user._id?t._e():i("span",[t._v("提醒您：登入後才可保存購物車內的資料")])])]):t._e(),t.toastContent_login?i("div",{staticClass:"myToast noFadeOut"},[i("p",[t._v("登入後才可以追蹤商品喔")]),i("div",{staticClass:"group"},[i("router-link",{attrs:{to:"/login"}},[t._v("前往登入")]),i("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.toastContent_login=!1}}},[t._v("繼續保持訪客狀態")])],1)]):t._e()])},a=[],o=(i("4e82"),i("b0c0"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myCard"},[i("div",{staticClass:"pic"},[i("router-link",{attrs:{to:"/detail/"+t.commodity._id}},[i("img",{attrs:{src:t.commodity.img,alt:"商品圖片"}})])],1),i("div",{staticClass:"classify"},[t._v(" "+t._s(t.classify(t.commodity.classify))+" ")]),i("div",{staticClass:"title mb-2"},[i("router-link",{attrs:{to:"/detail/"+t.commodity._id}},[t._v(" "+t._s(t.commodity.title)+" ")])],1),i("div",{staticClass:"group"},[i("div",{staticClass:"price"},[i("div",{staticClass:"ori_pricee"},[t._v(" 原價：$ "),i("span",[t._v(t._s(t.commodity.ori_price))])]),i("div",{staticClass:"sale_price"},[t._v(" NT$ "),i("span",[t._v(t._s(t.commodity.sale_price))])])]),i("div",{staticClass:"control_bar"},[i("div",{staticClass:"like"},[t.isLike?i("a",{class:{active:t.isLike},attrs:{href:"javascript:;",title:"取消追蹤"},on:{click:t.like}},[i("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}})]):i("a",{attrs:{href:"javascript:;",title:"追蹤商品"},on:{click:t.like}},[i("i",{staticClass:"fa fa-heart-o",attrs:{"aria-hidden":"true"}})])]),i("div",{staticClass:"cart"},[i("a",{class:{active:t.isCart},attrs:{href:"javascript:;",title:"加入購物車"},on:{click:t.addCart}},[i("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}})])])])])])}),r=[],n={props:{commodity:{type:Object}},data:function(){return{isLike:!1,isCart:!1}},methods:{like:function(){this.$store.state.user._id?(this.isLike=!this.isLike,this.isLike?(this.$emit("like","1"),this.$store.commit("addUserLike",this.commodity._id),this.$store.dispatch("a_like",{user:this.$store.state.user,commodity_id:this.commodity._id})):(this.$emit("like","2"),this.$store.commit("removeUserLike",this.commodity._id),this.$store.dispatch("a_dislike",{user:this.$store.state.user,commodity_id:this.commodity._id}))):this.$emit("like","3")},classify:function(t){var s;switch(t){case-1:s="當季特賣";break;case 0:s="幼兒繪本";break;case 1:s="兒童繪本";break;case 2:s="少年繪本";break;case 3:s="其他周邊"}return s},addCart:function(){console.log("addcart"),this.$store.commit("addCart",{id:this.commodity._id,number:1,checked:!0}),localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),this.$store.state.user._id&&this.$store.dispatch("a_updateCart"),this.$emit("like","4"),this.isCart=!0}},created:function(){var t=this;this.$store.state.user._id&&this.$store.state.user.like.some((function(s){return s==t.commodity._id}))&&(this.isLike=!0),this.$store.state.cart.some((function(s){return s.id==t.commodity._id}))&&(this.isCart=!0)}},c=n,l=(i("6b93"),i("2877")),d=Object(l["a"])(c,o,r,!1,null,"0d680f06",null),u=d.exports,_={props:{banner:{type:String},title:{type:String}},components:{item:u},data:function(){return{list:[],sort:1,toastContent_like:!1,toastContent_dislike:!1,toastContent_cart:!1,toastContent_login:!1}},methods:{sortList:function(t){switch(t){case"1":this.list.sort((function(t,s){return t.create_time<s.create_time?1:-1}));break;case"2":this.list.sort((function(t,s){return t.create_time>s.create_time?1:-1}));break;case"3":this.list.sort((function(t,s){return t.sale_price<s.sale_price?1:-1}));break;case"4":this.list.sort((function(t,s){return t.sale_price>s.sale_price?1:-1}))}},showToast:function(t){var s=this;console.log(t),1==t?(this.toastContent_like=!1,this.toastContent_like=!0,setTimeout((function(){s.toastContent_like=!1}),1500)):2==t?(this.toastContent_dislike=!1,this.toastContent_dislike=!0,setTimeout((function(){s.toastContent_dislike=!1}),1500)):3==t?(this.toastContent_login=!1,this.toastContent_login=!0):(this.toastContent_cart=!1,this.toastContent_cart=!0,setTimeout((function(){s.toastContent_cart=!1}),1500))}},created:function(){"total"==this.$route.name?this.list=this.$store.state.commodity:this.list=this.$store.getters[this.$route.name]}},m=_,h=(i("8da7"),Object(l["a"])(m,e,a,!1,null,"504a1c10",null));s["a"]=h.exports},"4e82":function(t,s,i){"use strict";var e=i("23e7"),a=i("1c0b"),o=i("7b0b"),r=i("d039"),n=i("b301"),c=[],l=c.sort,d=r((function(){c.sort(void 0)})),u=r((function(){c.sort(null)})),_=n("sort"),m=d||!u||_;e({target:"Array",proto:!0,forced:m},{sort:function(t){return void 0===t?l.call(o(this)):l.call(o(this),a(t))}})},"6b93":function(t,s,i){"use strict";var e=i("cd9b"),a=i.n(e);a.a},"8da7":function(t,s,i){"use strict";var e=i("e42d"),a=i.n(e);a.a},cd9b:function(t,s,i){},e42d:function(t,s,i){}}]);
//# sourceMappingURL=chunk-4f54480c.48410b8b.js.map