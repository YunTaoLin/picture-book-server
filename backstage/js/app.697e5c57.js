(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],l=0,m=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},n=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0972b72e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var u=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/admin/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cde":function(t,e,a){"use strict";var i=a("a5d4"),r=a.n(i);r.a},"0fe1":function(t,e,a){},"3c4f":function(t,e,a){},"43ea":function(t,e,a){"use strict";var i=a("ac5b"),r=a.n(i);r.a},"4f1d":function(t,e,a){},5297:function(t,e,a){"use strict";var i=a("6e48"),r=a.n(i);r.a},"56a6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"myContainer"},[a("div",{staticClass:"main"},[a("div",{staticClass:"control_bar"},[a("router-link",{attrs:{to:"/commodity"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("商品管理")])]),a("router-link",{attrs:{to:"/order"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("訂單管理")])]),a("router-link",{attrs:{to:"member"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("會員管理")])])],1),a("div",{staticClass:"view"},[a("router-view")],1)])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:a("a324"),alt:"logo"}})]),i("span",{staticClass:"header_title"},[t._v("後台管理系統")]),i("div",{staticClass:"logout"},[i("a",{attrs:{href:"/"}},[t._v("登出系統")])])])}],s={beforeCreate:function(){this.$store.dispatch("a_getMember"),this.$store.dispatch("a_getCommodity"),this.$store.dispatch("a_getOrder")}},o=s,c=(a("5c0b"),a("2877")),u=Object(c["a"])(o,r,n,!1,null,null,null),l=u.exports,d=(a("d3b7"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("商品列表")]),a("a",{staticClass:"btn_new",attrs:{href:"#"},on:{click:function(e){t.show=!0}}},[t._v("新增商品")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.queryClassify,expression:"queryClassify"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.queryClassify=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"4"}},[t._v("全部")]),a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])]),a("div",{staticClass:"search_bar ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋商品編號或名稱"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)]),a("p",{staticClass:"ml-5"},[t._v("搜尋結果數量："+t._s(t.filterList.length))])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e.title},[a("th",[t._v(t._s(t.classify(e.classify)))]),a("th",[a("img",{attrs:{src:e.img,alt:"縮圖"}})]),a("th",[t._v(t._s(e.title))]),a("th",{staticClass:"info",attrs:{title:e.info}},[a("p",[t._v(t._s(e.info))])]),a("th",[t._v(t._s(e.sale_price)+"元/"+t._s(e.ori_price)+"元")]),a("th",[t._v(t._s(e.sale)+"本")]),a("th",[t._v(t._s(e.like.length)+"人")]),a("th",[t._v(t._s(new Date(e.last_time).toLocaleString()))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("編輯")]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.deleteHandler(e)}}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])])])})),0)])])]),t.show?a("newCommodity",{on:{cancel:function(e){t.show=!1}}}):t._e(),t.editing._id?a("editCommodity",{attrs:{commodity:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("縮圖")]),a("th",[t._v("商品名稱")]),a("th",[t._v("商品資訊")]),a("th",[t._v("優惠價格/原始價格")]),a("th",[t._v("銷售數量")]),a("th",[t._v("追蹤人數")]),a("th",[t._v("最後更新時間")]),a("th",[t._v("操作")])])])}],v=(a("4de4"),a("c975"),a("e25e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("h2",[t._v("新增商品")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("form",[a("label",{attrs:{for:"title"}},[t._v(" 商品名稱： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.title,expression:"newCommodity.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.newCommodity.title},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"title",e.target.value)}}})]),a("label",{attrs:{for:"img"}},[t._v(" 年齡分類： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.classify,expression:"newCommodity.classify"}],attrs:{name:"",id:"classify"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newCommodity,"classify",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])])]),a("label",{attrs:{for:"img"}},[t._v(" 商品圖片： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.img,expression:"newCommodity.img"}],attrs:{type:"text",id:"img"},domProps:{value:t.newCommodity.img},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"img",e.target.value)}}})]),a("label",{attrs:{for:"ori_price"}},[t._v(" 商品原價： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.ori_price,expression:"newCommodity.ori_price"}],attrs:{type:"number",id:"ori_price"},domProps:{value:t.newCommodity.ori_price},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"ori_price",e.target.value)}}})]),a("label",{attrs:{for:"sale_price"}},[t._v(" 優惠價格： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.sale_price,expression:"newCommodity.sale_price"}],attrs:{type:"number",id:"sale_price"},domProps:{value:t.newCommodity.sale_price},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"sale_price",e.target.value)}}})]),a("label",{attrs:{for:"info"}},[t._v(" 商品資訊： "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.info,expression:"newCommodity.info"}],attrs:{name:"",id:"info",cols:"30",rows:"8"},domProps:{value:t.newCommodity.info},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"info",e.target.value)}}})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.addCommodity}},[t._v("新增")])])])}),p=[],_={data:function(){return{newCommodity:{title:"",img:"",ori_price:0,sale_price:0,info:"",classify:-1}}},methods:{cancel:function(){this.$emit("cancel")},addCommodity:function(){this.cancel(),this.$store.dispatch("a_addCommodity",this.newCommodity)}}},h=_,y=(a("0cde"),Object(c["a"])(h,v,p,!1,null,"074ebefb",null)),b=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("h2",[t._v("編輯商品")]),a("p",[t._v("商品編號："+t._s(t.commodity._id))]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("form",[a("label",{attrs:{for:"title"}},[t._v(" 商品名稱： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.title,expression:"editData.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.editData.title},on:{input:function(e){e.target.composing||t.$set(t.editData,"title",e.target.value)}}})]),a("label",{attrs:{for:"img"}},[t._v(" 年齡分類： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.editData.classify,expression:"editData.classify"}],attrs:{name:"",id:"classify"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editData,"classify",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])])]),a("label",{attrs:{for:"img"}},[t._v(" 商品圖片： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.img,expression:"editData.img"}],attrs:{type:"text",id:"img"},domProps:{value:t.editData.img},on:{input:function(e){e.target.composing||t.$set(t.editData,"img",e.target.value)}}})]),a("label",{attrs:{for:"ori_price"}},[t._v(" 商品原價： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.ori_price,expression:"editData.ori_price"}],attrs:{type:"number",id:"ori_price"},domProps:{value:t.editData.ori_price},on:{input:function(e){e.target.composing||t.$set(t.editData,"ori_price",e.target.value)}}})]),a("label",{attrs:{for:"sale_price"}},[t._v(" 優惠價格： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.sale_price,expression:"editData.sale_price"}],attrs:{type:"number",id:"sale_price"},domProps:{value:t.editData.sale_price},on:{input:function(e){e.target.composing||t.$set(t.editData,"sale_price",e.target.value)}}})]),a("label",{attrs:{for:"info"}},[t._v(" 商品資訊： "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editData.info,expression:"editData.info"}],attrs:{name:"",id:"info",cols:"30",rows:"8"},domProps:{value:t.editData.info},on:{input:function(e){e.target.composing||t.$set(t.editData,"info",e.target.value)}}})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.update}},[t._v("更新")])])])},C=[],w={props:{commodity:Object},data:function(){return{editData:{title:this.commodity.title,img:this.commodity.img,ori_price:this.commodity.ori_price,sale_price:this.commodity.sale_price,info:this.commodity.info,classify:this.commodity.classify}}},methods:{cancel:function(){this.$emit("cancel")},update:function(){this.$store.dispatch("a_updateCommodity",{data:this.editData,commodity_id:this.commodity._id}),this.cancel()}}},D=w,k=(a("5297"),Object(c["a"])(D,g,C,!1,null,"171b8770",null)),x=k.exports,$={components:{newCommodity:b,editCommodity:x},data:function(){return{show:!1,Commodity:this.$store.state.commodity,editing:{},queryClassify:4,queryID:""}},computed:{filterList:function(){var t=this,e=[];return e=4==this.queryClassify?this.Commodity:this.Commodity.filter((function(e){return parseInt(e.classify)===parseInt(t.queryClassify)})),""==this.queryID?e:e.filter((function(e){return e._id===t.queryID||-1!==e.title.indexOf(t.queryID)}))}},methods:{edit:function(t){this.editing=t},classify:function(t){var e;switch(t=parseInt(t),t){case-1:e="當季精選繪本";break;case 0:e="0-6歲幼兒繪本";break;case 1:e="6-12歲兒童繪本";break;case 2:e="12歲up青少年";break;case 3:e="其他周邊"}return e},deleteHandler:function(t){if(confirm("是否確定要刪除該商品")){t._id;alert("抱歉，商品刪除功能暫時關閉中")}}}},O=$,q=(a("43ea"),Object(c["a"])(O,m,f,!1,null,"07ffff51",null)),I=q.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("訂單管理")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.queryStatus,expression:"queryStatus"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.queryStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("顯示未處理")]),a("option",{attrs:{value:"1"}},[t._v("顯示配送中")]),a("option",{attrs:{value:"2"}},[t._v("顯示已完成")]),a("option",{attrs:{value:"3"}},[t._v("顯示全部")])]),a("div",{staticClass:"search_bar ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋訂單編號"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e._id},[a("th",{style:"color:"+t.statusColor(e.status)},[t._v(t._s(t.status(e.status)))]),a("th",[t._v(t._s(e._id)+" ")]),a("th",[t._v(t._s(e.name)),a("br"),t._v(" "),a("span",{staticClass:"member_id"},[t._v(" "+t._s("（"+e.userId+"）"))])]),a("th",{staticClass:"content"},[a("ul",t._l(e.buy,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(t.query_commodity(e.id))+" X "+t._s(e.number)+" ")])})),0)]),a("th",{attrs:{title:e.address}},[a("p",{staticClass:"text-over"},[t._v(t._s(e.address))])]),a("th",[t._v(t._s(e.tel))]),a("th",[t._v(t._s(e.total)+"元")]),a("th",[t._v(t._s(new Date(e.create_time).toLocaleString()))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("變更狀態")]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.deleteHandler(e)}}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])])])})),0)])])]),t.editing._id?a("orderStatus",{attrs:{order:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("狀態")]),a("th",[t._v("訂單編號")]),a("th",[t._v("訂購人")]),a("th",[t._v("訂單內容")]),a("th",[t._v("配送地址")]),a("th",[t._v("聯絡電話")]),a("th",[t._v("總金額(含運費)")]),a("th",[t._v("建立時間")]),a("th",[t._v("操作")])])])}],E=(a("7db0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status"},[a("h2",[t._v("變更狀態")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"info"},[a("p",[t._v("訂單編號："+t._s(t.order._id))]),a("p",[t._v("目前狀態："+t._s(t.status(t.order.status)))])]),a("form",[a("label",{attrs:{for:"status"}},[t._v(" 修改狀態： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.orderStatus,expression:"orderStatus"}],attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.orderStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("尚未處理")]),a("option",{attrs:{value:"1"}},[t._v("配送中")]),a("option",{attrs:{value:"2"}},[t._v("已完成")])])]),a("a",{attrs:{href:"javascript:;"},on:{click:t.update}},[t._v("變更狀態")])])])}),P=[],M={props:{order:Object},data:function(){return{orderStatus:this.order.status}},methods:{cancel:function(){this.$emit("cancel")},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="尚未處理";break;case 1:e="配送中";break;case 2:e="已完成"}return e},update:function(){this.$store.dispatch("a_updateOrder",{status:this.orderStatus,order_id:this.order._id}),this.cancel()}}},N=M,L=(a("b901"),Object(c["a"])(N,E,P,!1,null,"2f8dc6dd",null)),A=L.exports,H={components:{orderStatus:A},data:function(){return{show:!0,order:this.$store.state.order,user:this.$store.state.user,commodity:this.$store.state.commodity,queryID:"",queryStatus:0,editing:{}}},computed:{filterList:function(){var t,e=this,a=this.order;return a=3==this.queryStatus?this.order:this.order.filter((function(t){return t.status==e.queryStatus})),t=this.queryID?a.filter((function(t){return-1!=t._id.indexOf(e.queryID)})):a,t.reverse()}},methods:{status:function(t){var e;switch(t=parseInt(t),t){case 0:e="尚未處理";break;case 1:e="配送中";break;case 2:e="已完成"}return e},query_user:function(t){var e=this.user.filter((function(e){return e._id==t}));return e[0]},query_commodity:function(t){var e=this.$store.state.commodity.find((function(e){return-1!=e._id.indexOf(t)}));return e?e.title:"該商品已被移除"},pay:function(t,e){for(var a=0,i=0;i<t.length;i++){var r=this.query_commodity(t[i].id).sale_price,n=t[i].number;a+=r*n}return a+parseInt(e)},statusColor:function(t){var e;switch(t=parseInt(t),t){case 0:e="red";break;case 1:e="orange";break;case 2:e="green"}return e},edit:function(t){this.editing=t},deleteHandler:function(t){if(confirm("是否確定要刪除該訂單資料")){var e=t._id;this.$store.dispatch("a_deleteOrder",{deleteID:e})}}}},T=H,U=(a("95c4"),Object(c["a"])(T,j,S,!1,null,"677380b0",null)),J=U.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("會員列表")]),a("div",{staticClass:"search_bar ml-2"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋名字or編號"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e._id},[a("th",[t._v(t._s(e._id))]),a("th",[t._v(t._s(e.firstname+" "+e.lastname))]),a("th",[t._v(t._s(e.email))]),a("th",[t._v(t._s(t.gender(e.gender)))]),a("th",[t._v(t._s(e.tel))]),a("th",[t._v(t._s(e.address))]),a("th",[t._v(t._s(t.status(e.status)))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("變更狀態")]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.deleteHandler(e)}}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])])])})),0)])])]),t.editing._id?a("memberStatus",{attrs:{member:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("會員編號")]),a("th",[t._v("名稱")]),a("th",[t._v("登入信箱")]),a("th",[t._v("性別")]),a("th",[t._v("電話")]),a("th",[t._v("住址")]),a("th",[t._v("帳號狀態")]),a("th",[t._v("操作")])])])}],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status"},[a("h2",[t._v("變更狀態")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"info"},[a("p",[t._v("會員編號："+t._s(t.member._id))]),a("p",[t._v("會員名稱："+t._s(t.member.firstname+" "+t.member.lastname))]),a("p",[t._v("登入信箱："+t._s(t.member.email))]),a("p",[t._v("建立時間："+t._s(new Date(t.member.create_time).toLocaleString("zh-TW")))]),a("p",[t._v("目前狀態："+t._s(t.status(t.member.status)))])]),a("form",[a("label",{attrs:{for:"status"}},[t._v(" 修改狀態： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.memberStatus,expression:"memberStatus"}],attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.memberStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("正常使用")]),a("option",{attrs:{value:"2"}},[t._v("封鎖中")])])]),a("a",{attrs:{href:"javascript:;"},on:{click:t.update}},[t._v("變更狀態")])])])},B=[],F={props:{member:Object},data:function(){return{memberStatus:this.member.status}},methods:{update:function(){this.$store.dispatch("a_updateMember",{status:this.memberStatus,member_id:this.member._id}),this.cancel()},cancel:function(){this.$emit("cancel")},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="正常使用";break;case 1:break;case 2:e="封鎖中"}return e}}},G=F,K=(a("5a12"),Object(c["a"])(G,X,B,!1,null,"c734d0c2",null)),Q=K.exports,R={components:{memberStatus:Q},data:function(){return{members:this.$store.state.user,queryID:"",editing:{}}},computed:{filterList:function(){var t=this;return""==this.queryID?this.members:this.members.filter((function(e){return-1!=e.firstname.indexOf(t.queryID)||-1!=e.lastname.indexOf(t.queryID)||-1!=e._id.indexOf(t.queryID)}))}},methods:{gender:function(t){var e;switch(t=parseInt(t),t){case-1:e="保密";break;case 1:e="男";break;case 0:e="女"}return e},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="正常使用";break;case 1:break;case 2:e="帳號封鎖中"}return e},edit:function(t){this.editing=t},deleteHandler:function(t){if(confirm("是否確定要刪除該會員資料")){var e=t._id;this.$store.dispatch("a_deleteMember",{deleteID:e})}}}},V=R,Y=(a("d734"),Object(c["a"])(V,z,W,!1,null,"84a8b3d8",null)),Z=Y.exports;i["a"].use(d["a"]);var tt=[{path:"/",redirect:"/commodity"},{path:"/commodity",name:"commodity",component:I},{path:"/order",name:"order",component:J},{path:"/member",name:"member",component:Z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],et=new d["a"]({routes:tt}),at=et,it=(a("159b"),a("2f62")),rt=a("bc3a"),nt=a.n(rt);i["a"].use(it["a"]);var st=new it["a"].Store({state:{commodity:[],order:[],user:[]},mutations:{getMember:function(t,e){e.forEach((function(e){t.user.unshift(e)}))},updateMember:function(t,e){t.user.forEach((function(t){t._id==e.member_id&&(t.status=e.status)}))},getCommodity:function(t,e){e.forEach((function(e){t.commodity.unshift(e)}))},addCommodity:function(t,e){t.commodity.unshift(e)},updateCommodity:function(t,e){t.commodity.forEach((function(a,r){a._id==e._id&&i["a"].set(t.commodity,r,e)}))},getOrder:function(t,e){t.order=e},updateOrder:function(t,e){t.order.forEach((function(t){t._id==e.order_id&&(t.status=e.status)}))},deleteMember:function(t,e){console.log("有啟動");var a=[];t.user.forEach((function(t){t._id!=e&&a.push(t)})),console.log(a),t.user=a},deleteOrder:function(t,e){console.log("有啟動");var a=[];t.order.forEach((function(t){t._id!=e&&a.push(t)})),console.log(a),t.order=a}},actions:{a_getMember:function(t){nt.a.get("/backstage/getMember").then((function(e){t.commit("getMember",e.data.member)}))},a_updateMember:function(t,e){nt.a.post("/backstage/updateMember",e).then((function(){t.commit("updateMember",e)}))},a_getCommodity:function(t){nt.a.get("/backstage/getCommodity").then((function(e){t.commit("getCommodity",e.data.commodity)}))},a_addCommodity:function(t,e){nt.a.post("/backstage/addCommodity",e).then((function(e){t.commit("addCommodity",e.data.commodity)}))},a_updateCommodity:function(t,e){nt.a.post("/backstage/updateCommodity",e).then((function(e){t.commit("updateCommodity",e.data.data)}))},a_getOrder:function(t,e){nt.a.get("/backstage/getOrder",e).then((function(e){console.log(e),t.commit("getOrder",e.data.order)}))},a_updateOrder:function(t,e){console.log(e),nt.a.post("/backstage/updateOrder",e).then((function(a){console.log(a),t.commit("updateOrder",e)}))},a_deleteMember:function(t,e){nt.a.post("/backstage/deleteMember",e).then((function(a){0==a.data.error_code?(alert("刪除完成！"),t.commit("deleteMember",e.deleteID)):alert("刪除失敗，請稍後再試！")}))},a_deleteOrder:function(t,e){nt.a.post("/backstage/deleteOrder",e).then((function(a){console.log(a),0==a.data.error_code?(alert("刪除完成！"),t.commit("deleteOrder",e.deleteID)):alert("刪除失敗，請稍後再試！")}))}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:at,store:st,render:function(t){return t(l)}}).$mount("#app")},"5a12":function(t,e,a){"use strict";var i=a("56a6"),r=a.n(i);r.a},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),r=a.n(i);r.a},"6e48":function(t,e,a){},"95c4":function(t,e,a){"use strict";var i=a("0fe1"),r=a.n(i);r.a},"9c0c":function(t,e,a){},a324:function(t,e,a){t.exports=a.p+"img/mylogo3.4ec5d41f.png"},a5d4:function(t,e,a){},ac5b:function(t,e,a){},b901:function(t,e,a){"use strict";var i=a("3c4f"),r=a.n(i);r.a},d734:function(t,e,a){"use strict";var i=a("4f1d"),r=a.n(i);r.a}});
//# sourceMappingURL=app.697e5c57.js.map