(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dda18b0"],{"528d":function(t,r,e){"use strict";var n=e("b39d"),i=e.n(n);i.a},"5ea5":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("div",{staticClass:"myBreadcrumb"},[e("router-link",{attrs:{to:"/"}},[t._v("首頁")]),e("span",{staticClass:"icon"},[t._v(">")]),e("span",[t._v(t._s(t.theTitle))])],1),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("h2",{staticClass:"title"},[t._v("會員相關")]),e("ul",{staticClass:"menu"},[e("li",[e("router-link",{attrs:{to:"/commodity/total"}},[t._v(">前往購物車")])],1),e("li",[e("router-link",{attrs:{to:"/favorite"}},[t._v(">我的收藏")])],1),e("li",[e("router-link",{attrs:{to:"/commodity/season"}},[t._v(">訂單查詢")])],1),e("li",[e("router-link",{attrs:{to:"/profile"}},[t._v(">會員資料")])],1)])]),e("div",{staticClass:"col-9 main"},[t._t("default")],2)])])},i=[],o={props:{theTitle:{type:String}}},a=o,s=(e("528d"),e("2877")),c=Object(s["a"])(a,n,i,!1,null,"5082ecd4",null);r["a"]=c.exports},"8dd5":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"favorite"},[e("Sidebar",{attrs:{theTitle:"我的收藏"}},[e("h1",[t._v("我的收藏")]),t.favoriteList.length>0?e("ul",t._l(t.favoriteList,(function(r){return e("li",{key:r._id},[e("div",{staticClass:"item"},[e("div",{staticClass:"pic mr-3"},[e("router-link",{attrs:{to:"/detail/"+r._id}},[e("img",{attrs:{src:r.img,alt:"商品圖片"}})])],1),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("router-link",{attrs:{to:"/detail/"+r._id}},[t._v(t._s(r.title))])],1),e("div",{staticClass:"price"},[e("div",{staticClass:"ori_pricee"},[t._v(" 原價：$ "),e("span",[t._v(t._s(r.ori_price))])]),e("div",{staticClass:"sale_price"},[t._v(" NT$ "),e("span",[t._v(t._s(r.sale_price))])])])]),e("div",{staticClass:"control_bar"},[e("a",{staticClass:"delete",attrs:{href:"javascript:;"},on:{click:function(e){return t.dislike(r._id)}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("a",{staticClass:"cart",attrs:{href:"javascript:;"},on:{click:function(e){return t.addCart(r._id)}}},[t._v("加入購物車")])])])])})),0):e("div",{staticClass:"nothing"},[e("h3",[t._v("空空如也，沒有任何收藏喔！")]),e("img",{attrs:{src:"https://i.loli.net/2019/07/29/5d3e11fb330b293931.png",alt:""}})]),t.toastContent_cart?e("div",{staticClass:"myToast cart"},[e("p",[t._v("已將商品加入購物車")])]):t._e()]),e("myFooter")],1)},i=[],o=(e("4de4"),e("d3b7"),e("159b"),e("96cf"),e("fd2d")),a=e("5ea5"),s={components:{myFooter:o["a"],Sidebar:a["a"]},data:function(){return{like:this.$store.state.user.like,commodity:this.$store.state.commodity,favoriteList:[],toastContent_cart:!1}},methods:{dislike:function(t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$store.commit("removeUserLike",t),this.$store.dispatch("a_dislike",{user:this.$store.state.user,commodity_id:t}),this.favoriteList=this.favoriteList.filter((function(r){return r._id!=t}));case 3:case"end":return r.stop()}}),null,this)},getList:function(){var t=this,r=[];this.like.forEach((function(e){t.commodity.forEach((function(t){t._id==e&&r.unshift(t)}))})),this.favoriteList=r},addCart:function(t){var r=this;this.$store.commit("addCart",{id:t,number:1,checked:!0}),localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),this.$store.state.user._id&&this.$store.dispatch("a_updateCart"),this.toastContent_cart=!1,this.toastContent_cart=!0,setTimeout((function(){r.toastContent_cart=!1}),1500)}},beforeMount:function(){this.getList()}},c=s,u=(e("acbd"),e("2877")),l=Object(u["a"])(c,n,i,!1,null,"03c14df9",null);r["default"]=l.exports},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,r,e,n){var i=r&&r.prototype instanceof p?r:p,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=k(t,e,a),o}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",h="suspendedYield",f="executing",d="completed",v={};function p(){}function y(){}function m(){}var g={};g[o]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==e&&n.call(w,o)&&(g=w);var L=m.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function C(t){function r(e,i,o,a){var s=u(t[e],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,o,a)}),(function(t){r("throw",t,o,a)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return r("throw",t,o,a)}))}a(s.arg)}var e;function i(t,n){function i(){return new Promise((function(e,i){r(t,n,e,i)}))}return e=e?e.then(i,i):i()}this._invoke=i}function k(t,r,e){var n=l;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return S()}e.method=i,e.arg=o;while(1){var a=e.delegate;if(a){var s=x(a,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=f;var c=u(t,r,e);if("normal"===c.type){if(n=e.done?d:h,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}function x(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}return y.prototype=L.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(r,e,n,i){var o=new C(c(r,e,n,i));return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(L),L[s]="Generator",L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=$,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;j(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:$(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},acbd:function(t,r,e){"use strict";var n=e("c95c"),i=e.n(n);i.a},b39d:function(t,r,e){},c95c:function(t,r,e){}}]);
//# sourceMappingURL=chunk-2dda18b0.aba08122.js.map