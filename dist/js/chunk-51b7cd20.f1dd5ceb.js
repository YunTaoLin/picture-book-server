(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51b7cd20"],{7425:function(e,t,a){"use strict";var i=a("a6a4"),r=a.n(i);r.a},a6a4:function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact "},[a("div",{staticClass:"container wow fadeIn"},[e.sending?a("div",{staticClass:"sendSeccess"},[e._m(0),a("button",{on:{click:e.otherMail}},[e._v("發送其他信件")])]):a("div",{staticClass:"contact_inner"},[e._m(1),a("hr"),e._m(2),a("form",[a("div",{staticClass:"group"},[a("label",{attrs:{for:"name"}},[e._v(" 您的姓名： "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.mail.name,expression:"mail.name",modifiers:{trim:!0}}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.mail.name},on:{input:function(t){t.target.composing||e.$set(e.mail,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("label",{attrs:{for:"member"}},[e._v(" 是否為會員： "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.member,expression:"mail.member"}],attrs:{type:"checkbox",name:"member",id:"member"},domProps:{checked:Array.isArray(e.mail.member)?e._i(e.mail.member,null)>-1:e.mail.member},on:{change:function(t){var a=e.mail.member,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n=null,s=e._i(a,n);i.checked?s<0&&e.$set(e.mail,"member",a.concat([n])):s>-1&&e.$set(e.mail,"member",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.mail,"member",r)}}})])]),a("div",{staticClass:"group"},[a("label",{attrs:{for:"email"}},[e._v(" 您的信箱： "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.mail.email,expression:"mail.email",modifiers:{trim:!0}}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:e.mail.email},on:{input:function(t){t.target.composing||e.$set(e.mail,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("label",{attrs:{for:"tel"}},[e._v(" 您的電話： "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.mail.tel,expression:"mail.tel",modifiers:{trim:!0}}],attrs:{type:"tel",id:"tel",name:"tel"},domProps:{value:e.mail.tel},on:{input:function(t){t.target.composing||e.$set(e.mail,"tel",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),a("div",{staticClass:"group"},[a("label",{attrs:{for:"subject"}},[e._v(" 信件主旨： "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.mail.subject,expression:"mail.subject"}],attrs:{name:"subject",id:"subject"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.mail,"subject",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"請選擇",disabled:""}},[e._v("請選擇")]),a("option",{attrs:{value:"商品退換貨"}},[e._v("商品退換貨")]),a("option",{attrs:{value:"商品寄送疑問"}},[e._v("商品寄送疑問")]),a("option",{attrs:{value:"會員相關疑問"}},[e._v("會員相關疑問")]),a("option",{attrs:{value:"其他"}},[e._v("其他")])])])]),a("label",{attrs:{for:"content"}},[e._v(" 您的留言： "),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.mail.content,expression:"mail.content",modifiers:{trim:!0}}],attrs:{name:"content",id:"content",cols:"30",rows:"10"},domProps:{value:e.mail.content},on:{input:function(t){t.target.composing||e.$set(e.mail,"content",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"submit"},[a("a",{staticClass:"myBtn mt-4",attrs:{href:"javascript:;",id:"submit"},on:{click:e.submit}},[a("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),e._v(e._s(e.submitText))])])])])]),a("MyFooter")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),e._v("信件已送出")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),e._v("聯絡我們")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("親愛的會員及網友您好，若您有任何意見或疑問，我們誠摯地邀請您來信到我們專人服務的電子郵件信箱，"),a("br"),e._v("或撥打免付費售後服務專線： 0800-778-877 要求提供協助。我們將盡力為您解答！ "),a("br"),e._v(" 為了加速來信處理時間，請在主旨欄位選擇正確的分類選項。感謝您的配合！ ")])}],n=(a("b0c0"),a("fd2d")),s=a("1157"),l=a.n(s),m={components:{MyFooter:n["a"]},data:function(){return{submitText:"確認送出",mail:{name:"",member:!1,email:"",tel:"",subject:"請選擇",content:""},sending:!1}},methods:{submit:function(){var e=this,t="https://cors-anywhere.herokuapp.com/";return this.mail.name?this.mail.email?this.mail.tel?"請選擇"==this.mail.subject?alert("請選擇信件主旨"):this.mail.content?(this.submitText="信件寄送中...",void l.a.ajax({url:t+"https://script.google.com/macros/s/AKfycbzkGYpHWxr9vcWrq4dWBLJOOJhzjVV0VR8gPJifJhzv5uhgK4U/exec",type:"post",datatype:"json",data:this.mail}).done((function(){e.sending=!0,e.submitText="確認送出",e.clear()}))):alert("請輸入信件內容"):alert("請輸入電話"):alert("請輸入信箱"):alert("請輸入姓名")},clear:function(){this.mail={name:"",member:!1,email:"",tel:"",subject:"",content:""}},otherMail:function(){this.sending=!1}}},o=m,c=(a("7425"),a("2877")),u=Object(c["a"])(o,i,r,!1,null,"551e17e6",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-51b7cd20.f1dd5ceb.js.map