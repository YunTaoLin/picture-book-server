(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403ef92f"],{"7c27":function(e,t,a){"use strict";var r=a("9b5b"),i=a.n(r);i.a},"9b5b":function(e,t,a){},c58e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"col-5"},[a("div",{staticClass:"btn_group"},[a("a",{class:{active:0===e.status},attrs:{href:"javascript:;"},on:{click:function(t){return e.statusHandler(0)}}},[e._v("登入會員")]),a("a",{class:{active:1===e.status},attrs:{href:"javascript:;"},on:{click:function(t){return e.statusHandler(1)}}},[e._v("註冊帳號")])]),a("div",{staticClass:"main"},[0===e.status?a("div",{staticClass:"login_area"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 inner"},[a("form",[a("h2",[e._v("Welcome back！")]),a("label",{attrs:{for:"email"}},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.login.email,expression:"login.email",modifiers:{trim:!0}}],attrs:{type:"email",id:"email",placeholder:"請輸入電子信箱"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("label",{attrs:{for:"password"}},[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.login.password,expression:"login.password",modifiers:{trim:!0}}],attrs:{type:e.eye_login?"text":"password",id:"password",placeholder:"請輸入密碼"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("span",{staticClass:"eye",on:{click:function(t){e.eye_login=!e.eye_login}}},[e.eye_login?a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])]),a("button",{attrs:{disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.loginHandler(t)}}},[e._v(e._s(e.loading?"處理中...":"登入"))])])])])]):a("div",{staticClass:"registered_area"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 inner"},[a("form",[a("h2",[e._v("註冊成為會員")]),a("label",{attrs:{for:"email"}},[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.registered.email,expression:"registered.email",modifiers:{trim:!0}}],attrs:{type:"email",id:"email",placeholder:"設定登入信箱"},domProps:{value:e.registered.email},on:{input:function(t){t.target.composing||e.$set(e.registered,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("label",{attrs:{for:"lastname"}},[e._m(3),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.registered.lastname,expression:"registered.lastname",modifiers:{trim:!0}}],attrs:{type:"text",id:"lastname",placeholder:"姓氏"},domProps:{value:e.registered.lastname},on:{input:function(t){t.target.composing||e.$set(e.registered,"lastname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.registered.firstname,expression:"registered.firstname",modifiers:{trim:!0}}],attrs:{type:"text",id:"firstname",placeholder:"名字"},domProps:{value:e.registered.firstname},on:{input:function(t){t.target.composing||e.$set(e.registered,"firstname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("label",{attrs:{for:"password"}},[e._m(4),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.registered.password,expression:"registered.password",modifiers:{trim:!0}}],attrs:{type:e.eye_regsitered?"text":"password",id:"password",placeholder:"設定密碼"},domProps:{value:e.registered.password},on:{input:function(t){t.target.composing||e.$set(e.registered,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("span",{staticClass:"eye",on:{click:function(t){e.eye_regsitered=!e.eye_regsitered}}},[e.eye_regsitered?a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])]),a("button",{attrs:{disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.registeredHandler(t)}}},[e._v(e._s(e.loading?"處理中...":"Join us！"))])])])])])])])]),a("MyFooter")],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-user-circle-o",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}})])}],s=a("fd2d"),n=a("1157"),o=a.n(n),l={components:{MyFooter:s["a"]},data:function(){return{status:0,eye_login:!1,eye_regsitered:!1,login:{email:"",password:""},registered:{email:"",lastname:"",firstname:"",password:""},loading:!1}},methods:{statusHandler:function(e){this.status=e},loginHandler:function(){return this.login.email?this.login.password?(this.loading=!0,void o.a.ajax({url:"/ajax/login",type:"post",datatype:"json",data:this.login}).done((function(){this.loading=!1})).fail((function(){this.loading=!1}))):alert("請輸入密碼"):alert("請輸入email")},registeredHandler:function(){var e=this;return this.registered.email?this.registered.lastname?this.registered.firstname?this.registered.password.length<5?alert("密碼需要6位以上"):(this.loading=!0,void o.a.ajax({url:"/ajax/registered",type:"post",datatype:"json",data:this.registered}).done((function(t){console.log(t),e.loading=!1,alert("註冊成功!"+t.user.firstname+"歡迎加入方方繪本")})).fail((function(){e.loading=!1}))):alert("名字不可為空"):alert("姓氏不可為空"):alert("請輸入正確的email")}}},d=l,c=(a("7c27"),a("2877")),u=Object(c["a"])(d,r,i,!1,null,"011c4b48",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-403ef92f.990b69cb.js.map