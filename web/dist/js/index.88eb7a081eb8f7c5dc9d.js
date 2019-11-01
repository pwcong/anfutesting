!function(e){function t(t){for(var n,i,l=t[0],c=t[1],r=t[2],s=0,o=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(I,i)&&I[i]&&o.push(I[i][0]),I[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(M&&M(t);o.length;)o.shift()();return D.push.apply(D,r||[]),a()}function a(){for(var e,t=0;t<D.length;t++){for(var a=D[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==I[l]&&(n=!1)}n&&(D.splice(t--,1),e=P(P.s=a[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!x[e]||!y[e])return;for(var a in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(v[a]=t[a]);0==--b&&0===h&&q()}(e,t),n&&n(e,t)};var i,l=!0,c="88eb7a081eb8f7c5dc9d",r=1e4,s={},o=[],m=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:k,apply:O,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return i=void 0,t}var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var E,v,g,b=0,h=0,N={},y={},x={};function w(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return l=e,p("check"),(t=r,t=t||1e4,new Promise(function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var n=new XMLHttpRequest,i=P.p+""+c+".hot-update.json";n.open("GET",i,!0),n.timeout=t,n.send(null)}catch(e){return a(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)a(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)a(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void a(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;y={},N={},x=e.c,g=e.h,p("prepare");var t=new Promise(function(e,t){E={resolve:e,reject:t}});for(var a in v={},I)j(a);return"prepare"===f&&0===h&&0===b&&q(),t});var t}function j(e){x[e]?(y[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+c+".hot-update.js",document.head.appendChild(t)}(e)):N[e]=!0}function q(){p("ready");var e=E;if(E=null,e)if(l)Promise.resolve().then(function(){return O(l)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var a in v)Object.prototype.hasOwnProperty.call(v,a)&&t.push(w(a));e.resolve(t)}}function O(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var a,n,i,l,r;function m(e){for(var t=[e],a={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var i=n.pop(),c=i.id,r=i.chain;if((l=_[c])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:r,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:r,moduleId:c};for(var s=0;s<l.parents.length;s++){var o=l.parents[s],m=_[o];if(m){if(m.hot._declinedDependencies[c])return{type:"declined",chain:r.concat([o]),moduleId:c,parentId:o};-1===t.indexOf(o)&&(m.hot._acceptedDependencies[c]?(a[o]||(a[o]=[]),d(a[o],[c])):(delete a[o],t.push(o),n.push({chain:r.concat([o]),id:o})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var u={},E=[],b={},h=function(){console.warn("[HMR] unexpected require("+y.moduleId+") to disposed module")};for(var N in v)if(Object.prototype.hasOwnProperty.call(v,N)){var y;r=w(N);var k=!1,j=!1,q=!1,O="";switch((y=v[N]?m(r):{type:"disposed",moduleId:N}).chain&&(O="\nUpdate propagation: "+y.chain.join(" -> ")),y.type){case"self-declined":t.onDeclined&&t.onDeclined(y),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+y.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(y),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+y.moduleId+" in "+y.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(y),t.ignoreUnaccepted||(k=new Error("Aborted because "+r+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(y),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(y),q=!0;break;default:throw new Error("Unexception type "+y.type)}if(k)return p("abort"),Promise.reject(k);if(j)for(r in b[r]=v[r],d(E,y.outdatedModules),y.outdatedDependencies)Object.prototype.hasOwnProperty.call(y.outdatedDependencies,r)&&(u[r]||(u[r]=[]),d(u[r],y.outdatedDependencies[r]));q&&(d(E,[y.moduleId]),b[r]=h)}var D,T=[];for(n=0;n<E.length;n++)r=E[n],_[r]&&_[r].hot._selfAccepted&&b[r]!==h&&T.push({module:r,errorHandler:_[r].hot._selfAccepted});p("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete I[e]}(e)});for(var S,H,M=E.slice();M.length>0;)if(r=M.pop(),l=_[r]){var z={},C=l.hot._disposeHandlers;for(i=0;i<C.length;i++)(a=C[i])(z);for(s[r]=z,l.hot.active=!1,delete _[r],delete u[r],i=0;i<l.children.length;i++){var A=_[l.children[i]];A&&((D=A.parents.indexOf(r))>=0&&A.parents.splice(D,1))}}for(r in u)if(Object.prototype.hasOwnProperty.call(u,r)&&(l=_[r]))for(H=u[r],i=0;i<H.length;i++)S=H[i],(D=l.children.indexOf(S))>=0&&l.children.splice(D,1);for(r in p("apply"),c=g,b)Object.prototype.hasOwnProperty.call(b,r)&&(e[r]=b[r]);var L=null;for(r in u)if(Object.prototype.hasOwnProperty.call(u,r)&&(l=_[r])){H=u[r];var U=[];for(n=0;n<H.length;n++)if(S=H[n],a=l.hot._acceptedDependencies[S]){if(-1!==U.indexOf(a))continue;U.push(a)}for(n=0;n<U.length;n++){a=U[n];try{a(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:r,dependencyId:H[n],error:e}),t.ignoreErrored||L||(L=e)}}}for(n=0;n<T.length;n++){var R=T[n];r=R.module,o=[r];try{P(r)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(a){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:r,error:a,originalError:e}),t.ignoreErrored||L||(L=a),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:r,error:e}),t.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(E)}))}var _={},I={0:0},D=[];function P(t){if(_[t])return _[t].exports;var a=_[t]={i:t,l:!1,exports:{},hot:d(t),parents:(m=o,o=[],m),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=_[e];if(!t)return P;var a=function(a){return t.hot.active?(_[a]?-1===_[a].parents.indexOf(e)&&_[a].parents.push(e):(o=[e],i=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),o=[]),P(a)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var l in P)Object.prototype.hasOwnProperty.call(P,l)&&"e"!==l&&"t"!==l&&Object.defineProperty(a,l,n(l));return a.e=function(e){return"ready"===f&&p("prepare"),h++,P.e(e).then(t,function(e){throw t(),e});function t(){h--,"prepare"===f&&(N[e]||j(e),0===h&&0===b&&q())}},a.t=function(e,t){return 1&t&&(e=a(e)),P.t(e,-2&t)},a}(t)),a.l=!0,a.exports}P.m=e,P.c=_,P.d=function(e,t,a){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(P.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)P.d(a,n,function(t){return e[t]}.bind(null,n));return a},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return c};var T=window.webpackJsonp=window.webpackJsonp||[],S=T.push.bind(T);T.push=t,T=T.slice();for(var H=0;H<T.length;H++)t(T[H]);var M=S;D.push([92,1]),a()}([,,,,,,,function(e,t,a){e.exports=a.p+"imgs/banner1.jpg?75642b562fb75e6d121f62868cf665d7"},,,,,function(e,t,a){e.exports=a.p+"imgs/demo.png?20e455433e6962f7514c90b0190c3bc9"},,,,,,function(e,t,a){e.exports=a.p+"imgs/logo.jpg?7207240b3f16994aaf17a3e7884aacdc"},,,function(e,t,a){e.exports=a.p+"imgs/qq_icon.png?86098add89ec55d1927884aa406ec44b"},function(e,t,a){e.exports=a.p+"imgs/qq_btn.png?bd80046856b3b043a4b58ec4bfa63ce5"},function(e,t,a){e.exports=a.p+"imgs/tel_icon.png?744a2baf20f94e8b5b04f9a2e2c4332a"},function(e,t,a){e.exports=a.p+"imgs/mail_icon.png?10175a23df682c572063c46ea0e06555"},function(e,t,a){e.exports=a.p+"imgs/hide_btn.png?0e2dd1aa7b3404402fc615d1adc394db"},function(e,t,a){e.exports=a.p+"imgs/banner2.jpg?77c7781bdda18591a1fb41ee64e8d00f"},function(e,t,a){e.exports=a.p+"imgs/banner3.jpg?823649886637cc4a9092411c480e6c30"},function(e,t,a){e.exports=a.p+"imgs/service1.png?b28f809a65aa3f854bfaeb83b173648a"},function(e,t,a){e.exports=a.p+"imgs/service2.png?07e391a70c6fb907c3eda0181893126d"},function(e,t,a){e.exports=a.p+"imgs/service3.png?9e8413358c604459927a5b827b3da8f8"},function(e,t,a){e.exports=a.p+"imgs/bg-reason-head.png?0c256a8d7fca36816cc29ef1293825af"},function(e,t,a){e.exports=a.p+"imgs/reason1.jpg?48cb36c4461bca2fa7c500c6f2f3cdee"},function(e,t,a){e.exports=a.p+"imgs/reason2.jpg?dbf40d8e1147a28d16debc5c94ccd36e"},function(e,t,a){e.exports=a.p+"imgs/reason3.jpg?496f1804908acfe402df5bb289dd07b8"},function(e,t,a){e.exports=a.p+"imgs/reason4.jpg?8eade162bfedeeb52427227b3349eb0d"},function(e,t,a){e.exports=a.p+"imgs/company.png?485875777e8a731d7043efec1ba6719e"},function(e,t,a){e.exports=a.p+"imgs/jieshao1.png?67feac9b732120d5dfbdf730c63cf9d0"},function(e,t,a){e.exports=a.p+"imgs/jieshao2.png?eeb32e10ff9c1671500d4fd2bdc0ace5"},function(e,t,a){e.exports=a.p+"imgs/jieshao3.png?357f705eb62f735223afcd43546075fd"},function(e,t,a){e.exports=a.p+"imgs/jieshao4.png?bb8d32e0e3baaae68c692acf6a5e0dcc"},function(e,t,a){e.exports=a.p+"imgs/fengcai1.png?b3eccc0e1cfee577c868a916fb89420c"},function(e,t,a){e.exports=a.p+"imgs/fengcai2.png?67a64b07ecdc9e6bfaf3fa90282b0f9b"},function(e,t,a){e.exports=a.p+"imgs/fengcai3.jpg?613549e22d06b5db6dc0d9fdc37b6f4e"},function(e,t,a){e.exports=a.p+"imgs/fanglei.jpg?b7b9041fbd8909d9e29795dc99cd5f4d"},function(e,t,a){e.exports=a.p+"imgs/xs1.jpg?32e509111375d3c3a2ff7776ba216d4f"},function(e,t,a){e.exports=a.p+"imgs/xs2.jpg?f3cf01c4ab0a0f62d12159575f1884e9"},function(e,t,a){e.exports=a.p+"imgs/xs3.jpg?11696cf26fc5e8c526523176c9c41ae0"},function(e,t,a){e.exports=a.p+"imgs/xs4.jpg?1b4a4564b2cf4e7c560e805398f36ec8"},function(e,t,a){e.exports=a.p+"imgs/xs5.jpg?af8781309ddb73595b6666187129ee22"},function(e,t,a){e.exports=a.p+"imgs/xs6.jpg?67ca1db94dc4a413a5c64ae4d9f7062f"},function(e,t,a){e.exports=a.p+"imgs/xs7.jpg?746623a0c845f7fe1b3ff6ae92aadd0f"},function(e,t,a){e.exports=a.p+"imgs/xs8.jpg?a0edbff4f67cb93146104a389b1cd060"},function(e,t,a){e.exports=a.p+"imgs/xs9.jpg?e59c3715b52d713994899810a19e3096"},function(e,t,a){e.exports=a.p+"imgs/xs10.jpg?ef51b6d5ce1c1154d0aef7ff96094c58"},function(e,t,a){e.exports=a.p+"imgs/xs11.jpg?7f5492a59e3b988b048ecca47fcbcb3d"},function(e,t,a){e.exports=a.p+"imgs/xs12.jpg?4bc560662b61ad67d3dde3062c1cd03d"},function(e,t,a){e.exports=a.p+"imgs/xs13.jpg?d02c305ab6cd23f4a58fc228d86337d8"},function(e,t,a){e.exports=a.p+"imgs/dq1.jpg?f3cf01c4ab0a0f62d12159575f1884e9"},function(e,t,a){e.exports=a.p+"imgs/dq2.jpg?11696cf26fc5e8c526523176c9c41ae0"},function(e,t,a){e.exports=a.p+"imgs/dq3.jpg?1b4a4564b2cf4e7c560e805398f36ec8"},function(e,t,a){e.exports=a.p+"imgs/dq4.jpg?af8781309ddb73595b6666187129ee22"},function(e,t,a){e.exports=a.p+"imgs/dq5.jpg?67ca1db94dc4a413a5c64ae4d9f7062f"},function(e,t,a){e.exports=a.p+"imgs/dq6.jpg?746623a0c845f7fe1b3ff6ae92aadd0f"},function(e,t,a){e.exports=a.p+"imgs/dq7.jpg?a0edbff4f67cb93146104a389b1cd060"},function(e,t,a){e.exports=a.p+"imgs/dq8.jpg?e59c3715b52d713994899810a19e3096"},function(e,t,a){e.exports=a.p+"imgs/dq9.jpg?ef51b6d5ce1c1154d0aef7ff96094c58"},,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(14),c=a.n(l),r=a(2),s=a(8),o=a(3),m=a.n(o),d=a(18),u=a.n(d),f=function(){return window.innerWidth<=900},p=(a(72),function(){var e,t,a=Object(n.useState)(f()),l=a[0],c=a[1],s=Object(n.useState)(!1),o=s[0],d=s[1],p=function(){c(f())};Object(n.useEffect)(function(){return window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}});var E=[{title:"首页",to:"/",exact:!0},{title:"公司介绍",to:"/jieshao",children:[{title:"企业简介",to:"/qiye",exact:!0},{title:"我们的风采",to:"/fengcai",exact:!0}]},{title:"荣誉资质",to:"/zizhi"},{title:"服务项目",to:"/fuwu",children:[{title:"电气设备检测",to:"/dianqi",exact:!0},{title:"消防设备检测",to:"/xiaofang",exact:!0},{title:"防雷检测",to:"/fanglei",exact:!0}]},{title:"成功案例",to:"/anli"},{title:"检测设备",to:"/shebei",children:[{title:"消防检测设备",to:"/xiaofang",exact:!0},{title:"电气检测设备",to:"/dianqi",exact:!0}]},{title:"联系我们",to:"/lianxi"}];return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:u.a})),l?i.a.createElement("div",{className:m()("navs-mobile",(e={},e["navs-mobile-active"]=o,e))},E.map(function(e,t){return i.a.createElement("div",{key:t,className:"nav-mobile"},i.a.createElement(r.NavLink,{key:e.to,exact:e.exact,to:e.to,title:e.title,className:"nav-mobile-link",onClick:function(){d(!1)}},e.title),e.children&&i.a.createElement("div",{className:"sub-navs-mobile"},e.children.map(function(t,a){return i.a.createElement(r.NavLink,{className:"sub-nav-mobile-link",key:a,title:t.title,exact:t.exact,to:""+e.to+t.to,onClick:function(){d(!1)}},t.title)})))})):i.a.createElement("div",{className:"navs"},E.map(function(e,t){return i.a.createElement("div",{className:"nav",key:t},i.a.createElement(r.NavLink,{key:e.to,exact:e.exact,to:e.to,title:e.title,className:"nav-link"},e.title),e.children&&i.a.createElement("div",{className:"sub-navs"},e.children.map(function(t,a){return i.a.createElement(r.NavLink,{className:"sub-nav-link",key:a,title:t.title,exact:t.exact,to:""+e.to+t.to},t.title)})))})),l&&i.a.createElement("div",{className:m()("navs-mobile-expand",(t={},t["navs-mobile-expand-active"]=o,t)),onClick:function(){d(!o)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))}),E=(a(81),Object(s.k)(function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"footer-top"},i.a.createElement("div",{className:"footer-top-wrapper"},i.a.createElement("div",{className:"footer-top-left"}),i.a.createElement("div",{className:"footer-top-right"},[[{to:"/jieshao",title:"公司介绍",isTitle:!0},{to:"/jieshao/qiye",title:"企业简介"},{to:"/jieshao/fengcai",title:"我们的风采"}],[{to:"/zizhi",title:"荣誉资质",isTitle:!0}],[{to:"/fuwu",title:"服务项目",isTitle:!0},{to:"/fuwu/dianqi",title:"电器设备检测"},{to:"/fuwu/xiaofang",title:"消防设备检测"},{to:"/fuwu/fanglei",title:"防雷检测"}],[{to:"/anli",title:"成功案例",isTitle:!0}],[{to:"/shebei",title:"检测设备",isTitle:!0},{to:"/shebei/xiaofang",title:"消防检测设备"},{to:"/shebei/dianqi",title:"电器检测设备"}],[{to:"/lianxi",title:"联系我们",isTitle:!0}]].map(function(e,t){return i.a.createElement("div",{className:"footer-top-col",key:"col-"+t},e.map(function(e,t){var a;return i.a.createElement(r.NavLink,{className:m()("footer-top-item",(a={},a["footer-top-item-title"]=e.isTitle,a)),key:"item-"+t,to:e.to,onClick:function(){window.scrollTo(0,0)}},e.title)}))})))),i.a.createElement("div",{className:"footer-bottom"},i.a.createElement("div",{className:"footer-bottom-wrapper"},i.a.createElement("div",{className:"footer-bottom-left"},"@2017-",(new Date).getFullYear()," 惠州市安富电气消防安全检测有限公司"),i.a.createElement("div",{className:"footer-bottom-right"},"粤ICP备19135791号-1"))))})),v=a(21),g=a.n(v),b=a(22),h=a.n(b),N=a(23),y=a.n(N),x=a(24),w=a.n(x),k=a(25),j=a.n(k),q=(a(82),null),O=function(e){var t,a,l,c=Object(n.useState)(""),r=c[0],s=c[1],o=function(e){s(e),clearTimeout(q),q=setTimeout(function(){s("")},5e3)},d="toolbar-item";return i.a.createElement("div",{className:"toolbar"},i.a.createElement("div",{className:"toolbar-list"},i.a.createElement("div",{className:m()(d+" "+d+"-qq",(t={},t[d+"-active"]="qq"===r,t)),onClick:function(){return o("qq")}},i.a.createElement("div",{className:d+"-icon",style:{backgroundImage:"url("+g.a+")"}}),i.a.createElement("div",{className:d+"-content"},i.a.createElement("div",{className:d+"-link"},i.a.createElement("a",{href:"https://wpa.qq.com/msgrd?v=3&uin=598138008&site=qq&menu=yes",target:"_blank"},i.a.createElement("span",null,"黎先生："),i.a.createElement("img",{src:h.a}))))),i.a.createElement("div",{className:m()(d+" "+d+"-tel",(a={},a[d+"-active"]="tel"===r,a)),onClick:function(){return o("tel")}},i.a.createElement("div",{className:d+"-icon",style:{backgroundImage:"url("+y.a+")"}}),i.a.createElement("div",{className:d+"-content"},i.a.createElement("div",{className:d+"-title"},"电话直呼"),i.a.createElement("div",{className:d+"-link "+d+"-link-r"},i.a.createElement("a",{target:"_blank",href:"tel:13828838681"},"黎先生：13828838681")))),i.a.createElement("div",{className:m()(d+" "+d+"-mail",(l={},l[d+"-active"]="mail"===r,l)),onClick:function(){return o("mail")}},i.a.createElement("div",{className:d+"-icon",style:{backgroundImage:"url("+w.a+")"}}),i.a.createElement("div",{className:d+"-content"},i.a.createElement("div",{className:d+"-link "+d+"-link-r"},i.a.createElement("a",{target:"_blank",href:"mailto:598138008@qq.com"},"发送邮件"))))),i.a.createElement("div",{className:"toolbar-hide"},i.a.createElement("div",{className:"toolbar-hide-btn",style:{backgroundImage:"url("+j.a+")"}})))},_=a(9),I=a(67),D=(a(83),a(7)),P=a.n(D),T=a(26),S=a.n(T),H=a(27),M=a.n(H),z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(_.a)(t,e),t.prototype.componentDidMount=function(){new I.a(this.swiper,{navigation:{nextEl:this.nextEl,prevEl:this.prevEl},pagination:{el:".swiper-pagination"}})},t.prototype.render=function(){var e=this,t=[P.a,S.a,M.a];return i.a.createElement("div",{className:"swiper-container banners",ref:function(t){return e.swiper=t}},i.a.createElement("div",{className:"swiper-wrapper"},t.map(function(e,t){return i.a.createElement("div",{className:"swiper-slide",key:t},i.a.createElement("div",{className:"banner",style:{backgroundImage:"url("+e+")"}}))})),i.a.createElement("div",{className:"swiper-button-next",ref:function(t){return e.nextEl=t}}),i.a.createElement("div",{className:"swiper-button-prev",ref:function(t){return e.prevEl=t}}),i.a.createElement("div",{className:"swiper-pagination",ref:function(t){return e.pageEl=t}}))},t}(i.a.PureComponent),C=a(28),A=a.n(C),L=a(29),U=a.n(L),R=a(30),F=a.n(R),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(_.a)(t,e),t.prototype.render=function(){var e=this,t=[{title:"电气安全检测",img:A.a,to:"/fuwu/dianqi"},{title:"消防设施安全检测",img:U.a,to:"/fuwu/xiaofang"},{title:"防雷设施安全检测",img:F.a,to:"/fuwu/fanglei"}];return i.a.createElement("div",{className:"services"},i.a.createElement("div",{className:"services-wrapper"},i.a.createElement("div",{className:"services-head"},i.a.createElement("div",{className:"services-title"},"服务项目"),i.a.createElement("div",{className:"services-title-sub"},"提供专业的服务项目")),i.a.createElement("div",{className:"services-list"},t.map(function(t,a){return i.a.createElement("div",{className:"services-item",key:a,onClick:function(){window.scrollTo(0,0),e.props.history.push(t.to)}},i.a.createElement("div",{className:"services-item-img",style:{backgroundImage:"url("+t.img+")"}}),i.a.createElement("div",{className:"services-item-title"},t.title))}))))},t}(i.a.PureComponent),W=Object(s.k)(K),J=a(12),G=a.n(J),B=function(e){function t(t){var a=e.call(this,t)||this;return a.handleResize=function(){a.setState({isMobile:f()})},a.state={demoKey:"dianqi",isMobile:!1},a}return Object(_.a)(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.render=function(){var e=this,t=this.state.isMobile,a=[{key:"dianqi",title:"电气检测",subTitle:"Fire engineering",main:{title:"",content:"",img:G.a}},{key:"xiaofang",title:"消防检测",subTitle:"Maintenance",main:{title:"",content:"",img:G.a}},{key:"fanglei",title:"防雷检测",subTitle:"Security Project",main:{title:"",content:"",img:G.a}}];return i.a.createElement("div",{className:"demos"},i.a.createElement("div",{className:"demos-wrapper"},i.a.createElement("div",{className:"demos-head"},i.a.createElement("div",{className:"demos-title"},"成功案例"),i.a.createElement("div",{className:"demos-title-sub"},"为您量身打造安防与消防集成综合解决方案")),t&&i.a.createElement("div",{className:"demos-navs-mobile"},a.map(function(t){var a;return i.a.createElement("div",{onClick:function(){e.setState({demoKey:t.key})},key:t.key,className:m()("demos-nav-mobile",(a={},a["demos-nav-mobile-active"]=t.key===e.state.demoKey,a))},i.a.createElement("div",{className:"demos-nav-title"},t.title),i.a.createElement("div",{className:"demos-nav-title-sub"},t.subTitle))})),i.a.createElement("div",{className:"demos-content"},!t&&i.a.createElement("div",{className:"demos-navs"},a.map(function(t){var a;return i.a.createElement("div",{onMouseEnter:function(){e.setState({demoKey:t.key})},key:t.key,className:m()("demos-nav",(a={},a["demos-nav-active"]=t.key===e.state.demoKey,a))},i.a.createElement("div",{className:"demos-nav-title"},t.title),i.a.createElement("div",{className:"demos-nav-title-sub"},t.subTitle))})),i.a.createElement("div",{className:"demos-list"},a.map(function(t){return i.a.createElement("div",{key:t.key,className:"demos-item",style:{display:t.key===e.state.demoKey?"block":"none"}},i.a.createElement("div",{className:"demos-item-img",style:{backgroundImage:"url("+t.main.img+")"}}),i.a.createElement("div",{className:"demos-item-main"},i.a.createElement("div",{className:"demos-item-title"},t.main.title),i.a.createElement("div",{className:"demos-item-content"},t.main.content)))})))))},t}(i.a.PureComponent),Q=a(31),X=a.n(Q),Y=a(32),V=a.n(Y),Z=a(33),$=a.n(Z),ee=a(34),te=a.n(ee),ae=a(35),ne=a.n(ae),ie=function(e){var t="reasons-item";return i.a.createElement("div",{className:"reasons"},i.a.createElement("div",{className:"reasons-wrapper"},i.a.createElement("div",{className:"reasons-head"},i.a.createElement("div",{className:"reasons-head-wrapper",style:{backgroundImage:"url("+X.a+")"}},i.a.createElement("div",{className:"reasons-title"},"选安富检测的四大理由"),i.a.createElement("div",{className:"reasons-title-sub"},"CHOOSE FOUR GROUNDS OF ANFU"))),i.a.createElement("div",{className:"reasons-list"},i.a.createElement("div",{className:"reasons-col"},i.a.createElement("div",{className:t},i.a.createElement("div",{className:t+"-head"},i.a.createElement("div",{className:t+"-title"},"我们专注的精神、完美的掌握"),i.a.createElement("div",{className:t+"-title-sub"},"Our concentration spirit, perfect mastery"),i.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),i.a.createElement("div",{className:t+"-content"},i.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+V.a+")"}}))),i.a.createElement("div",{className:t},i.a.createElement("div",{className:t+"-head"},i.a.createElement("div",{className:t+"-title"},"政府推荐单位 获得客户高度认可"),i.a.createElement("div",{className:t+"-title-sub"},"Government recommended units receive highly recognized customers"),i.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),i.a.createElement("div",{className:t+"-content"},i.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+te.a+")"}})))),i.a.createElement("div",{className:"reasons-col"},i.a.createElement("div",{className:t},i.a.createElement("div",{className:t+"-head"},i.a.createElement("div",{className:t+"-title"},"我们科学严谨、技术领先"),i.a.createElement("div",{className:t+"-title-sub"},"We are rigorous in science and advanced in technology"),i.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),i.a.createElement("div",{className:t+"-content"},i.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+$.a+")"}}))),i.a.createElement("div",{className:t},i.a.createElement("div",{className:t+"-head"},i.a.createElement("div",{className:t+"-title"},"团队技术力量雄厚，售后服务有保障"),i.a.createElement("div",{className:t+"-title-sub"},"The team is strong in technology, service guaranteed"),i.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),i.a.createElement("div",{className:t+"-content"},i.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+ne.a+")"}})))))))},le=a(36),ce=a.n(le),re=Object(s.k)(function(e){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("div",{className:"about-head"},i.a.createElement("div",{className:"about-title"},"关于我们"),i.a.createElement("div",{className:"about-title-sub"},"惠州市安富电气消防安全检测有限公司")),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-left",style:{backgroundImage:"url("+ce.a+")"}}),i.a.createElement("div",{className:"about-right"},i.a.createElement("div",{className:"about-right-title"},"惠州市安富电气消防安全检测有限公司"),i.a.createElement("div",{className:"about-right-content"},i.a.createElement("div",null,"惠州市安富电气消防安全检测有限公司（简称“AFJT”）是惠州市消防专业领域独立的、权威的第三方检验检服务机构，致力于为客户提供全方位的建筑装饰材料的阻燃性能测试、建筑电气消防安全检测、建筑物的防雷接地装置检测、安全评估、安全标准预案工程服务。"),i.a.createElement("div",{className:"about-right-btn",onClick:function(){window.scrollTo(0,0),e.history.push("/jieshao")}},"查看详情 >"))))))}),se=(a(84),function(e){return i.a.createElement("section",{className:"shouye"},i.a.createElement(z,null),i.a.createElement(W,null),i.a.createElement(B,null),i.a.createElement(ie,null),i.a.createElement(re,null))}),oe=(a(85),function(e){return i.a.createElement("div",{className:"tabs"},e.data.map(function(t){var a;return i.a.createElement("div",{key:t.key,className:m()("tab",(a={},a["tab-active"]=t.active,a)),onClick:function(){e.onSelect&&e.onSelect(t.key)}},t.title)}))}),me=a(37),de=a.n(me),ue=a(38),fe=a.n(ue),pe=a(39),Ee=a.n(pe),ve=a(40),ge=a.n(ve),be=function(){return i.a.createElement("div",{className:"qiye"},i.a.createElement("div",{className:"qiye-title"},"惠州市安富电气消防安全检测有限公司"),i.a.createElement("div",{className:"qiye-content"},i.a.createElement("p",null,"惠州市安富电气消防安全检测有限公司（简称“AFJT”）是惠州市消防专业领域独立的、权威的第三方检验检服务机构，致力于为客户提供全方位的建筑装饰材料的阻燃性能测试、建筑电气消防安全检测、建筑物的防雷接地装置检测、安全评估、安全标准预案工程服务。"),i.a.createElement("p",null,"安富检测的主要检测业务受广东省消防总队及各级地方消防部门的监督指导。接受建设和使用单位委托，对新、扩、改建建筑工程、内部装修工程、用途变更的工程中的电气设施以及对装饰材料防火阻燃性能进行竣工前的消防安全技术专项检测，包括接受对己投入使用的电气设施进行消防安全技术检测的委托。其由电气设施检测包括电气消防安全检测与防雷装置接地检测。"),i.a.createElement("p",null,"电气消防安全检测在西方经济发达国家已有几十年的历史，其技术法规己相当完善，在我国电气消防安全检测行业才刚刚起步。我们参考了发达国家的相关经验，引进了国际先进的检测仪器和设备，通过对电气设施进管全方位的量化鉴测，全面、准确地反映电气火灾隐患的准确位置，把传统的检查工作提升到一个新的科学高度，做到了查明电气火灾隐患的科学化、图谱化、数据化。"),i.a.createElement("p",null,"安富检测电气消防安全检测的主要检测仪器包括：红外成像仪（FLUKE进口品牌非接触式温度测试成像仪，属行业高端）、绝缘测试仪、超声波测试仪(一般电检测机构没配备）、电能质量分析仪（一般电气检测机构没配备）、漏电开关测试仪、接地装置电阻测试仪、测试插座相位仪、线路漏电量测试仪等。")),i.a.createElement("div",{className:"qiye-imgs"},i.a.createElement("img",{className:"qiye-img",src:de.a}),i.a.createElement("img",{className:"qiye-img",src:fe.a}),i.a.createElement("img",{className:"qiye-img",src:Ee.a}),i.a.createElement("img",{className:"qiye-img",src:ge.a})))},he=a(41),Ne=a.n(he),ye=a(42),xe=a.n(ye),we=a(43),ke=a.n(we),je=function(){return i.a.createElement("div",{className:"fengcai"},i.a.createElement("div",{className:"fengcai-imgs"},i.a.createElement("img",{className:"fengcai-img",src:Ne.a}),i.a.createElement("img",{className:"fengcai-img",src:xe.a}),i.a.createElement("img",{className:"fengcai-img",src:ke.a})))},qe=(a(86),Object(s.k)(function(e){return i.a.createElement("div",{className:"jieshao"},i.a.createElement("div",{className:"jieshao-wrapper"},i.a.createElement("div",{className:"jieshao-banner",style:{backgroundImage:"url("+P.a+")"}}),i.a.createElement("div",{className:"jieshao-tabs"},i.a.createElement(oe,{data:[{key:"/jieshao/qiye",title:"企业简介"},{key:"/jieshao/fengcai",title:"我们的风采"}].map(function(t){return Object.assign({},t,{active:e.history.location.pathname===t.key})}),onSelect:function(t){window.scrollTo(0,0),e.history.push(t)}})),i.a.createElement("div",{className:"jieshao-content"},i.a.createElement(s.g,null,i.a.createElement(s.c,{exact:!0,path:"/jieshao",to:"/jieshao/qiye"}),i.a.createElement(s.d,{path:"/jieshao/qiye",component:be}),i.a.createElement(s.d,{path:"/jieshao/fengcai",component:je})))))})),Oe=function(){return i.a.createElement("div",{style:{height:"100vh"}})},_e=function(){return i.a.createElement("div",{className:"dianqi"},i.a.createElement("div",{className:"dianqi-title"},"电气防火检测"),i.a.createElement("div",{className:"dianqi-content"},i.a.createElement("p",{style:{fontWeight:"bold"}},"检测内容："),i.a.createElement("ul",null,i.a.createElement("li",null,"1.电气变配电装置；"),i.a.createElement("li",null,"2.电力变压器系统；"),i.a.createElement("li",null,"3.低压照明配电系统（开关、插座等电工元器件）；"),i.a.createElement("li",null,"4.中央空调电气设施，电梯电气设施；"),i.a.createElement("li",null,"5.电气设备过载、短路、漏电保护装置；"),i.a.createElement("li",null,"6.变配电系统及电气设备的接地装置；"),i.a.createElement("li",null,"7.各类消防设施的电气部分；"),i.a.createElement("li",null,"8.电气线路、电气设备泄漏电流、绝缘老化情况；"),i.a.createElement("li",null,"9.供配电系统运行可靠性及安全性分析和评估。")),i.a.createElement("p",{style:{fontWeight:"bold"}},"电气防火检测的条件、手段及内容："),i.a.createElement("p",null,"一、电气防火检测的基本条件"),i.a.createElement("ul",null,i.a.createElement("li",null,"1、在电气设施和线路经1n以上的有载运行，在进入热稳定状态下进行检测和测量。"),i.a.createElement("li",null,"2、在受检方有关技术人员在现场配合下进行。")),i.a.createElement("p",null,"二、电气防火检测的主要手段"),i.a.createElement("p",null,"使用现代高科技仪器设备，如采用红外测温仪测温、红外热电视扫描、红外热像仪拍热谱图以及采用超声探测仪测量异常高温、火花放电等现象及使用常规电工仪器、仪表如，电压表、电流表、验电器、接地电阻测试仪、真有效值电流表等，对运行中的电气设施的各项运行参数进行测量，并运用直观方法，对照国家相关技术规范，对运行中的高低压电气设施的安装、使用、维护、和保养等情况进行电气防火安全检测。"),i.a.createElement("p",null,"三、检查（测）内容"),i.a.createElement("ul",null,i.a.createElement("li",null,"1、压器室",i.a.createElement("ul",null,i.a.createElement("li",null,"（1）观检查变压器室的设置位置、防火等级及孔洞封堵等；变压器的设置、外观质量、组件完整性及防火措施等；高低压电缆（线）的敷设等。"),i.a.createElement("li",null,"（2）用红外系列仪器检测变压器绕组和高低电缆（线）各接点的温度并拍热谱图。"))),i.a.createElement("li",null,"2、（低）压配电装置",i.a.createElement("ul",null,i.a.createElement("li",null,"①直观检查高（低）压配电装置的设置、安装质量、柜内配线、高（低）压电缆（线）接头、接地、配件的完整及防火措施等。"),i.a.createElement("li",null,"②采用常规仪表测量（或读取）各相线的电压（流）值、N线的不平衡电流值、PE线有无异常电流及接地电阻值等。"),i.a.createElement("li",null,"③采用红外系列仪器测量导线及其连接点、开关触头的温度并拍热谱图。"))),i.a.createElement("li",null,"3、压配电箱（盘）",i.a.createElement("ul",null,i.a.createElement("li",null,"①直观检查配电箱（盘）的设置、材质、安装质量、柜内配线、接线端子连接、接地及防火措施等。"),i.a.createElement("li",null,"②采用常规仪表测量负荷电流值、N线电流值及PE线有无异常电流。"),i.a.createElement("li",null,"⑶采用红外系列仪器测量箱（盘）内各接线端子、断路器触头的温度并拍热谱图；采用超声探测仪测量有无打火放电现象。"))),i.a.createElement("li",null,"4、压配电线路敷设",i.a.createElement("div",null,"检查不同用电场所的暗敷、明敷、直敷及穿保护管的线路在安装使用中存在的电气火灾隐患。")),i.a.createElement("li",null,"5、气照明装置",i.a.createElement("div",null,"检查不同的用电场所，各种照明装置在安装使用中存在的电气火灾隐患。")),i.a.createElement("li",null,"6、开关、插座",i.a.createElement("div",null,"检查不同的用电场所安装、使用的开关、插座存在的电气火灾隐患。")))))},Ie=function(){return i.a.createElement("div",{className:"xiaofang"},i.a.createElement("div",{className:"xiaofang-title"},"消防设施检测"),i.a.createElement("div",{className:"xiaofang-content"},i.a.createElement("p",{style:{fontWeight:"bold"}},"消防设施检测： "),i.a.createElement("ul",null,i.a.createElement("li",null,"1、灾自动报警系统"),i.a.createElement("li",null,"2、自动喷水灭火系统"),i.a.createElement("li",null,"3、消火栓给水系统"),i.a.createElement("li",null,"4、防排烟系统"),i.a.createElement("li",null,"5、防火门"),i.a.createElement("li",null,"6、防火卷帘"),i.a.createElement("li",null,"7、火灾应急照明和疏散指示标志")),i.a.createElement("p",{style:{fontWeight:"bold"}},"建筑消防设施的检测内容："),i.a.createElement("p",null,"一、火灾自动报警系统"),i.a.createElement("ul",null,i.a.createElement("li",null,"1、检测火灾自动报警系统线路的绝缘电阻、接地电阻、系统的接地、管线的安装及其保护状况；"),i.a.createElement("li",null,"2、检测火灾探测器和手动报警按钮的设置状况、安装质量、保护半径及与周围遮挡物的距离等，并按30~50%的比例抽检其报警功能；"),i.a.createElement("li",null,"3、检测火灾报警控制器的安装质量、柜内配线、保护接地的设置、主备电源的设置及其转换功能，并对控制器的各项功能测试；"),i.a.createElement("li",null,"4、检测消防设备控制柜的安装质量、柜内配线、手、自动控制及屏面接受消防设备的信号反馈功能；"),i.a.createElement("li",null,"5、检测电梯的迫降功能、消防电梯的使用功能，切断非消防电源功能和着火层的灯光显示功能；"),i.a.createElement("li",null,"6、检测消防控制室、各消防设备间及消火栓按钮处的消防通讯功能；"),i.a.createElement("li",null,"7、检测火灾应急广播的音响功能，手动选层和自动广播、遥控开启和强行切换等功能；"),i.a.createElement("li",null,"8、检测消防控制室的设置位置及明显标志、室内防火阀及无关管线的设置、双回路电源的设置和切换功能；"),i.a.createElement("li",null,"9、检测火灾应急照明和疏散指示标志的设置、照度、转换时间和图形符号；")),i.a.createElement("p",null,"二、消防供水系统"),i.a.createElement("ul",null,i.a.createElement("li",null,"1、检查消防水源的性质、进水管的条数和直径及消防水池的设置状况；"),i.a.createElement("li",null,"2、检查消防水池的容积、水位指示器和补水设施、保证消防用水和防冻措施等；"),i.a.createElement("li",null,"3、检查消防水箱的设置、容积、防冻措施、补水及单向阀的状况等；"),i.a.createElement("li",null,"4、检测各种消防供水泵的性能、管道、手自动控制、启动时间，主备泵和主备电源转换功能等；"),i.a.createElement("li",null,"5、检测水泵结合器的设置、标志及输送消防水的功能等；")),i.a.createElement("p",null,"三、室内消火栓系统"),i.a.createElement("ul",null,i.a.createElement("li",null,"1、检查室内消火栓的安装、组件、规格及其间距等；"),i.a.createElement("li",null,"2、检测屋顶消火栓的设置、陈冻措施及其充实水柱长度等；"),i.a.createElement("li",null,"3、检查室内消火栓管网的设置、管径、颜色、保证消防用水及其连接形状；"),i.a.createElement("li",null,"4、检测室内消火栓的首层和最不利点的静压、动压及其充实水柱长度；"),i.a.createElement("li",null,"5、检查手动启泵按钮的设置及其功能；"))))},De=a(44),Pe=a.n(De),Te=function(){return i.a.createElement("div",{className:"fanglei"},i.a.createElement("div",{className:"fanglei-title"},"防雷检测"),i.a.createElement("div",{className:"fanglei-imgs"},i.a.createElement("img",{className:"fanglei-img",src:Pe.a})))},Se=(a(87),Object(s.k)(function(e){return i.a.createElement("div",{className:"fuwu"},i.a.createElement("div",{className:"fuwu-wrapper"},i.a.createElement("div",{className:"fuwu-banner",style:{backgroundImage:"url("+P.a+")"}}),i.a.createElement("div",{className:"fuwu-tabs"},i.a.createElement(oe,{data:[{key:"/fuwu/dianqi",title:"电气设备检测"},{key:"/fuwu/xiaofang",title:"消防设备检测"},{key:"/fuwu/fanglei",title:"防雷检测"}].map(function(t){return Object.assign({},t,{active:e.history.location.pathname===t.key})}),onSelect:function(t){window.scrollTo(0,0),e.history.push(t)}})),i.a.createElement("div",{className:"fuwu-content"},i.a.createElement(s.g,null,i.a.createElement(s.c,{exact:!0,path:"/fuwu",to:"/fuwu/dianqi"}),i.a.createElement(s.d,{path:"/fuwu/dianqi",component:_e}),i.a.createElement(s.d,{path:"/fuwu/xiaofang",component:Ie}),i.a.createElement(s.d,{path:"/fuwu/fanglei",component:Te})))))})),He=function(){return i.a.createElement("div",{style:{height:"100vh"}})},Me=a(45),ze=a.n(Me),Ce=a(46),Ae=a.n(Ce),Le=a(47),Ue=a.n(Le),Re=a(48),Fe=a.n(Re),Ke=a(49),We=a.n(Ke),Je=a(50),Ge=a.n(Je),Be=a(51),Qe=a.n(Be),Xe=a(52),Ye=a.n(Xe),Ve=a(53),Ze=a.n(Ve),$e=a(54),et=a.n($e),tt=a(55),at=a.n(tt),nt=a(56),it=a.n(nt),lt=a(57),ct=a.n(lt),rt=function(){var e=[{img:ze.a,title:"钢卷尺"},{img:Ae.a,title:"温湿度计"},{img:Ue.a,title:"插座测试仪"},{img:Fe.a,title:"红外热成像仪"},{img:We.a,title:"绝缘电阻测试仪"},{img:Ge.a,title:"漏电开关测试仪"},{img:Qe.a,title:"交直流钳形电流表"},{img:Ye.a,title:"数字风速计"},{img:Ze.a,title:"数字万用表"},{img:et.a,title:"接地电阻测试仪"},{img:at.a,title:"坡度尺"},{img:it.a,title:"激光测距仪"},{img:ct.a,title:"工具箱"}];return i.a.createElement("div",{className:"xiaofang"},i.a.createElement("div",{className:"xiaofang-list"},e.map(function(e,t){return i.a.createElement("div",{key:t,className:"xiaofang-item"},i.a.createElement("div",{className:"xiaofang-item-img",style:{backgroundImage:"url("+e.img+")"}}),i.a.createElement("div",{className:"xiaofang-item-title"},e.title))})))},st=a(58),ot=a.n(st),mt=a(59),dt=a.n(mt),ut=a(60),ft=a.n(ut),pt=a(61),Et=a.n(pt),vt=a(62),gt=a.n(vt),bt=a(63),ht=a.n(bt),Nt=a(64),yt=a.n(Nt),xt=a(65),wt=a.n(xt),kt=a(66),jt=a.n(kt),qt=function(){var e=[{img:ot.a,title:"温湿度计"},{img:dt.a,title:"插座测试仪"},{img:ft.a,title:"红外热成像仪"},{img:Et.a,title:"绝缘电阻测试仪"},{img:gt.a,title:"漏电开关测试仪"},{img:ht.a,title:"交直流钳形电流表"},{img:yt.a,title:"数字风速计"},{img:wt.a,title:"数字万用表"},{img:jt.a,title:"接地电阻测试仪"}];return i.a.createElement("div",{className:"dianqi"},i.a.createElement("div",{className:"dianqi-list"},e.map(function(e,t){return i.a.createElement("div",{key:t,className:"dianqi-item"},i.a.createElement("div",{className:"dianqi-item-img",style:{backgroundImage:"url("+e.img+")"}}),i.a.createElement("div",{className:"dianqi-item-title"},e.title))})))},Ot=(a(88),Object(s.k)(function(e){return i.a.createElement("div",{className:"shebei"},i.a.createElement("div",{className:"shebei-wrapper"},i.a.createElement("div",{className:"shebei-banner",style:{backgroundImage:"url("+P.a+")"}}),i.a.createElement("div",{className:"shebei-tabs"},i.a.createElement(oe,{data:[{key:"/shebei/xiaofang",title:"消防检测设备"},{key:"/shebei/dianqi",title:"电气检测设备"}].map(function(t){return Object.assign({},t,{active:e.history.location.pathname===t.key})}),onSelect:function(t){window.scrollTo(0,0),e.history.push(t)}})),i.a.createElement("div",{className:"shebei-content"},i.a.createElement(s.g,null,i.a.createElement(s.c,{exact:!0,path:"/shebei",to:"/shebei/xiaofang"}),i.a.createElement(s.d,{path:"/shebei/xiaofang",component:rt}),i.a.createElement(s.d,{path:"/shebei/dianqi",component:qt})))))})),_t=(a(89),function(e){return i.a.createElement("div",{className:"lianxi"},i.a.createElement("div",{className:"lianxi-wrapper"},i.a.createElement("div",{className:"lianxi-banner",style:{backgroundImage:"url("+P.a+")"}}),i.a.createElement("div",{className:"lianxi-content"},i.a.createElement("div",{className:"lianxi-location"},i.a.createElement("div",{className:"lianxi-location-left",style:{backgroundImage:"url(https://restapi.amap.com/v3/staticmap?location=114.480437,22.975667&zoom=16&size=550*450&markers=mid,,A:114.480437,22.975667&key=4b6550da95e84a1f7faed4993457d2cf)"}}),i.a.createElement("div",{className:"lianxi-location-right"},i.a.createElement("div",{className:"lianxi-location-item"},"惠州市安富电气消防安全检测有限公司"),i.a.createElement("div",{className:"lianxi-location-item"},"地址：惠州市惠澳大道惠南产业园华泰南路2号科技创业中心1号楼520室"),i.a.createElement("div",{className:"lianxi-location-item"},"手机：13828838681 黎先生"),i.a.createElement("div",{className:"lianxi-location-item"},"Q Q：598138008"),i.a.createElement("div",{className:"lianxi-location-item"},"邮箱：598138008@qq.com"),i.a.createElement("div",{className:"lianxi-location-item"},"网站：www.anfutesting.com"))))))}),It=(a(90),function(){return i.a.createElement("div",{className:"container"},i.a.createElement(p,null),i.a.createElement("main",{className:"main"},i.a.createElement(s.d,{exact:!0,path:"/",component:se}),i.a.createElement(s.d,{path:"/jieshao",component:qe}),i.a.createElement(s.d,{path:"/zizhi",component:Oe}),i.a.createElement(s.d,{path:"/fuwu",component:Se}),i.a.createElement(s.d,{path:"/anli",component:He}),i.a.createElement(s.d,{path:"/shebei",component:Ot}),i.a.createElement(s.d,{path:"/lianxi",component:_t})),i.a.createElement(E,null),i.a.createElement(O,null))});c.a.render(i.a.createElement(r.HashRouter,null,i.a.createElement(It,null)),document.getElementById("app"),function(){setTimeout(function(){var e=document.getElementById("lds");e&&(e.style.display="none")},500)})}]);
//# sourceMappingURL=index.88eb7a081eb8f7c5dc9d.js.map