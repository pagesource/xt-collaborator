(self.webpackChunkxt_collaborator=self.webpackChunkxt_collaborator||[]).push([[670],{379:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6016);function c(e){var t=e.children,n=e.title,c=e.description;return r.createElement(a.Z,{title:n,description:c},r.createElement("main",null,t))}},8192:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return qe}});var r=n(7294),a=n(379),c=n(6010);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=/[\'\"]/,l={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},s=["style","script"],p=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,d=/\n{2,}$/,m=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,h=/^ {2,}\n/,y=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,b=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,E=/\r\n?/g,H=/^\[\^([^\]]+)](:.*)\n/,w=/^\[\^([^\]]+)]/,A=/\f/g,I=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,_=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,M=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,L=/&([a-z]+);/g,O=/^<!--[\s\S]*?(?:-->)/,C=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,N=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,G=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,T=/^<([^ >]+@[^ >]+)>/,z=/^<([^ >]+:\/[^ >]+)>/,Z=/ *\n+$/,R=/(?:^|\n)( *)$/,X=/-([a-z])?/gi,j=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,U=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,q=/\t/g,V=/^ *\| */,J=/(^ *\||\| *$)/g,K=/ *$/,Q=/^ *:-+: *$/,Y=/^ *:-+ *$/,ee=/^ *-+: *$/,te=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ne=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,re=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ae=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/(^\n+|\n+$|\s+$)/g,ie=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),se=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),pe=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),fe="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",de=new RegExp("^\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),me=new RegExp("^!\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ge=[m,v,k,S,_,M,O,N,se,pe,j,B];function he(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ye(e){return ee.test(e)?"right":Q.test(e)?"center":Y.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var c=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&c.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(K,"")),c[c.length-1].push(e))})),c}function ve(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=e[2].replace(J,"").split("|").map(ye),c=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:c,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function xe(e){return function(t,n){return n.inline?e.exec(t):null}}function Ee(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function He(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function we(e){return function(t){return e.exec(t)}}function Ae(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Ie(e){return e.replace(le,"$1")}function Se(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function _e(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Me(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var Le,Oe,Ce=function(e,t,n){return{content:Se(t,e[1],n)}};function Ne(){return{}}function $e(){return null}function Ge(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Te(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function ze(e,t){var n=Te(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Te(t,e+".component",e):e}function Ze(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||he,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},u,t.namedCodesToUnicode):u;var n=t.createElement||r.createElement;function a(e,r){var a=Te(t.overrides,e+".props",{});return n.apply(void 0,[ze(e,t.overrides),o({},r,a,{className:Ge(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function c(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===F.test(e));var c=ye(fe(n?e:e.replace(oe,"")+"\n\n",{inline:n}));if(null===t.wrapper)return c;var o,i=t.wrapper||(n?"span":"div");if(c.length>1||t.forceWrapper)o=c;else{if(1===c.length)return"string"==typeof(o=c[0])?a("span",{key:"outer"},o):o;o=null}return r.createElement(i,{key:"outer"},o)}function J(e){var t=e.match(p);return t?t.reduce((function(e,t,n){var a,o=t.indexOf("=");if(-1!==o){var u=(a=t.slice(0,o),-1!==a.indexOf("-")&&null===a.match(C)&&(a=a.replace(X,(function(e,t){return t.toUpperCase()}))),a).trim(),s=function(e){return e?(i.test(e.charAt(0))&&(e=e.substr(1)),i.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(o+1).trim()),p=l[u]||u,f=e[p]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ae(t):(t.match($)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(u,s);"string"==typeof f&&(M.test(f)||N.test(f))&&(e[p]=r.cloneElement(c(f.trim()),{key:n}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):void 0}var K=[],Q={},Y={blockQuote:{match:He(m),order:Le.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,n){return a("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:we(h),order:Le.HIGH,parse:Ne,react:function(e,t,n){return a("br",{key:n.key})}},breakThematic:{match:He(y),order:Le.HIGH,parse:Ne,react:function(e,t,n){return a("hr",{key:n.key})}},codeBlock:{match:He(v),order:Le.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return a("pre",{key:n.key},a("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:He(k),order:Le.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Ee(b),order:Le.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return a("code",{key:n.key},e.content)}},footnote:{match:He(H),order:Le.MAX,parse:function(e){return K.push({footnote:e[2],identifier:e[1]}),{}},react:$e},footnoteReference:{match:xe(w),order:Le.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return a("a",{key:n.key,href:Ae(e.target)},a("sup",{key:n.key},e.content))}},gfmTask:{match:xe(I),order:Le.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return a("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:He(S),order:Le.HIGH,parse:function(e,n,r){return{content:Se(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,a(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:He(_),order:Le.MAX,parse:function(e,t,n){return{content:Se(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:we(O),order:Le.HIGH,parse:function(){return{}},react:$e},image:{match:Ee(me),order:Le.HIGH,parse:function(e){return{alt:e[1],target:Ie(e[2]),title:e[3]}},react:function(e,t,n){return a("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Ae(e.target)})}},link:{match:xe(de),order:Le.LOW,parse:function(e,t,n){return{content:_e(t,e[1],n),target:Ie(e[2]),title:e[3]}},react:function(e,t,n){return a("a",{key:n.key,href:Ae(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:xe(z),order:Le.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,t){return t.inAnchor?null:xe(G)(e,t)},order:Le.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:xe(T),order:Le.MAX,parse:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=R.exec(n);return!r||!t._list&&t.inline?null:pe.exec(e=r[1]+e)},order:Le.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(d,"\n").match(se),i=!1;return{items:o.map((function(e,r){var a=ue.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(ue,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var p,f=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,p=l.replace(Z,"\n\n")):(n.inline=!0,p=l.replace(Z,""));var m=t(p,n);return n.inline=f,n._list=d,m})),ordered:a,start:c}},react:function(e,t,n){return a(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,r){return a("li",{key:r},t(e,n))})))}},newlineCoalescer:{match:He(x),order:Le.LOW,parse:Ne,react:function(){return"\n"}},paragraph:{match:He(B),order:Le.LOW,parse:Ce,react:function(e,t,n){return a("p",{key:n.key},t(e.content,n))}},ref:{match:xe(W),order:Le.MAX,parse:function(e){return Q[e[1]]={target:e[2],title:e[4]},{}},react:$e},refImage:{match:Ee(D),order:Le.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return a("img",{key:n.key,alt:e.alt,src:Ae(Q[e.ref].target),title:Q[e.ref].title})}},refLink:{match:xe(U),order:Le.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(P,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return Q[e.ref]?a("a",{key:n.key,href:Ae(Q[e.ref].target),title:Q[e.ref].title},t(e.content,n)):a("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:He(j),order:Le.HIGH,parse:ve,react:function(e,t,n){return a("table",{key:n.key},a("thead",null,a("tr",null,e.header.map((function(r,c){return a("th",{key:c,style:be(e,c)},t(r,n))})))),a("tbody",null,e.cells.map((function(r,c){return a("tr",{key:c},r.map((function(r,c){return a("td",{key:c,style:be(e,c)},t(r,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?V.exec(e):null},order:Le.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:we(ce),order:Le.MIN,parse:function(e){return{content:e[0].replace(L,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Ee(te),order:Le.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return a("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:Ee(ne),order:Le.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return a("em",{key:n.key},t(e.content,n))}},textEscaped:{match:Ee(ae),order:Le.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Ee(re),order:Le.LOW,parse:Ce,react:function(e,t,n){return a("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(Y.htmlBlock={match:we(M),order:Le.HIGH,parse:function(e,t,n){var r,a=e[3].match(ie),c=new RegExp("^"+a[1],"gm"),o=e[3].replace(c,""),i=(r=o,ge.some((function(e){return e.test(r)}))?Me:Se),l=e[1].toLowerCase(),u=-1!==s.indexOf(l);n.inAnchor=n.inAnchor||"a"===l;var p=u?e[3]:i(t,o,n);return n.inAnchor=!1,{attrs:J(e[2]),content:p,noInnerParse:u,tag:u?l:e[1]}},react:function(e,t,n){return a(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},Y.htmlSelfClosing={match:we(N),order:Le.HIGH,parse:function(e){return{attrs:J(e[2]||""),tag:e[1]}},react:function(e,t,n){return a(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var ee,le,fe=function(e){var t=Object.keys(e);function n(r,a){for(var c=[],o="";r;)for(var i=0;i<t.length;){var l=t[i],u=e[l],s=u.match(r,a,o);if(s){var p=s[0];r=r.substring(p.length);var f=u.parse(s,n,a);null==f.type&&(f.type=l),c.push(f),o=p;break}i++}return c}return t.sort((function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(E,"\n").replace(A,"").replace(q,"    ")}(e),t)}}(Y),ye=(le=Y,ee=function(e,t,n){return le[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],c=!1,o=0;o<t.length;o++){n.key=o;var i=e(t[o],n),l="string"==typeof i;l&&c?a[a.length-1]+=i:a.push(i),c=l}return n.key=r,a}return ee(t,e,n)}),ke=c(e);return K.length&&ke.props.children.push(a("footer",{key:"footer"},K.map((function(e){return a("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,ye(fe(e.footnote,{inline:!0})))})))),ke}function Re(e){var t=e.children,n=e.options,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t.indexOf(n=c[r])>=0||(a[n]=e[n]);return a}(e,["children","options"]);return r.cloneElement(Ze(t,n),a)}(Oe=Le||(Le={}))[Oe.MAX=0]="MAX",Oe[Oe.HIGH=1]="HIGH",Oe[Oe.MED=2]="MED",Oe[Oe.LOW=3]="LOW",Oe[Oe.MIN=4]="MIN";var Xe="contributionList_2Rg1",je="contributionCard_6ViH",Be="pageHeader_2_7g",We="header_2nzF",De="readMore_2zaI",Ue=n(836).contributions,Pe=function(e){var t=e.data,n=t.title,a=t.description,o=t.sourceLink,i=t.demoLink,l=t.pageLink;return r.createElement("section",{className:(0,c.Z)(je,"shadow--lw margin-bottom--md")},r.createElement("div",{className:"card"},r.createElement("div",{className:(0,c.Z)("card__header",We)},r.createElement("h2",null,n),r.createElement("div",null,o&&r.createElement("a",{className:(0,c.Z)("button button--link padding--none margin-right--md"),href:o,target:"_blank"},"Source"),i&&r.createElement("a",{className:(0,c.Z)("button button--link padding--none margin-right--md"),href:i,target:"_blank"},"Demo"))),r.createElement("div",{className:"card__body"},r.createElement(Re,{options:{forceBlock:!0}},a)),r.createElement("div",{className:"card__footer"},l&&r.createElement("a",{className:(0,c.Z)("button button--link",De),href:l,target:"_blank"},"Read more"))))},Fe=function(){return r.createElement(r.Fragment,null,r.createElement("header",{className:(0,c.Z)("padding--md margin-bottom--md",Be)},r.createElement("h1",{className:(0,c.Z)("margin-bottom--none")},"Contributions")),r.createElement("div",{className:(0,c.Z)(Xe,"padding--md")},Ue.map((function(e){return r.createElement(Pe,{key:e.title,data:e})}))))};function qe(){return r.createElement(a.Z,{title:"Contributions",description:"xt contribution listing"},r.createElement(Fe,null))}},836:function(e){"use strict";e.exports=JSON.parse('{"contributions":[{"title":"smart-context","description":"`smart-context` makes React state management easy. It is based on context api and does not require any setup. It provides option to integrate with other external packages such as immer.","sourceLink":"https://github.com/achaljain/smart-context","demoLink":"https://react-smart-context-demo.stackblitz.io","pageLink":"https://github.com/achaljain/smart-context/blob/master/README.md","keywords":["react","context","redux","state"],"author":"Achal Jain"}]}')}}]);