!function(e){function t(t){for(var n,r,i=t[0],c=t[1],o=t[2],l=0,s=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(I,r)&&I[r]&&s.push(I[r][0]),I[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(z&&z(t);s.length;)s.shift()();return P.push.apply(P,o||[]),a()}function a(){for(var e,t=0;t<P.length;t++){for(var a=P[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==I[i]&&(n=!1)}n&&(P.splice(t--,1),e=H(H.s=a[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!N[e])return;for(var a in N[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(h[a]=t[a]);0==--b&&0===g&&O()}(e,t),n&&n(e,t)};var r,i=!0,c="3c461fc57267bcac5743",o=1e4,l={},s=[],d=[];function m(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:x,apply:_,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:l[e]};return r=void 0,t}var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var v,h,E,b=0,g=0,y={},N={},w={};function k(e){return+e+""===e?+e:e}function x(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=o,t=t||1e4,new Promise(function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var n=new XMLHttpRequest,r=H.p+""+c+".hot-update.json";n.open("GET",r,!0),n.timeout=t,n.send(null)}catch(e){return a(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)a(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)a(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void a(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;N={},y={},w=e.c,E=e.h,f("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var a in h={},I)j(a);return"prepare"===p&&0===g&&0===b&&O(),t});var t}function j(e){w[e]?(N[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=H.p+""+e+"."+c+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function O(){f("ready");var e=v;if(v=null,e)if(i)Promise.resolve().then(function(){return _(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&t.push(k(a));e.resolve(t)}}function _(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var a,n,r,i,o;function d(e){for(var t=[e],a={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var r=n.pop(),c=r.id,o=r.chain;if((i=D[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:o,moduleId:c};for(var l=0;l<i.parents.length;l++){var s=i.parents[l],d=D[s];if(d){if(d.hot._declinedDependencies[c])return{type:"declined",chain:o.concat([s]),moduleId:c,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[c]?(a[s]||(a[s]=[]),m(a[s],[c])):(delete a[s],t.push(s),n.push({chain:o.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var u={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+N.moduleId+") to disposed module")};for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var N;o=k(y);var x=!1,j=!1,O=!1,_="";switch((N=h[y]?d(o):{type:"disposed",moduleId:y}).chain&&(_="\nUpdate propagation: "+N.chain.join(" -> ")),N.type){case"self-declined":t.onDeclined&&t.onDeclined(N),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+N.moduleId+_));break;case"declined":t.onDeclined&&t.onDeclined(N),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+N.moduleId+" in "+N.parentId+_));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(N),t.ignoreUnaccepted||(x=new Error("Aborted because "+o+" is not accepted"+_));break;case"accepted":t.onAccepted&&t.onAccepted(N),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(N),O=!0;break;default:throw new Error("Unexception type "+N.type)}if(x)return f("abort"),Promise.reject(x);if(j)for(o in b[o]=h[o],m(v,N.outdatedModules),N.outdatedDependencies)Object.prototype.hasOwnProperty.call(N.outdatedDependencies,o)&&(u[o]||(u[o]=[]),m(u[o],N.outdatedDependencies[o]));O&&(m(v,[N.moduleId]),b[o]=g)}var P,T=[];for(n=0;n<v.length;n++)o=v[n],D[o]&&D[o].hot._selfAccepted&&b[o]!==g&&T.push({module:o,errorHandler:D[o].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete I[e]}(e)});for(var M,S,z=v.slice();z.length>0;)if(o=z.pop(),i=D[o]){var q={},A=i.hot._disposeHandlers;for(r=0;r<A.length;r++)(a=A[r])(q);for(l[o]=q,i.hot.active=!1,delete D[o],delete u[o],r=0;r<i.children.length;r++){var C=D[i.children[r]];C&&((P=C.parents.indexOf(o))>=0&&C.parents.splice(P,1))}}for(o in u)if(Object.prototype.hasOwnProperty.call(u,o)&&(i=D[o]))for(S=u[o],r=0;r<S.length;r++)M=S[r],(P=i.children.indexOf(M))>=0&&i.children.splice(P,1);for(o in f("apply"),c=E,b)Object.prototype.hasOwnProperty.call(b,o)&&(e[o]=b[o]);var L=null;for(o in u)if(Object.prototype.hasOwnProperty.call(u,o)&&(i=D[o])){S=u[o];var R=[];for(n=0;n<S.length;n++)if(M=S[n],a=i.hot._acceptedDependencies[M]){if(-1!==R.indexOf(a))continue;R.push(a)}for(n=0;n<R.length;n++){a=R[n];try{a(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:o,dependencyId:S[n],error:e}),t.ignoreErrored||L||(L=e)}}}for(n=0;n<T.length;n++){var U=T[n];o=U.module,s=[o];try{H(o)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(a){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:a,originalError:e}),t.ignoreErrored||L||(L=a),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:o,error:e}),t.ignoreErrored||L||(L=e)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise(function(e){e(v)}))}var D={},I={0:0},P=[];function H(t){if(D[t])return D[t].exports;var a=D[t]={i:t,l:!1,exports:{},hot:m(t),parents:(d=s,s=[],d),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=D[e];if(!t)return H;var a=function(a){return t.hot.active?(D[a]?-1===D[a].parents.indexOf(e)&&D[a].parents.push(e):(s=[e],r=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),s=[]),H(a)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(a,i,n(i));return a.e=function(e){return"ready"===p&&f("prepare"),g++,H.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(y[e]||j(e),0===g&&0===b&&O())}},a.t=function(e,t){return 1&t&&(e=a(e)),H.t(e,-2&t)},a}(t)),a.l=!0,a.exports}H.m=e,H.c=D,H.d=function(e,t,a){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(H.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)H.d(a,n,function(t){return e[t]}.bind(null,n));return a},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="",H.h=function(){return c};var T=window.webpackJsonp=window.webpackJsonp||[],M=T.push.bind(T);T.push=t,T=T.slice();for(var S=0;S<T.length;S++)t(T[S]);var z=M;P.push([51,1]),a()}([,,,,,,,,,,,function(e,t,a){e.exports=a.p+"imgs/demo.png?20e455433e6962f7514c90b0190c3bc9"},,,,,,function(e,t,a){e.exports=a.p+"imgs/logo.jpg?7207240b3f16994aaf17a3e7884aacdc"},,,function(e,t,a){e.exports=a.p+"imgs/banner1.jpg?75642b562fb75e6d121f62868cf665d7"},function(e,t,a){e.exports=a.p+"imgs/banner2.jpg?77c7781bdda18591a1fb41ee64e8d00f"},function(e,t,a){e.exports=a.p+"imgs/banner3.jpg?823649886637cc4a9092411c480e6c30"},function(e,t,a){e.exports=a.p+"imgs/service1.png?b28f809a65aa3f854bfaeb83b173648a"},function(e,t,a){e.exports=a.p+"imgs/service2.png?07e391a70c6fb907c3eda0181893126d"},function(e,t,a){e.exports=a.p+"imgs/service3.png?9e8413358c604459927a5b827b3da8f8"},function(e,t,a){e.exports=a.p+"imgs/bg-reason-head.png?0c256a8d7fca36816cc29ef1293825af"},function(e,t,a){e.exports=a.p+"imgs/reason1.jpg?48cb36c4461bca2fa7c500c6f2f3cdee"},function(e,t,a){e.exports=a.p+"imgs/reason2.jpg?dbf40d8e1147a28d16debc5c94ccd36e"},function(e,t,a){e.exports=a.p+"imgs/reason3.jpg?496f1804908acfe402df5bb289dd07b8"},function(e,t,a){e.exports=a.p+"imgs/reason4.jpg?8eade162bfedeeb52427227b3349eb0d"},function(e,t,a){e.exports=a.p+"imgs/company.png?54d27741d97bd08ab2698320f2877dca"},,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=a(3),l=a(6),s=a(17),d=a.n(s),m=function(){return window.innerWidth<=900},u=(a(37),function(){var e=Object(n.useState)(m()),t=e[0],a=e[1],i=Object(n.useState)(!1),c=i[0],l=i[1],s=function(){a(m())};Object(n.useEffect)(function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}});var u=[{title:"首页",to:"/",exact:!0},{title:"公司介绍",to:"/jieshao",children:[{title:"企业简介",to:"/qiye",exact:!0},{title:"我们的风采",to:"/fengcai",exact:!0}]},{title:"荣誉资质",to:"/zizhi"},{title:"服务项目",to:"/fuwu",children:[{title:"电气设备检测",to:"/dianqi",exact:!0},{title:"消防设备检测",to:"/xiaofang",exact:!0},{title:"防雷检测",to:"/fanglei",exact:!0}]},{title:"成功案例",to:"/anli"},{title:"检测设备",to:"/shebei",children:[{title:"消防检测设备",to:"/xiaofang",exact:!0},{title:"电气检测设备",to:"/dianqi",exact:!0}]},{title:"关于我们",to:"/lianxi"}];return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:d.a})),t?r.a.createElement("div",{className:["navs-mobile"].concat(c?["navs-mobile-active"]:[]).join(" ")},u.map(function(e,t){return r.a.createElement("div",{key:t,className:"nav-mobile"},r.a.createElement(o.NavLink,{key:e.to,exact:e.exact,to:e.to,title:e.title,className:"nav-mobile-link",onClick:function(){l(!1)}},e.title),e.children&&r.a.createElement("div",{className:"sub-navs-mobile"},e.children.map(function(t,a){return r.a.createElement(o.NavLink,{className:"sub-nav-mobile-link",key:a,title:t.title,exact:t.exact,to:""+e.to+t.to,onClick:function(){l(!1)}},t.title)})))})):r.a.createElement("div",{className:"navs"},u.map(function(e,t){return r.a.createElement("div",{className:"nav",key:t},r.a.createElement(o.NavLink,{key:e.to,exact:e.exact,to:e.to,title:e.title,className:"nav-link"},e.title),e.children&&r.a.createElement("div",{className:"sub-navs"},e.children.map(function(t,a){return r.a.createElement(o.NavLink,{className:"sub-nav-link",key:a,title:t.title,exact:t.exact,to:""+e.to+t.to},t.title)})))})),t&&r.a.createElement("div",{className:["navs-mobile-expand"].concat(c?["navs-mobile-expand-active"]:[]).join(" "),onClick:function(){l(!c)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))}),p=a(10),f=a.n(p),v=(a(46),Object(l.k)(function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-top"},r.a.createElement("div",{className:"footer-top-wrapper"},r.a.createElement("div",{className:"footer-top-left"}),r.a.createElement("div",{className:"footer-top-right"},[[{to:"/jieshao",title:"公司介绍",isTitle:!0},{to:"/jieshao/qiye",title:"企业简介"},{to:"/jieshao/fengcai",title:"我们的风采"}],[{to:"/zizhi",title:"荣誉资质",isTitle:!0}],[{to:"/fuwu",title:"服务项目",isTitle:!0},{to:"/fuwu/dianqi",title:"电器设备检测"},{to:"/fuwu/xiaofang",title:"消防设备检测"},{to:"/fuwu/fanglei",title:"防雷检测"}],[{to:"/anli",title:"成功案例",isTitle:!0}],[{to:"/shebei",title:"检测设备",isTitle:!0},{to:"/shebei/xiaofang",title:"消防检测设备"},{to:"/shebei/dianqi",title:"电器检测设备"}],[{to:"/lianxi",title:"关于我们",isTitle:!0}]].map(function(e,t){return r.a.createElement("div",{className:"footer-top-col",key:"col-"+t},e.map(function(e,t){var a;return r.a.createElement(o.NavLink,{className:f()("footer-top-item",(a={},a["footer-top-item-title"]=e.isTitle,a)),key:"item-"+t,to:e.to,onClick:function(){window.scrollTo(0,0)}},e.title)}))})))),r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("div",{className:"footer-bottom-wrapper"},r.a.createElement("div",null,"@2017-",(new Date).getFullYear()," 惠州市安富电气消防安全检测有限公司"))))})),h=a(7),E=a(32),b=(a(47),a(20)),g=a.n(b),y=a(21),N=a.n(y),w=a(22),k=a.n(w),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.componentDidMount=function(){new E.a(this.swiper,{navigation:{nextEl:this.nextEl,prevEl:this.prevEl},pagination:{el:".swiper-pagination"}})},t.prototype.render=function(){var e=this,t=[g.a,N.a,k.a];return r.a.createElement("div",{className:"swiper-container banners",ref:function(t){return e.swiper=t}},r.a.createElement("div",{className:"swiper-wrapper"},t.map(function(e,t){return r.a.createElement("div",{className:"swiper-slide",key:t},r.a.createElement("div",{className:"banner",style:{backgroundImage:"url("+e+")"}}))})),r.a.createElement("div",{className:"swiper-button-next",ref:function(t){return e.nextEl=t}}),r.a.createElement("div",{className:"swiper-button-prev",ref:function(t){return e.prevEl=t}}),r.a.createElement("div",{className:"swiper-pagination",ref:function(t){return e.pageEl=t}}))},t}(r.a.PureComponent),j=a(23),O=a.n(j),_=a(24),D=a.n(_),I=a(25),P=a.n(I),H=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=[{title:"电气安全检测",img:O.a},{title:"消防设施安全检测",img:D.a},{title:"防雷设施安全检测",img:P.a}];return r.a.createElement("div",{className:"services"},r.a.createElement("div",{className:"services-wrapper"},r.a.createElement("div",{className:"services-head"},r.a.createElement("div",{className:"services-title"},"服务项目"),r.a.createElement("div",{className:"services-title-sub"},"提供专业的服务项目")),r.a.createElement("div",{className:"services-list"},e.map(function(e,t){return r.a.createElement("div",{className:"services-item",key:t},r.a.createElement("div",{className:"services-item-img",style:{backgroundImage:"url("+e.img+")"}}),r.a.createElement("div",{className:"services-item-title"},e.title))}))))},t}(r.a.PureComponent),T=a(11),M=a.n(T),S=function(e){function t(t){var a=e.call(this,t)||this;return a.handleResize=function(){a.setState({isMobile:m()})},a.state={demoKey:"dianqi",isMobile:!1},a}return Object(h.a)(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.render=function(){var e=this,t=this.state.isMobile,a=[{key:"dianqi",title:"电气检测",subTitle:"Fire engineering",main:{title:"",content:"",img:M.a}},{key:"xiaofang",title:"消防检测",subTitle:"Maintenance",main:{title:"",content:"",img:M.a}},{key:"fanglei",title:"防雷检测",subTitle:"Security Project",main:{title:"",content:"",img:M.a}}];return r.a.createElement("div",{className:"demos"},r.a.createElement("div",{className:"demos-wrapper"},r.a.createElement("div",{className:"demos-head"},r.a.createElement("div",{className:"demos-title"},"成功案例"),r.a.createElement("div",{className:"demos-title-sub"},"为您量身打造安防与消防集成综合解决方案")),t&&r.a.createElement("div",{className:"demos-navs-mobile"},a.map(function(t){var a;return r.a.createElement("div",{onClick:function(){e.setState({demoKey:t.key})},key:t.key,className:f()("demos-nav-mobile",(a={},a["demos-nav-mobile-active"]=t.key===e.state.demoKey,a))},r.a.createElement("div",{className:"demos-nav-title"},t.title),r.a.createElement("div",{className:"demos-nav-title-sub"},t.subTitle))})),r.a.createElement("div",{className:"demos-content"},!t&&r.a.createElement("div",{className:"demos-navs"},a.map(function(t){var a;return r.a.createElement("div",{onMouseEnter:function(){e.setState({demoKey:t.key})},key:t.key,className:f()("demos-nav",(a={},a["demos-nav-active"]=t.key===e.state.demoKey,a))},r.a.createElement("div",{className:"demos-nav-title"},t.title),r.a.createElement("div",{className:"demos-nav-title-sub"},t.subTitle))})),r.a.createElement("div",{className:"demos-list"},a.map(function(t){return r.a.createElement("div",{key:t.key,className:"demos-item",style:{display:t.key===e.state.demoKey?"block":"none"}},r.a.createElement("div",{className:"demos-item-img",style:{backgroundImage:"url("+t.main.img+")"}}),r.a.createElement("div",{className:"demos-item-main"},r.a.createElement("div",{className:"demos-item-title"},t.main.title),r.a.createElement("div",{className:"demos-item-content"},t.main.content)))})))))},t}(r.a.PureComponent),z=a(26),q=a.n(z),A=a(27),C=a.n(A),L=a(28),R=a.n(L),U=a(29),F=a.n(U),K=a(30),J=a.n(K),G=function(e){var t="reasons-item";return r.a.createElement("div",{className:"reasons"},r.a.createElement("div",{className:"reasons-wrapper"},r.a.createElement("div",{className:"reasons-head"},r.a.createElement("div",{className:"reasons-head-wrapper",style:{backgroundImage:"url("+q.a+")"}},r.a.createElement("div",{className:"reasons-title"},"选安富检测的四大理由"),r.a.createElement("div",{className:"reasons-title-sub"},"CHOOSE FOUR GROUNDS OF ANFU"))),r.a.createElement("div",{className:"reasons-list"},r.a.createElement("div",{className:"reasons-col"},r.a.createElement("div",{className:t},r.a.createElement("div",{className:t+"-head"},r.a.createElement("div",{className:t+"-title"},"我们专注的精神、完美的掌握"),r.a.createElement("div",{className:t+"-title-sub"},"Our concentration spirit, perfect mastery"),r.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),r.a.createElement("div",{className:t+"-content"},r.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+C.a+")"}}))),r.a.createElement("div",{className:t},r.a.createElement("div",{className:t+"-head"},r.a.createElement("div",{className:t+"-title"},"政府推荐单位 获得客户高度认可"),r.a.createElement("div",{className:t+"-title-sub"},"Government recommended units receive highly recognized customers"),r.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),r.a.createElement("div",{className:t+"-content"},r.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+F.a+")"}})))),r.a.createElement("div",{className:"reasons-col"},r.a.createElement("div",{className:t},r.a.createElement("div",{className:t+"-head"},r.a.createElement("div",{className:t+"-title"},"我们科学严谨、技术领先"),r.a.createElement("div",{className:t+"-title-sub"},"We are rigorous in science and advanced in technology"),r.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),r.a.createElement("div",{className:t+"-content"},r.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+R.a+")"}}))),r.a.createElement("div",{className:t},r.a.createElement("div",{className:t+"-head"},r.a.createElement("div",{className:t+"-title"},"团队技术力量雄厚，售后服务有保障"),r.a.createElement("div",{className:t+"-title-sub"},"The team is strong in technology, service guaranteed"),r.a.createElement("div",{className:t+"-title-desc"},"以优质的服务，获得客户好评")),r.a.createElement("div",{className:t+"-content"},r.a.createElement("div",{className:t+"-img",style:{backgroundImage:"url("+J.a+")"}})))))))},W=a(31),B=a.n(W),X=Object(l.k)(function(e){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("div",{className:"about-head"},r.a.createElement("div",{className:"about-title"},"关于我们"),r.a.createElement("div",{className:"about-title-sub"},"惠州市安富电气消防安全检测有限公司")),r.a.createElement("div",{className:"about-content"},r.a.createElement("div",{className:"about-left",style:{backgroundImage:"url("+B.a+")"}}),r.a.createElement("div",{className:"about-right"},r.a.createElement("div",{className:"about-right-title"},"惠州市安富电气消防安全检测有限公司"),r.a.createElement("div",{className:"about-right-content"},r.a.createElement("div",null,"惠州市安富电气消防安全检测有限公司（简称“AFJT”）是惠州市消防专业领域独立的、权威的第三方检验检服务机构，致力于为客户提供全方位的建筑装饰材料的阻燃性能测试、建筑电气消防安全检测、建筑物的防雷接地装置检测、安全评估、安全标准预案工程服务。"),r.a.createElement("div",{className:"about-right-btn",onClick:function(){e.history.push("/jieshao")}},"查看详情 >"))))))}),Y=(a(48),function(e){return r.a.createElement("section",{className:"shouye"},r.a.createElement(x,null),r.a.createElement(H,null),r.a.createElement(S,null),r.a.createElement(G,null),r.a.createElement(X,null))}),Q=function(){return r.a.createElement("div",null)},V=function(){return r.a.createElement("div",null)},Z=function(){return r.a.createElement("div",null)},$=function(){return r.a.createElement("div",null)},ee=function(){return r.a.createElement("div",null)},te=function(){return r.a.createElement("div",null)},ae=(a(49),function(){return r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement("main",{className:"main"},r.a.createElement(l.d,{exact:!0,path:"/",component:Y}),r.a.createElement(l.d,{path:"/jieshao",component:Q}),r.a.createElement(l.d,{path:"/zizhi",component:V}),r.a.createElement(l.d,{path:"/fuwu",component:Z}),r.a.createElement(l.d,{path:"/anli",component:$}),r.a.createElement(l.d,{path:"/shebei",component:ee}),r.a.createElement(l.d,{path:"/lianxi",component:te})),r.a.createElement(v,null))});c.a.render(r.a.createElement(o.HashRouter,null,r.a.createElement(ae,null)),document.getElementById("app"),function(){setTimeout(function(){var e=document.getElementById("lds");e&&(e.style.display="none")},500)})}]);
//# sourceMappingURL=index.3c461fc57267bcac5743.js.map