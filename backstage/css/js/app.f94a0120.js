(function(t){function e(e){for(var i,n,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},s=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0972b72e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/admin/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0410":function(t,e,a){},"0cde":function(t,e,a){"use strict";var i=a("a5d4"),r=a.n(i);r.a},3010:function(t,e,a){},"4d9c":function(t,e,a){"use strict";var i=a("e49e"),r=a.n(i);r.a},5297:function(t,e,a){"use strict";var i=a("6e48"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"myContainer"},[a("div",{staticClass:"main"},[a("div",{staticClass:"control_bar"},[a("router-link",{attrs:{to:"/commodity"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("商品管理")])]),a("router-link",{attrs:{to:"/order"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("訂單管理")])]),a("router-link",{attrs:{to:"member"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),a("p",[t._v("會員管理")])])],1),a("div",{staticClass:"view"},[a("router-view")],1)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:a("a324"),alt:"logo"}})]),i("span",{staticClass:"header_title"},[t._v("後台管理系統")]),i("div",{staticClass:"logout"},[i("a",{attrs:{href:"javascript;"}},[t._v("登出系統")])])])}],n={beforeCreate:function(){this.$store.dispatch("a_getMember"),this.$store.dispatch("a_getCommodity"),this.$store.dispatch("a_getOrder")}},o=n,c=(a("5c0b"),a("2877")),u=Object(c["a"])(o,r,s,!1,null,null,null),l=u.exports,m=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("商品列表")]),a("a",{staticClass:"btn_new",attrs:{href:"#"},on:{click:function(e){t.show=!0}}},[t._v("新增商品")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.queryClassify,expression:"queryClassify"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.queryClassify=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"4"}},[t._v("全部")]),a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])]),a("div",{staticClass:"search_bar ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋商品編號或名稱"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)]),a("p",{staticClass:"ml-5"},[t._v("搜尋結果數量："+t._s(t.filterList.length))])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e.title},[a("th",[t._v(t._s(t.classify(e.classify)))]),a("th",[a("img",{attrs:{src:e.img,alt:"縮圖"}})]),a("th",[t._v(t._s(e.title))]),a("th",{staticClass:"info",attrs:{title:e.info}},[a("p",[t._v(t._s(e.info))])]),a("th",[t._v(t._s(e.sale_price)+"元/"+t._s(e.ori_price)+"元")]),a("th",[t._v(t._s(e.sale)+"本")]),a("th",[t._v(t._s(e.like.length)+"人")]),a("th",[t._v(t._s(new Date(e.last_time).toLocaleString()))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("編輯")]),t._m(2,!0)])])})),0)])])]),t.show?a("newCommodity",{on:{cancel:function(e){t.show=!1}}}):t._e(),t.editing._id?a("editCommodity",{attrs:{commodity:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("縮圖")]),a("th",[t._v("商品名稱")]),a("th",[t._v("商品資訊")]),a("th",[t._v("優惠價格/原始價格")]),a("th",[t._v("銷售數量")]),a("th",[t._v("追蹤人數")]),a("th",[t._v("最後更新時間")]),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])}],f=(a("4de4"),a("c975"),a("e25e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("h2",[t._v("新增商品")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("form",[a("label",{attrs:{for:"title"}},[t._v(" 商品名稱： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.title,expression:"newCommodity.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.newCommodity.title},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"title",e.target.value)}}})]),a("label",{attrs:{for:"img"}},[t._v(" 年齡分類： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.classify,expression:"newCommodity.classify"}],attrs:{name:"",id:"classify"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newCommodity,"classify",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])])]),a("label",{attrs:{for:"img"}},[t._v(" 商品圖片： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.img,expression:"newCommodity.img"}],attrs:{type:"text",id:"img"},domProps:{value:t.newCommodity.img},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"img",e.target.value)}}})]),a("label",{attrs:{for:"ori_price"}},[t._v(" 商品原價： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.ori_price,expression:"newCommodity.ori_price"}],attrs:{type:"number",id:"ori_price"},domProps:{value:t.newCommodity.ori_price},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"ori_price",e.target.value)}}})]),a("label",{attrs:{for:"sale_price"}},[t._v(" 優惠價格： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.sale_price,expression:"newCommodity.sale_price"}],attrs:{type:"number",id:"sale_price"},domProps:{value:t.newCommodity.sale_price},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"sale_price",e.target.value)}}})]),a("label",{attrs:{for:"info"}},[t._v(" 商品資訊： "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newCommodity.info,expression:"newCommodity.info"}],attrs:{name:"",id:"info",cols:"30",rows:"8"},domProps:{value:t.newCommodity.info},on:{input:function(e){e.target.composing||t.$set(t.newCommodity,"info",e.target.value)}}})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.addCommodity}},[t._v("新增")])])])}),p=[],_={data:function(){return{newCommodity:{title:"",img:"",ori_price:0,sale_price:0,info:"",classify:-1}}},methods:{cancel:function(){this.$emit("cancel")},addCommodity:function(){this.cancel(),this.$store.dispatch("a_addCommodity",this.newCommodity)}}},h=_,y=(a("0cde"),Object(c["a"])(h,f,p,!1,null,"074ebefb",null)),b=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("h2",[t._v("編輯商品")]),a("p",[t._v("商品編號："+t._s(t.commodity._id))]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("form",[a("label",{attrs:{for:"title"}},[t._v(" 商品名稱： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.title,expression:"editData.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.editData.title},on:{input:function(e){e.target.composing||t.$set(t.editData,"title",e.target.value)}}})]),a("label",{attrs:{for:"img"}},[t._v(" 年齡分類： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.editData.classify,expression:"editData.classify"}],attrs:{name:"",id:"classify"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editData,"classify",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"-1"}},[t._v("當季精選")]),a("option",{attrs:{value:"0"}},[t._v("0-6歲幼兒繪本")]),a("option",{attrs:{value:"1"}},[t._v("6-12歲兒童繪本")]),a("option",{attrs:{value:"2"}},[t._v("12歲up青少年")]),a("option",{attrs:{value:"3"}},[t._v("其他周邊")])])]),a("label",{attrs:{for:"img"}},[t._v(" 商品圖片： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.img,expression:"editData.img"}],attrs:{type:"text",id:"img"},domProps:{value:t.editData.img},on:{input:function(e){e.target.composing||t.$set(t.editData,"img",e.target.value)}}})]),a("label",{attrs:{for:"ori_price"}},[t._v(" 商品原價： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.ori_price,expression:"editData.ori_price"}],attrs:{type:"number",id:"ori_price"},domProps:{value:t.editData.ori_price},on:{input:function(e){e.target.composing||t.$set(t.editData,"ori_price",e.target.value)}}})]),a("label",{attrs:{for:"sale_price"}},[t._v(" 優惠價格： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.sale_price,expression:"editData.sale_price"}],attrs:{type:"number",id:"sale_price"},domProps:{value:t.editData.sale_price},on:{input:function(e){e.target.composing||t.$set(t.editData,"sale_price",e.target.value)}}})]),a("label",{attrs:{for:"info"}},[t._v(" 商品資訊： "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editData.info,expression:"editData.info"}],attrs:{name:"",id:"info",cols:"30",rows:"8"},domProps:{value:t.editData.info},on:{input:function(e){e.target.composing||t.$set(t.editData,"info",e.target.value)}}})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.update}},[t._v("更新")])])])},C=[],w={props:{commodity:Object},data:function(){return{editData:{title:this.commodity.title,img:this.commodity.img,ori_price:this.commodity.ori_price,sale_price:this.commodity.sale_price,info:this.commodity.info,classify:this.commodity.classify}}},methods:{cancel:function(){this.$emit("cancel")},update:function(){this.$store.dispatch("a_updateCommodity",{data:this.editData,commodity_id:this.commodity._id}),this.cancel()}}},D=w,$=(a("5297"),Object(c["a"])(D,g,C,!1,null,"171b8770",null)),x=$.exports,k={components:{newCommodity:b,editCommodity:x},data:function(){return{show:!1,Commodity:this.$store.state.commodity,editing:{},queryClassify:4,queryID:""}},computed:{filterList:function(){var t=this,e=[];return e=4==this.queryClassify?this.Commodity:this.Commodity.filter((function(e){return parseInt(e.classify)===parseInt(t.queryClassify)})),""==this.queryID?e:e.filter((function(e){return e._id===t.queryID||-1!==e.title.indexOf(t.queryID)}))}},methods:{edit:function(t){this.editing=t},classify:function(t){var e;switch(t=parseInt(t),t){case-1:e="當季精選繪本";break;case 0:e="0-6歲幼兒繪本";break;case 1:e="6-12歲兒童繪本";break;case 2:e="12歲up青少年";break;case 3:e="其他周邊"}return e}}},q=k,j=(a("5d5c"),Object(c["a"])(q,d,v,!1,null,"9fd8a762",null)),I=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("訂單管理")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.queryStatus,expression:"queryStatus"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.queryStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("顯示未處理")]),a("option",{attrs:{value:"1"}},[t._v("顯示配送中")]),a("option",{attrs:{value:"2"}},[t._v("顯示已完成")]),a("option",{attrs:{value:"3"}},[t._v("顯示全部")])]),a("div",{staticClass:"search_bar ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋訂單編號"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e._id},[a("th",{style:"color:"+t.statusColor(e.status)},[t._v(t._s(t.status(e.status)))]),a("th",[t._v(t._s(e._id))]),a("th",[t._v(t._s(e.name)),a("br"),a("span",{staticClass:"member_id"},[t._v(t._s("（"+e.userId+"）"))])]),a("th",{staticClass:"content"},[a("ul",t._l(e.buy,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(t.query_commodity(e.id).title)+" X "+t._s(e.number)+" ")])})),0)]),a("th",{attrs:{title:e.address}},[a("p",{staticClass:"text-over"},[t._v(t._s(e.address))])]),a("th",[t._v(t._s(e.tel))]),a("th",[t._v(t._s(e.total)+"元")]),a("th",[t._v(t._s(new Date(e.create_time).toLocaleString()))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("變更狀態")]),t._m(2,!0)])])})),0)])])]),t.editing._id?a("orderStatus",{attrs:{order:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("狀態")]),a("th",[t._v("訂單編號")]),a("th",[t._v("訂購人")]),a("th",[t._v("訂單內容")]),a("th",[t._v("配送地址")]),a("th",[t._v("聯絡電話")]),a("th",[t._v("總金額(含運費)")]),a("th",[t._v("建立時間")]),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status"},[a("h2",[t._v("變更狀態")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"info"},[a("p",[t._v("訂單編號："+t._s(t.order._id))]),a("p",[t._v("目前狀態："+t._s(t.status(t.order.status)))])]),a("form",[a("label",{attrs:{for:"status"}},[t._v(" 修改狀態： "),a("select",{attrs:{id:"status"},domProps:{value:t.order.status}},[a("option",{attrs:{value:"0"}},[t._v("尚未處理")]),a("option",{attrs:{value:"1"}},[t._v("配送中")]),a("option",{attrs:{value:"2"}},[t._v("已完成")])])]),a("a",{attrs:{href:"javascript:;"}},[t._v("變更狀態")])])])},P=[],N={props:{order:Object},methods:{cancel:function(){this.$emit("cancel")},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="尚未處理";break;case 1:e="配送中";break;case 2:e="已完成"}return e}}},M=N,L=(a("832c"),Object(c["a"])(M,S,P,!1,null,"e886f65e",null)),A=L.exports,T={components:{orderStatus:A},data:function(){return{show:!0,order:this.$store.state.order,user:this.$store.state.user,commodity:this.$store.state.commodity,queryID:"",queryStatus:"0",editing:{}}},computed:{filterList:function(){var t,e=this,a=[];return a=3==this.queryStatus?this.order:this.order.filter((function(t){return t.status==e.queryStatus})),t=this.queryID?a.filter((function(t){return-1!=t._id.indexOf(e.queryID)})):a,t}},methods:{status:function(t){var e;switch(t=parseInt(t),t){case 0:e="尚未處理";break;case 1:e="配送中";break;case 2:e="已完成"}return e},query_user:function(t){var e=this.user.filter((function(e){return e._id==t}));return e[0]},query_commodity:function(t){var e=this.commodity.filter((function(e){return e._id==t}));return e[0]},pay:function(t,e){for(var a=0,i=0;i<t.length;i++){var r=this.query_commodity(t[i].id).sale_price,s=t[i].number;a+=r*s}return a+parseInt(e)},statusColor:function(t){var e;switch(t=parseInt(t),t){case 0:e="red";break;case 1:e="orange";break;case 2:e="green"}return e},edit:function(t){this.editing=t}}},U=T,J=(a("8cb9"),Object(c["a"])(U,O,E,!1,null,"c3db8fae",null)),z=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity"},[a("div",{staticClass:"container-fluid "},[a("div",{staticClass:"title"},[a("h1",[t._v("會員列表")]),a("div",{staticClass:"search_bar ml-2"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryID,expression:"queryID",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜尋名字or編號"},domProps:{value:t.queryID},on:{input:function(e){e.target.composing||(t.queryID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"list"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e._id},[a("th",[t._v(t._s(e._id))]),a("th",[t._v(t._s(e.firstname+" "+e.lastname))]),a("th",[t._v(t._s(e.email))]),a("th",[t._v(t._s(t.gender(e.gender)))]),a("th",[t._v(t._s(e.tel))]),a("th",[t._v(t._s(e.address))]),a("th",[t._v(t._s(t.status(e.status)))]),a("th",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("變更狀態")]),t._m(2,!0)])])})),0)])])]),t.editing._id?a("memberStatus",{attrs:{member:t.editing},on:{cancel:function(e){t.editing={}}}}):t._e()],1)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("會員編號")]),a("th",[t._v("名稱")]),a("th",[t._v("登入信箱")]),a("th",[t._v("性別")]),a("th",[t._v("電話")]),a("th",[t._v("住址")]),a("th",[t._v("帳號狀態")]),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("刪除")])}],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status"},[a("h2",[t._v("變更狀態")]),a("div",{staticClass:"cancel"},[a("a",{attrs:{href:"javascirpt:;"},on:{click:t.cancel}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"info"},[a("p",[t._v("會員編號："+t._s(t.member._id))]),a("p",[t._v("會員名稱："+t._s(t.member.firstname+" "+t.member.lastname))]),a("p",[t._v("登入信箱："+t._s(t.member.email))]),a("p",[t._v("建立時間："+t._s(new Date(t.member.create_time).toLocaleString("zh-TW")))]),a("p",[t._v("目前狀態："+t._s(t.status(t.member.status)))])]),a("form",[a("label",{attrs:{for:"status"}},[t._v(" 修改狀態： "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.memberStatus,expression:"memberStatus"}],attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.memberStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("正常使用")]),a("option",{attrs:{value:"1"}},[t._v("禁止貨到付款")]),a("option",{attrs:{value:"2"}},[t._v("封鎖中")])])]),a("a",{attrs:{href:"javascript:;"},on:{click:t.update}},[t._v("變更狀態")])])])},F=[],G={props:{member:Object},data:function(){return{memberStatus:this.member.status}},methods:{update:function(){this.$store.dispatch("a_updateMember",{status:this.memberStatus,member_id:this.member._id})},cancel:function(){this.$emit("cancel")},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="正常使用";break;case 1:e="禁止貨到付款";break;case 2:e="封鎖中"}return e}}},H=G,K=(a("9701"),Object(c["a"])(H,B,F,!1,null,"793dd44c",null)),Q=K.exports,R={components:{memberStatus:Q},data:function(){return{members:this.$store.state.user,queryID:"",editing:{}}},computed:{filterList:function(){var t=this;return""==this.queryID?this.members:this.members.filter((function(e){return-1!=e.firstname.indexOf(t.queryID)||-1!=e.lastname.indexOf(t.queryID)||-1!=e._id.indexOf(t.queryID)}))}},methods:{gender:function(t){var e;switch(t=parseInt(t),t){case-1:e="保密";break;case 1:e="男";break;case 2:e="女"}return e},status:function(t){var e;switch(t=parseInt(t),t){case 0:e="正常使用";break;case 1:e="禁止貨到付款";break;case 2:e="帳號封鎖中"}return e},edit:function(t){this.editing=t}}},V=R,Y=(a("4d9c"),Object(c["a"])(V,W,X,!1,null,"1edeba69",null)),Z=Y.exports;i["a"].use(m["a"]);var tt=[{path:"/",redirect:"/commodity"},{path:"/commodity",name:"commodity",component:I},{path:"/order",name:"order",component:z},{path:"/member",name:"member",component:Z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],et=new m["a"]({routes:tt}),at=et,it=(a("159b"),a("2f62")),rt=a("bc3a"),st=a.n(rt);i["a"].use(it["a"]);var nt=new it["a"].Store({state:{commodity:[],order:[],user:[]},mutations:{getMember:function(t,e){e.forEach((function(e){t.user.unshift(e)}))},updateMember:function(t,e){t.user.forEach((function(t){t._id==e.member_id&&(t.status=e.status)}))},getCommodity:function(t,e){e.forEach((function(e){t.commodity.unshift(e)}))},addCommodity:function(t,e){t.commodity.unshift(e)},updateCommodity:function(t,e){t.commodity.forEach((function(a,r){a._id==e._id&&(i["a"].set(t.commodity,r,e),console.log("修改成功"))}))},getOrder:function(t,e){t.order=e}},actions:{a_getMember:function(t){st.a.get("/backstage/getMember").then((function(e){t.commit("getMember",e.data.member)}))},a_updateMember:function(t,e){st.a.post("/backstage/updateMember",e).then((function(){console.log("已完成更新"),t.commit("updateMember",e)}))},a_getCommodity:function(t){st.a.get("/backstage/getCommodity").then((function(e){t.commit("getCommodity",e.data.commodity)}))},a_addCommodity:function(t,e){st.a.post("/backstage/addCommodity",e).then((function(e){t.commit("addCommodity",e.data.commodity)}))},a_updateCommodity:function(t,e){st.a.post("/backstage/updateCommodity",e).then((function(e){t.commit("updateCommodity",e.data.data)}))},a_getOrder:function(t,e){st.a.get("/backstage/getOrder",e).then((function(e){t.commit("getOrder",e.data.order)}))}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:at,store:nt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),r=a.n(i);r.a},"5d5c":function(t,e,a){"use strict";var i=a("3010"),r=a.n(i);r.a},"6e48":function(t,e,a){},"832c":function(t,e,a){"use strict";var i=a("9044"),r=a.n(i);r.a},"8cb9":function(t,e,a){"use strict";var i=a("dc71"),r=a.n(i);r.a},9044:function(t,e,a){},9701:function(t,e,a){"use strict";var i=a("0410"),r=a.n(i);r.a},"9c0c":function(t,e,a){},a324:function(t,e,a){t.exports=a.p+"img/mylogo3.4ec5d41f.png"},a5d4:function(t,e,a){},dc71:function(t,e,a){},e49e:function(t,e,a){}});
//# sourceMappingURL=app.f94a0120.js.map