!function(){"use strict";var e,t,r,n,o,u={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return u[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=u,i.c=c,e=[],i.O=function(t,r,n,o){if(!r){var u=1/0;for(a=0;a<e.length;a++){r=e[a][0],n=e[a][1],o=e[a][2];for(var c=!0,f=0;f<r.length;f++)(!1&o||u>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[f])}))?r.splice(f--,1):(c=!1,o<u&&(u=o));c&&(e.splice(a--,1),t=n())}return t}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[r,n,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var u={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},i.d(o,u),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))},i.u=function(e){return"assets/js/"+({53:"935f2afb",85:"1f391b9e",117:"8cd0e544",195:"c4f5d8e4",514:"1be78505",540:"2cd717a8",592:"common",670:"b9506c14",671:"0e384e19",918:"17896441"}[e]||e)+"."+{53:"270b20bc",85:"c595cbeb",117:"588bbd1f",195:"2ba65320",277:"8feebbfb",514:"24ccf1cc",540:"c727cc28",592:"376cd3d6",608:"bafed17e",670:"74aa4edb",671:"f14a4f54",918:"b00e8ef0"}[e]+".js"},i.miniCssF=function(e){return"assets/css/styles.c874c3d4.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="xt-collaborator:",i.l=function(e,t,r,u){if(n[e])n[e].push(t);else{var c,f;if(void 0!==r)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){c=s;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+r),c.src=e),n[e]=[t];var d=function(t,r){c.onerror=c.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),f&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/xt-collaborator/",i.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","8cd0e544":"117",c4f5d8e4:"195","1be78505":"514","2cd717a8":"540",common:"592",b9506c14:"670","0e384e19":"671"}[e]||e,i.p+i.u(e)},function(){var e={303:0,532:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var u=i.p+i.u(t),c=new Error;i.l(u,(function(r){if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",c.name="ChunkLoadError",c.type=o,c.request=u,n[1](c)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,u=r[0],c=r[1],f=r[2],a=0;for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(f)var l=f(i);for(t&&t(r);a<u.length;a++)o=u[a],i.o(e,o)&&e[o]&&e[o][0](),e[u[a]]=0;return i.O(l)},r=self.webpackChunkxt_collaborator=self.webpackChunkxt_collaborator||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();