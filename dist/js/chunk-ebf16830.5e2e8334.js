(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebf16830"],{"47b9":function(t,s,e){"use strict";var i=e("fb0b"),a=e.n(i);a.a},"5a37":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"commodity wow fadeIn"},[e("div",{staticClass:"container"},[e("div",{staticClass:"myBreadcrumb"},[e("router-link",{attrs:{to:"/"}},[t._v("首頁")]),e("span",{staticClass:"icon"},[t._v(">")]),e("span",[t._v(t._s(t.classify))])],1),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("h2",{staticClass:"title"},[t._v("商品分類")]),e("ul",{staticClass:"menu"},[e("li",[e("router-link",{attrs:{to:"/commodity/total"}},[t._v("全部商品 | 好書通通有")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/season"}},[t._v("精選繪本 | 當季特賣")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/elementary"}},[t._v("幼兒繪本 | 適合0~6歲幼兒")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/junior"}},[t._v("兒童繪本 | 適合6~12歲兒童")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/senior"}},[t._v("少年繪本 | 適合12歲以上")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/other"}},[t._v("其他周邊商品")])],1)]),e("recommend",{staticClass:"mt-5",attrs:{list:t.recommoendList}})],1),e("div",{staticClass:"col-9"},[e("router-view")],1)])]),e("myFooter")],1)},a=[],o=(e("fb6a"),e("b0c0"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recommend"},[e("h2",[t._v("熱銷排行")]),e("ul",t._l(t.list,(function(s,i){return e("li",{key:s._id},[e("div",{staticClass:"myCard"},[e("div",{staticClass:"hot"},[t._v("No."),e("span",[t._v(t._s(i+1))])]),e("div",{staticClass:"pic"},[e("router-link",{attrs:{to:"/detail/"+s._id}},[e("img",{attrs:{src:s.img,alt:"商品圖片"}})])],1),e("div",{staticClass:"title"},[e("router-link",{attrs:{to:"/detail/"+s._id}},[t._v(" "+t._s(s.title)+" ")])],1),e("div",{staticClass:"price"},[t._v(" 優惠價格："),e("span",[t._v("$")]),e("span",[t._v(t._s(s.sale_price))])])])])})),0)])}),r=[],c={props:{list:{type:Array}}},n=c,l=(e("47b9"),e("2877")),m=Object(l["a"])(n,o,r,!1,null,"273cafdb",null),d=m.exports,u=e("fd2d"),v={components:{recommend:d,myFooter:u["a"]},data:function(){return{recommoendList:[]}},computed:{classify:function(){var t="";switch(this.$route.name){case"season":t="精選繪本 | 當季特賣";break;case"elementary":t="幼兒繪本 | 適合0~6歲幼兒";break;case"junior":t="兒童繪本 | 適合6~12歲兒童";break;case"senior":t="少年繪本 | 適合12歲以上";break;case"other":t="其他周邊商品";break;case"total":t="全部商品 | 好書通通有";break}return t}},methods:{getRecommoendList:function(){"total"==this.$route.name?this.recommoendList=this.$store.state.commodity.slice(5,10):this.recommoendList=this.$store.getters[this.$route.name].slice(5,10)}},created:function(){this.getRecommoendList()},beforeUpdate:function(){this.getRecommoendList()}},_=v,f=(e("bec4"),Object(l["a"])(_,i,a,!1,null,"6de6f9e8",null));s["default"]=f.exports},b1ed:function(t,s,e){},bec4:function(t,s,e){"use strict";var i=e("b1ed"),a=e.n(i);a.a},fb0b:function(t,s,e){}}]);
//# sourceMappingURL=chunk-ebf16830.5e2e8334.js.map