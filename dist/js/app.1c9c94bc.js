(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("64a9")},"0e8d":function(t,e,n){},"3e3f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s={name:"App"},i=s,c=(n("034f"),n("2877")),u=Object(c["a"])(i,o,r,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"left"},[n("Category")],1),n("div",{staticClass:"right"},[n("ChatContent")],1)])},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("ul",t._l(t.categoryList,(function(e,a){return n("li",{key:a,staticClass:"active",attrs:{id:a+1},on:{click:function(n){return t.sendMessage(e)}}},[t._v("\n       "+t._s(e.name)+"\n      ")])})),0)])},v=[],y=(n("7f7f"),new a["default"]),b={name:"category",data:function(){var t=this;return this.$http.get("./data/category.json").then((function(e){t.categoryList=e.data.category})),{categoryList:[]}},methods:{sendMessage:function(t){var e=t.name;y.$emit("val",e),console.log("index shi",t.ID)}}},g=b,m=(n("f38a"),Object(c["a"])(g,h,v,!1,null,null,null)),_=m.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("table",{attrs:{id:"table1"}},[t._m(0),n("tbody",t._l(t.contentList,(function(e,a){return n("tr",{key:a},[n("td",{staticClass:"desc"},[t._v(t._s(e.desc))]),n("td",{staticClass:"detail"},[t._v(t._s(e.detail))]),n("td",[n("button",{staticClass:"btn",attrs:{"data-clipboard-text":e.detail,id:"express"},on:{click:t.copy}},[t._v("\n            Copy\n          ")])])])})),0)])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"desc"},[t._v("Desc")]),n("th",{staticClass:"detail"},[t._v("Detail")]),n("th",{staticClass:"operation"},[t._v("Operation")])])])}],w={name:"chatcontent",data:function(){return{content:"pending for select category",contentList:[],copiedContent:[]}},mounted:function(){var t=this;y.$on("val",(function(e){t.content="";var n="";return"Withdraw"==e?n="./data/withdraw.json":"Trading"==e?n="./data/trading.json":"Account"==e?n="./data/account.json":"Common Phrase"==e?n="./data/common.json":"Deposit"==e?n="./data/deposit.json":"ByFi"==e?n="./data/byfi.json":"App"==e?n="./data/app.json":"Mail Template"==e?n="./data/mail.json":"Lark Inquiry"==e?n="./data/larkinquiry.json":"Other"==e&&(n="./data/other.json"),this.$http.get(n).then((function(e){t.contentList=e.data.content})),{contentList:[]}}))},methods:{copy:function(){var t=new this.clipboard("#express");console.log("clipboard is",t);var e=this;t.on("success",(function(){e.$message({message:"Copy Done!!",duration:1500,center:!0}),t.destroy()})),t.on("error",(function(){e.$message({message:"Copy Failed",duration:2e3,center:!0})}))}}},x=w,O=(n("e905"),Object(c["a"])(x,j,C,!1,null,"fffb85ec",null)),$=O.exports,k={name:"index",components:{Category:_,ChatContent:$}},L=k,M=(n("8fc1"),Object(c["a"])(L,f,p,!1,null,null,null)),P=M.exports;a["default"].use(d["a"]);var D=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"index",component:P}]}),E=n("bc3a"),S=n.n(E),T=n("4eb5"),A=n.n(T),q=n("b311"),F=n.n(q),I=n("5c96");a["default"].prototype.clipboard=F.a,a["default"].prototype.$message=I["Message"],a["default"].prototype.$http=S.a,a["default"].use(A.a),a["default"].config.productionTip=!1,new a["default"]({router:D,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"8fc1":function(t,e,n){"use strict";n("3e3f")},e905:function(t,e,n){"use strict";n("ebb4")},ebb4:function(t,e,n){},f38a:function(t,e,n){"use strict";n("0e8d")}});
//# sourceMappingURL=app.1c9c94bc.js.map