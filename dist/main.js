!function(){var t={6077:function(t,e,i){var n=i(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:function(t,e,i){var n=i(5112),r=i(30),s=i(3070),a=n("unscopables"),o=Array.prototype;null==o[a]&&s.f(o,a,{configurable:!0,value:r(null)}),t.exports=function(t){o[a][t]=!0}},9670:function(t,e,i){var n=i(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1285:function(t,e,i){"use strict";var n=i(7908),r=i(1400),s=i(7466);t.exports=function(t){for(var e=n(this),i=s(e.length),a=arguments.length,o=r(a>1?arguments[1]:void 0,i),h=a>2?arguments[2]:void 0,c=void 0===h?i:r(h,i);c>o;)e[o++]=t;return e}},1318:function(t,e,i){var n=i(5656),r=i(7466),s=i(1400),a=function(t){return function(e,i,a){var o,h=n(e),c=r(h.length),u=s(a,c);if(t&&i!=i){for(;c>u;)if((o=h[u++])!=o)return!0}else for(;c>u;u++)if((t||u in h)&&h[u]===i)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,i){var n=i(1694),r=i(4326),s=i(5112)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=n?r:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?i:a?r(e):"Object"==(n=r(e))&&"function"==typeof e.callee?"Arguments":n}},9920:function(t,e,i){var n=i(6656),r=i(3887),s=i(1236),a=i(3070);t.exports=function(t,e){for(var i=r(e),o=a.f,h=s.f,c=0;c<i.length;c++){var u=i[c];n(t,u)||o(t,u,h(e,u))}}},8544:function(t,e,i){var n=i(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,i){"use strict";var n=i(3383).IteratorPrototype,r=i(30),s=i(9114),a=i(8003),o=i(7497),h=function(){return this};t.exports=function(t,e,i){var c=e+" Iterator";return t.prototype=r(n,{next:s(1,i)}),a(t,c,!1,!0),o[c]=h,t}},8880:function(t,e,i){var n=i(9781),r=i(3070),s=i(9114);t.exports=n?function(t,e,i){return r.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},654:function(t,e,i){"use strict";var n=i(2109),r=i(4994),s=i(9518),a=i(7674),o=i(8003),h=i(8880),c=i(1320),u=i(5112),l=i(1913),f=i(7497),d=i(3383),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=u("iterator"),y="keys",v="values",x="entries",k=function(){return this};t.exports=function(t,e,i,u,d,I,w){r(i,e,u);var b,S,F,O=function(t){if(t===d&&A)return A;if(!g&&t in P)return P[t];switch(t){case y:case v:case x:return function(){return new i(this,t)}}return function(){return new i(this)}},T=e+" Iterator",L=!1,P=t.prototype,j=P[m]||P["@@iterator"]||d&&P[d],A=!g&&j||O(d),R="Array"==e&&P.entries||j;if(R&&(b=s(R.call(new t)),p!==Object.prototype&&b.next&&(l||s(b)===p||(a?a(b,p):"function"!=typeof b[m]&&h(b,m,k)),o(b,T,!0,!0),l&&(f[T]=k))),d==v&&j&&j.name!==v&&(L=!0,A=function(){return j.call(this)}),l&&!w||P[m]===A||h(P,m,A),f[e]=A,d)if(S={values:O(v),keys:I?A:O(y),entries:O(x)},w)for(F in S)(g||L||!(F in P))&&c(P,F,S[F]);else n({target:e,proto:!0,forced:g||L},S);return S}},9781:function(t,e,i){var n=i(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,i){var n=i(7854),r=i(111),s=n.document,a=r(s)&&r(s.createElement);t.exports=function(t){return a?s.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,e,i){var n=i(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,i){var n,r,s=i(7854),a=i(8113),o=s.process,h=s.Deno,c=o&&o.versions||h&&h.version,u=c&&c.v8;u?r=(n=u.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(r=n[1]),t.exports=r&&+r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,i){var n=i(7854),r=i(1236).f,s=i(8880),a=i(1320),o=i(3505),h=i(9920),c=i(4705);t.exports=function(t,e){var i,u,l,f,d,p=t.target,g=t.global,m=t.stat;if(i=g?n:m?n[p]||o(p,{}):(n[p]||{}).prototype)for(u in e){if(f=e[u],l=t.noTargetGet?(d=r(i,u))&&d.value:i[u],!c(g?u:p+(m?".":"#")+u,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;h(f,l)}(t.sham||l&&l.sham)&&s(f,"sham",!0),a(i,u,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,e,i){var n=i(7854),r=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?r(n[t]):n[t]&&n[t][e]}},7854:function(t,e,i){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof i.g&&i.g)||function(){return this}()||Function("return this")()},6656:function(t,e,i){var n=i(7908),r={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return r.call(n(t),e)}},3501:function(t){t.exports={}},490:function(t,e,i){var n=i(5005);t.exports=n("document","documentElement")},4664:function(t,e,i){var n=i(9781),r=i(7293),s=i(317);t.exports=!n&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,i){var n=i(7293),r=i(4326),s="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?s.call(t,""):Object(t)}:Object},2788:function(t,e,i){var n=i(5465),r=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return r.call(t)}),t.exports=n.inspectSource},9909:function(t,e,i){var n,r,s,a=i(8536),o=i(7854),h=i(111),c=i(8880),u=i(6656),l=i(5465),f=i(6200),d=i(3501),p="Object already initialized",g=o.WeakMap;if(a||l.state){var m=l.state||(l.state=new g),y=m.get,v=m.has,x=m.set;n=function(t,e){if(v.call(m,t))throw new TypeError(p);return e.facade=t,x.call(m,t,e),e},r=function(t){return y.call(m,t)||{}},s=function(t){return v.call(m,t)}}else{var k=f("state");d[k]=!0,n=function(t,e){if(u(t,k))throw new TypeError(p);return e.facade=t,c(t,k,e),e},r=function(t){return u(t,k)?t[k]:{}},s=function(t){return u(t,k)}}t.exports={set:n,get:r,has:s,enforce:function(t){return s(t)?r(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!h(e)||(i=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},4705:function(t,e,i){var n=i(7293),r=/#|\.prototype\./,s=function(t,e){var i=o[a(t)];return i==c||i!=h&&("function"==typeof e?n(e):!!e)},a=s.normalize=function(t){return String(t).replace(r,".").toLowerCase()},o=s.data={},h=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,e,i){var n=i(5005),r=i(3307);t.exports=r?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return"function"==typeof e&&Object(t)instanceof e}},3383:function(t,e,i){"use strict";var n,r,s,a=i(7293),o=i(9518),h=i(8880),c=i(6656),u=i(5112),l=i(1913),f=u("iterator"),d=!1;[].keys&&("next"in(s=[].keys())?(r=o(o(s)))!==Object.prototype&&(n=r):d=!0);var p=null==n||a((function(){var t={};return n[f].call(t)!==t}));p&&(n={}),l&&!p||c(n,f)||h(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},7497:function(t){t.exports={}},133:function(t,e,i){var n=i(7392),r=i(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,i){var n=i(7854),r=i(2788),s=n.WeakMap;t.exports="function"==typeof s&&/native code/.test(r(s))},30:function(t,e,i){var n,r=i(9670),s=i(6048),a=i(748),o=i(3501),h=i(490),c=i(317),u=i(6200)("IE_PROTO"),l=function(){},f=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},p=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}p=document.domain&&n?d(n):function(){var t,e=c("iframe");if(e.style)return e.style.display="none",h.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F}()||d(n);for(var t=a.length;t--;)delete p.prototype[a[t]];return p()};o[u]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(l.prototype=r(t),i=new l,l.prototype=null,i[u]=t):i=p(),void 0===e?i:s(i,e)}},6048:function(t,e,i){var n=i(9781),r=i(3070),s=i(9670),a=i(1956);t.exports=n?Object.defineProperties:function(t,e){s(t);for(var i,n=a(e),o=n.length,h=0;o>h;)r.f(t,i=n[h++],e[i]);return t}},3070:function(t,e,i){var n=i(9781),r=i(4664),s=i(9670),a=i(4948),o=Object.defineProperty;e.f=n?o:function(t,e,i){if(s(t),e=a(e),s(i),r)try{return o(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},1236:function(t,e,i){var n=i(9781),r=i(5296),s=i(9114),a=i(5656),o=i(4948),h=i(6656),c=i(4664),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=a(t),e=o(e),c)try{return u(t,e)}catch(t){}if(h(t,e))return s(!r.f.call(t,e),t[e])}},8006:function(t,e,i){var n=i(6324),r=i(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,i){var n=i(6656),r=i(7908),s=i(6200),a=i(8544),o=s("IE_PROTO"),h=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=r(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?h:null}},6324:function(t,e,i){var n=i(6656),r=i(5656),s=i(1318).indexOf,a=i(3501);t.exports=function(t,e){var i,o=r(t),h=0,c=[];for(i in o)!n(a,i)&&n(o,i)&&c.push(i);for(;e.length>h;)n(o,i=e[h++])&&(~s(c,i)||c.push(i));return c}},1956:function(t,e,i){var n=i(6324),r=i(748);t.exports=Object.keys||function(t){return n(t,r)}},5296:function(t,e){"use strict";var i={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!i.call({1:2},1);e.f=r?function(t){var e=n(this,t);return!!e&&e.enumerable}:i},7674:function(t,e,i){var n=i(9670),r=i(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,s){return n(i),r(s),e?t.call(i,s):i.__proto__=s,i}}():void 0)},288:function(t,e,i){"use strict";var n=i(1694),r=i(648);t.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}},2140:function(t,e,i){var n=i(111);t.exports=function(t,e){var i,r;if("string"===e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if("string"!==e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,i){var n=i(5005),r=i(8006),s=i(5181),a=i(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=r.f(a(t)),i=s.f;return i?e.concat(i(t)):e}},1320:function(t,e,i){var n=i(7854),r=i(8880),s=i(6656),a=i(3505),o=i(2788),h=i(9909),c=h.get,u=h.enforce,l=String(String).split("String");(t.exports=function(t,e,i,o){var h,c=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,d=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||s(i,"name")||r(i,"name",e),(h=u(i)).source||(h.source=l.join("string"==typeof e?e:""))),t!==n?(c?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=i:r(t,e,i)):f?t[e]=i:a(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||o(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,i){var n=i(7854);t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(i){n[t]=e}return e}},8003:function(t,e,i){var n=i(3070).f,r=i(6656),s=i(5112)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,s)&&n(t,s,{configurable:!0,value:e})}},6200:function(t,e,i){var n=i(2309),r=i(9711),s=n("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,i){var n=i(7854),r=i(3505),s="__core-js_shared__",a=n[s]||r(s,{});t.exports=a},2309:function(t,e,i){var n=i(1913),r=i(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,i){var n=i(9958),r=Math.max,s=Math.min;t.exports=function(t,e){var i=n(t);return i<0?r(i+e,0):s(i,e)}},5656:function(t,e,i){var n=i(8361),r=i(4488);t.exports=function(t){return n(r(t))}},9958:function(t){var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},7466:function(t,e,i){var n=i(9958),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},7908:function(t,e,i){var n=i(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,i){var n=i(111),r=i(2190),s=i(2140),a=i(5112)("toPrimitive");t.exports=function(t,e){if(!n(t)||r(t))return t;var i,o=t[a];if(void 0!==o){if(void 0===e&&(e="default"),i=o.call(t,e),!n(i)||r(i))return i;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,i){var n=i(7593),r=i(2190);t.exports=function(t){var e=n(t,"string");return r(e)?e:String(e)}},1694:function(t,e,i){var n={};n[i(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9711:function(t){var e=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+i).toString(36)}},3307:function(t,e,i){var n=i(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,i){var n=i(7854),r=i(2309),s=i(6656),a=i(9711),o=i(133),h=i(3307),c=r("wks"),u=n.Symbol,l=h?u:u&&u.withoutSetter||a;t.exports=function(t){return s(c,t)&&(o||"string"==typeof c[t])||(o&&s(u,t)?c[t]=u[t]:c[t]=l("Symbol."+t)),c[t]}},3290:function(t,e,i){var n=i(2109),r=i(1285),s=i(1223);n({target:"Array",proto:!0},{fill:r}),s("fill")},6992:function(t,e,i){"use strict";var n=i(5656),r=i(1223),s=i(7497),a=i(9909),o=i(654),h="Array Iterator",c=a.set,u=a.getterFor(h);t.exports=o(Array,"Array",(function(t,e){c(this,{type:h,target:n(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},1539:function(t,e,i){var n=i(1694),r=i(1320),s=i(288);n||r(Object.prototype,"toString",s,{unsafe:!0})},3948:function(t,e,i){var n=i(7854),r=i(8324),s=i(6992),a=i(8880),o=i(5112),h=o("iterator"),c=o("toStringTag"),u=s.values;for(var l in r){var f=n[l],d=f&&f.prototype;if(d){if(d[h]!==u)try{a(d,h,u)}catch(t){d[h]=u}if(d[c]||a(d,c,l),r[l])for(var p in s)if(d[p]!==s[p])try{a(d,p,s[p])}catch(t){d[p]=s[p]}}}},4382:function(t,e,i){"use strict";t.exports=i.p+"0a65c53e1dba6cf8598b.jpg"},4483:function(t,e,i){"use strict";t.exports=i.p+"8e74a56054f2a1432468.jpg"},4598:function(t,e,i){"use strict";t.exports=i.p+"20e93e6999e69b330229.png"},1410:function(t,e,i){"use strict";t.exports=i.p+"dbdb7572d768489bf3ed.png"},8589:function(t,e,i){"use strict";t.exports=i.p+"9100d9169b154f6ff0d9.png"},3102:function(t,e,i){"use strict";t.exports=i.p+"b48d0712fcf5fb1e676b.png"},5920:function(t,e,i){"use strict";t.exports=i.p+"eced07f72df12a5f070b.png"},8246:function(t,e,i){"use strict";t.exports=i.p+"1a8035190c3b519c308d.png"},5609:function(t,e,i){"use strict";t.exports=i.p+"63d61459fa4056060636.png"},1177:function(t,e,i){"use strict";t.exports=i.p+"9a818aebc5a75bad7a00.png"}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),function(){"use strict";i(6992),i(1539),i(3948),i(3290);var t=i(8589),e=i(1410);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,i,n,r,s,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.w=n,this.h=r,this.maxHealth=s,this.maxWidth=n,this.health=s,this.color=a}var e,i;return e=t,(i=[{key:"animate",value:function(t){t.lineWith=5,t.strokeStyle="#333",t.fillStyle=this.color,t.fillRect(this.x,this.y,this.w,this.h),t.strokeRect(this.x,this.y,this.maxWidth,this.h)}},{key:"takeDamage",value:function(t){this.w-t<0?this.w=0:this.w-=t}}])&&n(e.prototype,i),t}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function i(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.ctx=e,this.x=0,this.y=330,this.width=130,this.height=72,this.frameX=0,this.frameY=0,this.speed=8,this.direction="right",this.playerSprite=new Image,this.playerSprite.src=t,this.dodging=!1,this.attacking=!1,this.moving=!1,this.idle=!0,this.canDodge=!0,this.invincible=!1,this.healthBar=new r(20,20,300,10,100,"green"),this.healthPoints=300,this.actionIndices={movementIdx:0,idleIdx:0,dyingIdx:0,attackingIdx:0,dodgingIdx:0},this.idleFramesL=[[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]],this.idleFramesR=[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]],this.movementFramesL=[[5,1],[4,1],[3,1],[2,1],[1,1],[0,1],[5,2],[4,2],[3,2],[2,2]],this.movementFramesR=[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[0,2],[1,2],[2,2],[3,2]],this.dyingFramesL=[[5,7],[4,7],[3,7],[2,7],[1,7],[0,7],[5,8],[4,8],[3,8],[2,8],[1,8]],this.dyingFramesR=[[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[0,8],[1,8],[2,8],[3,8],[4,8]],this.attackFramesL=[[1,2],[0,2],[5,3],[4,3],[3,3],[2,3],[1,3],[0,3],[5,4],[4,4],[3,4],[2,4],[1,4],[0,4],[5,5],[4,5],[3,5],[2,5],[1,5],[0,5]],this.attackFramesR=[[4,2],[5,2],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],this.dodgeFramesL=[[0,9],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10],[5,11],[4,11],[3,11]],this.dodgeFramesR=[[5,9],[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[0,11],[1,11],[2,11]],this.keys=[]}var n,a;return n=i,(a=[{key:"drawSprite",value:function(t,e,i,n,r,s,a,o,h){this.ctx.drawImage(t,e,i,n,r,s,a,o,h)}},{key:"animate",value:function(){this.drawSprite(this.playerSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,1.5*this.width,1.5*this.height),this.healthBar.animate(this.ctx),!0===this.dying?this.handleDyingFrames():(this.move(),this.handleFrames(this.moving,this.movementFramesL,this.movementFramesR,"movementIdx"),this.handleFrames(this.idle,this.idleFramesL,this.idleFramesR,"idleIdx"),this.handleFrames(this.attacking,this.attackFramesL,this.attackFramesR,"attackingIdx"),this.handleFrames(this.dodging,this.dodgeFramesL,this.dodgeFramesR,"dodgingIdx"),this.dodging?this.invincible=!0:this.invincible=!1)}},{key:"keyDown",value:function(t){this.idle=!1,this.keys[t.code]=!0}},{key:"keyUp",value:function(t){delete this.keys[t.code],this.attacking=!1,this.moving=!1,this.dodging=!1,this.idle=!0,this.actionIndices.movementIdx=0,this.actionIndices.idleIdx=0,this.actionIndices.attackingIdx=0,this.actionIndices.dodgingIdx=0}},{key:"move",value:function(){var i=this;this.keys.KeyD&&this.x<670&&!this.attacking&&(this.playerSprite.src=t,this.direction="right",this.moving=!0,this.idle=!1,this.dodging=!1,this.attacking=!1,this.x+=this.speed),this.keys.KeyA&&this.x>-70&&!this.attacking&&(this.playerSprite.src=e,this.direction="left",this.moving=!0,this.idle=!1,this.dodging=!1,this.attacking=!1,this.x-=this.speed),this.keys.KeyN&&!this.attacking&&(this.moving=!1,this.idle=!1,this.dodging=!1,this.attacking=!0),(this.keys.KeyM&&this.keys.KeyD||this.keys.KeyM&&this.keys.KeyA)&&this.x<670&&this.x>-70&&this.canDodge&&!this.attacking&&(setTimeout((function(){i.canDodge=!1,setTimeout((function(){i.canDodge=!0}),1100)}),1e3),this.moving=!1,this.idle=!1,this.dodging=!0,this.attacking=!1)}},{key:"handleFrames",value:function(t,e,i,n){if(t){var r=e;"right"===this.direction&&(r=i),this.actionIndices[n]<r.length?(this.frameX=r[this.actionIndices[n]][0],this.frameY=r[this.actionIndices[n]][1],this.actionIndices[n]++):this.actionIndices[n]=0}}},{key:"coordinates",value:function(){return[this.x,this.y]}},{key:"beingAttacked",value:function(t){this.invincible||(this.healthPoints-=t,this.healthBar.takeDamage(t)),this.healthPoints<0&&(this.dying=!0)}},{key:"handleDyingFrames",value:function(){var t=this.dyingFramesL;if("right"===this.direction&&(t=this.dyingFramesR),this.actionIndices.dyingIdx<t.length)this.frameX=t[this.actionIndices.dyingIdx][0],this.frameY=t[this.actionIndices.dyingIdx][1],this.actionIndices.dyingIdx++;else{var e=this;setTimeout((function(){e.alive=!1}),3e3)}}}])&&s(n.prototype,a),i}(),o=i(4598),h=i(3102);function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.background=new Image,this.background.src=o,this.title=new Image,this.title.src=h}var e,i;return e=t,(i=[{key:"animate",value:function(t,e){t.clearRect(0,0,e.width,e.height),t.drawImage(this.background,0,0,e.width,e.height)}},{key:"animateTitle",value:function(t,e){t.clearRect(0,0,e.width,e.height),t.drawImage(this.title,0,0,e.width,e.height)}}])&&c(e.prototype,i),t}(),l=i(4483),f=i(4382);function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=375,this.y=175,this.width=180,this.height=180,this.frameX=0,this.frameY=0,this.speed=3,this.attacking=!1,this.moving=!0,this.dying=!1,this.alive=!0,this.healthPoints=750,this.healthBar=new r(20,480,750,10,100,"green"),this.playerSprite=new Image,this.playerSprite.src=f,this.direction="left",this.actionIndices={movementIdx:0,idleIdx:0,dyingIdx:0,attackingIdx:0,dodgingIdx:0},this.movementFramesL=[[3,3],[2,3],[1,3],[0,3],[5,4],[4,4],[3,4],[2,4]],this.movementFramesR=[[2,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4]],this.attackFramesL=[[1,1],[0,1],[5,2],[4,2],[3,2],[2,2],[1,2],[0,2],[5,3],[4,3]],this.attackFramesR=[[4,1],[5,1],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[0,3],[1,3]],this.dyingFramesL=[[0,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6]],this.dyingFramesR=[[5,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6]],this.numOfAttacks=1,this.keys=[]}var e,i;return e=t,(i=[{key:"animate",value:function(t,e){var i,n,r,s,a,o,h,c,u,l=this;i=this.playerSprite,n=this.width*this.frameX,r=this.height*this.frameY,s=this.width,a=this.height,o=this.x,h=this.y,c=1.5*this.width,u=1.5*this.height,t.drawImage(i,n,r,s,a,o,h,c,u),this.move(e),this.healthBar.animate(t),!0===this.dying?(this.moving=!1,this.attacking=!1,this.handleDyingFrames()):(this.numOfAttacks>0&&(this.attacking=!0,this.moving=!1,this.numOfAttacks--,setTimeout((function(){l.numOfAttacks=1}),3e3)),this.handleAttackFrames(),this.handleMovementFrames())}},{key:"handleAttackFrames",value:function(){if(this.attacking&&!this.moving){var t=this.attackFramesL;"right"===this.direction&&(t=this.attackFramesR),this.actionIndices.attackingIdx<t.length?(this.frameX=t[this.actionIndices.attackingIdx][0],this.frameY=t[this.actionIndices.attackingIdx][1],this.actionIndices.attackingIdx++):(this.attacking=!1,this.moving=!0,this.actionIndices.attackingIdx=0)}}},{key:"handleMovementFrames",value:function(){if(this.moving&&!this.attacking){var t=this.movementFramesL;"right"===this.direction&&(t=this.movementFramesR),this.actionIndices.movementIdx<t.length?(this.frameX=t[this.actionIndices.movementIdx][0],this.frameY=t[this.actionIndices.movementIdx][1],this.actionIndices.movementIdx++):this.actionIndices.movementIdx=0}}},{key:"move",value:function(t){this.moving&&(this.x>t[0]&&("left"!==this.direction&&(this.direction="left",this.movementIdxL=0),this.playerSprite.src=f,this.moving=!0,this.x-=this.speed),this.x<t[0]-70&&("right"!==this.direction&&(this.direction="right",this.movementIdxR=0),this.playerSprite.src=l,this.moving=!0,this.x+=this.speed))}},{key:"handleDyingFrames",value:function(){var t=this.dyingFramesL;if("right"===this.direction&&(t=this.dyingFramesR),this.actionIndices.dyingIdx<t.length)this.frameX=t[this.actionIndices.dyingIdx][0],this.frameY=t[this.actionIndices.dyingIdx][1],this.actionIndices.dyingIdx++;else{var e=this;setTimeout((function(){e.alive=!1}),3e3)}}},{key:"beingAttacked",value:function(t){this.healthPoints-=t,this.healthBar.takeDamage(t),this.healthPoints<0&&(this.dying=!0)}}])&&d(e.prototype,i),t}(),g=i(8246),m=i(5920),y=i(5609),v=i(1177);function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var k=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.speed=n,this.width=64,this.height=64,this.frameX=0,this.frameY=0,this.moving=!1,this.direction=r,this.throw=!1,this.frameL=[[2,0],[1,0],[0,0],[2,1],[1,1],[0,1]],this.frameR=[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]],this.playerSprite=new Image,this.playerSprite.src=y}var e,i;return e=t,(i=[{key:"animate",value:function(t){var e,i,n,r,s,a,o,h,c;e=this.playerSprite,i=this.width*this.frameX,n=this.height*this.frameY,r=this.width,s=this.height,a=this.x,o=this.y,h=1.5*this.width,c=1.5*this.height,t.drawImage(e,i,n,r,s,a,o,h,c),this.move(),this.handleFrames()}},{key:"move",value:function(){this.moving=!0,this.playerSprite.src=y,"right"===this.direction&&(this.playerSprite.src=v),"left"===this.direction?this.x-=this.speed:this.x+=this.speed}},{key:"handleFrames",value:function(){if(this.moving){var t=this.frameL;"right"===this.direction&&(t=this.frameR),this.frameIdx<t.length?(this.frameX=t[this.frameIdx][0],this.frameY=t[this.frameIdx][1],this.frameIdx++):this.frameIdx=0}}},{key:"hit",value:function(){return(this.x<0||this.x>670)&&(this.moving=!1,!0)}}])&&x(e.prototype,i),t}();function I(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=690,this.y=290,this.width=100,this.height=100,this.frameX=0,this.frameY=0,this.speed=3,this.attacking=!1,this.idle=!0,this.dying=!1,this.alive=!0,this.healthBar=new r(20,470,750,10,100,"purple"),this.healthPoints=750,this.playerSprite=new Image,this.playerSprite.src=m,this.thrown=!1,this.teleport1=!1,this.teleport2=!1,this.invincible=!1,this.direction="left",this.actionIndices={idleIdx:0,dyingIdx:0,attackingIdx:0,teleportIdx:0},this.idleFramesL=[[7,0],[6,0],[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]],this.idleFramesR=[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]],this.attackFramesL=[[7,7],[6,7],[5,7],[4,7],[3,7],[2,7],[1,7],[0,7]],this.attackFramesR=[[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7]],this.dyingFramesL=[[7,3],[6,3],[5,3],[4,3],[3,3],[2,3],[1,3],[0,3]],this.dyingFramesR=[[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3]],this.teleportFramesLPhase1=[[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[1,10],[1,10],[0,10]],this.teleportFramesLPhase2=[[7,11],[6,11],[5,11],[4,11],[3,11],[3,11],[3,11],[2,11],[1,11],[0,11],[7,10]],this.teleportFramesRPhase1=[[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[6,10],[6,10],[7,10]],this.teleportFramesRPhase2=[[0,11],[1,11],[2,11],[3,11],[4,11],[4,11],[4,11],[5,11],[6,11],[7,11],[0,10]],this.numOfAttacks=1,this.shurikenArr=[],this.keys=[]}var e,i;return e=t,(i=[{key:"animate",value:function(t,e){var i,n,r,s,a,o,h,c,u,l=this;i=this.playerSprite,n=this.width*this.frameX,r=this.height*this.frameY,s=this.width,a=this.height,o=this.x,h=this.y,c=1.5*this.width,u=1.5*this.height,t.drawImage(i,n,r,s,a,o,h,c,u),this.move(e),this.healthBar.animate(t),!0===this.dying&&(this.idle=!1,this.attacking=!1,this.handleDyingFrames()),setTimeout((function(){l.shurikenArr.length>0?(l.attacking=!0,l.idle=!1):"left"===l.direction?l.shurikenArr.push(new k(580,350,20,l.direction)):l.shurikenArr.push(new k(70,350,20,l.direction))}),1e3),this.thrown?(this.shurikenArr[0].animate(t),this.shurikenArr[0].hit()&&(this.shurikenArr.shift(),this.thrown=!1,this.attacking=!1)):this.handleAttackFrames(),this.teleport1&&this.handleTeleportFramesPhase1(),this.teleport2&&this.handleTeleportFramesPhase2()}},{key:"beingAttacked",value:function(t){this.invincible||(this.healthPoints-=t,this.healthBar.takeDamage(t),this.healthPoints<0&&(this.dying=!0),this.teleport1=!0,this.idle=!1,this.attacking=!1)}},{key:"handleTeleportFramesPhase1",value:function(){var t=this.teleportFramesLPhase1;if("right"===this.direction&&(t=this.teleportFramesRPhase1),this.actionIndices.teleportIdx<t.length)this.frameX=t[this.actionIndices.teleportIdx][0],this.frameY=t[this.actionIndices.teleportIdx][1],this.actionIndices.teleportIdx++;else{var e=this;this.frameX=t[t.length-1][0],this.frameY=t[t.length-1][1],"left"===e.direction?e.x=-50:e.x=690,e.teleport1=!1,e.teleport2=!0,e.actionIndices.teleportIdx=0}}},{key:"handleTeleportFramesPhase2",value:function(){var t=this.teleportFramesLPhase2;"right"===this.direction&&(t=this.teleportFramesRPhase2),this.actionIndices.teleportIdx<t.length?(this.frameX=t[this.actionIndices.teleportIdx][0],this.frameY=t[this.actionIndices.teleportIdx][1],this.actionIndices.teleportIdx++):(this.invincible=!1,this.teleport2=!1,this.attack=!1,this.actionIndices.teleportIdx=0)}},{key:"handleAttackFrames",value:function(){if(this.attacking&&!this.idle&&this.shurikenArr.length>0){var t=this.attackFramesL;"right"===this.direction&&(t=this.attackFramesR),this.actionIndices.attackingIdx<t.length?(this.frameX=t[this.actionIndices.attackingIdx][0],this.frameY=t[this.actionIndices.attackingIdx][1],this.actionIndices.attackingIdx++):(this.thrown=!0,this.attacking=!1,this.idle=!0,this.actionIndices.attackingIdx=0)}}},{key:"handleIdleFrames",value:function(){if(this.idle&&!this.attacking){var t=this.idleFramesL;"right"===this.direction&&(t=this.idleFramesR),this.actionIndices.idleIdx<t.length?(this.frameX=t[this.actionIndices.idleIdx][0],this.frameY=t[this.actionIndices.idleIdx][1],this.actionIndices.idleIdx++):(this.actionIndices.idleIdx=0,this.frameX=t[this.actionIndices.idleIdx][0],this.frameY=t[this.actionIndices.idleIdx][1])}}},{key:"handleDyingFrames",value:function(){var t=this.dyingFramesL;if("right"===this.direction&&(t=this.dyingFramesR),this.actionIndices.dyingIdx<t.length)this.frameX=t[this.actionIndices.dyingIdx][0],this.frameY=t[this.actionIndices.dyingIdx][1],this.actionIndices.dyingIdx++;else{var e=this;this.frameX=t[t.length-1][0],this.frameY=t[t.length-1][1],setTimeout((function(){e.frameX=t[t.length-1],e.alive=!1}),3e3)}}},{key:"move",value:function(t){this.x>t[0]&&("left"!==this.direction&&(this.direction="left"),this.playerSprite.src=m),this.x<t[0]&&("right"!==this.direction&&(this.direction="right"),this.playerSprite.src=g)}}])&&I(e.prototype,i),t}();function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.dimensions={width:e.width,height:e.height},this.level=new u(this.dimensions),this.player=new a(this.ctx),this.demon=new p,this.rogue=new w,this.fpsInterval=0,this.startTime=0,this.now=0,this.then=0,this.elapsed=0,this.paused=0,this.running=1,this.gameState=2,this.gameOver=3,this.menu=2,this.keys=[],this.start(15),this.eventListener()}var e,i;return e=t,(i=[{key:"restart",value:function(){this.level=new u(this.dimensions),this.player=new a(this.ctx),this.demon=new p,this.rogue=new w,this.gameState=this.running,this.start(15)}},{key:"eventListener",value:function(){var t=this;window.addEventListener("keyup",(function(e){t.player.keyUp(e),t.keyUp(e)})),window.addEventListener("keydown",(function(e){t.player.keyDown(e),t.keyDown(e)}))}},{key:"keyDown",value:function(t){this.keys[t.code]=!0,this.setState()}},{key:"keyUp",value:function(t){delete this.keys[t.code]}},{key:"setState",value:function(){this.keys.KeyK&&this.togglePause(),this.keys.KeyR&&this.restart(),this.keys.Enter&&this.exitMenu()}},{key:"exitMenu",value:function(){this.gameState=this.running,this.animate()}},{key:"togglePause",value:function(){this.gameState===this.paused?(this.gameState=this.running,this.animate()):this.gameState=this.paused}},{key:"pauseScreen",value:function(){this.ctx.rect(0,0,this.dimensions.width,this.dimensions.height),this.ctx.fillStyle="rgba(0,0,0,0.5)",this.ctx.fill(),this.ctx.font="50px Papyrus",this.ctx.fillStyle="black",this.ctx.strokeStyle="red",this.ctx.textAlign="center",this.ctx.fillText("paused",this.dimensions.width/2,this.dimensions.height/2),this.ctx.strokeText("paused",this.dimensions.width/2,this.dimensions.height/2)}},{key:"gameOverScreen",value:function(){var t=this;setTimeout((function(){t.ctx.rect(0,0,t.dimensions.width,t.dimensions.height),t.ctx.fillStyle="rgba(0,0,0,0.5)",t.ctx.fill(),t.ctx.font="50px Papyrus",t.ctx.fillStyle="black",t.ctx.strokeStyle="red",t.ctx.fillText("F.",t.dimensions.width/2,t.dimensions.height/2),t.ctx.strokeText("F.",t.dimensions.width/2,t.dimensions.height/2),t.ctx.font="15px Papyrus",t.ctx.fillStyle="red",t.ctx.textAlign="center"}),1e3),setTimeout((function(){t.ctx.fillText("Press R to redeem yourself.",t.dimensions.width/2,t.dimensions.height/2+50)}),3e3)}},{key:"animate",value:function(){this.gameState===this.menu&&(requestAnimationFrame(this.animate.bind(this)),this.level.animateTitle(this.ctx,this.canvas)),this.gameState!==this.paused?this.gameState!==this.gameOver?this.gameState===this.running&&(requestAnimationFrame(this.animate.bind(this)),this.now=Date.now(),this.elapsed=this.now-this.then,this.elapsed>this.fpsInterval&&(this.then=this.now-this.elapsed%this.fpsInterval,this.ctx.clearRect(0,0,this.dimensions.width,this.dimensions.height),this.level.animate(this.ctx,this.canvas),this.player.animate(),this.demon.alive&&this.demon.animate(this.ctx,this.player.coordinates()),this.rogue.alive&&this.rogue.animate(this.ctx,this.player.coordinates()),this.registerAttacks1())):this.gameOverScreen():this.pauseScreen()}},{key:"start",value:function(t){this.fpsInterval=1e3/t,this.then=Date.now(),this.startTime=this.then,this.animate()}},{key:"collision",value:function(t,e,i,n){return!(t.x+i>e.x+e.width||t.x+t.width-n<e.x||t.y>e.y+e.height||t.y+t.height<e.y)}},{key:"registerAttacks1",value:function(){var t=this;this.collision(this.player,this.demon,30,60)&&((this.player.attacking&&"right"===this.player.direction&&this.demon.x+30>this.player.x||this.player.attacking&&"left"===this.player.direction&&this.demon.x<this.player.x)&&this.demon.beingAttacked(5),(this.demon.attacking&&"right"===this.demon.direction&&this.player.x>this.demon.x||this.demon.attacking&&"left"===this.demon.direction&&this.player.x-30<this.demon.x)&&this.demon.alive&&!this.demon.dying&&this.player.beingAttacked(5)),this.collision(this.player,this.rogue,0,0)&&(this.player.attacking&&"right"===this.player.direction&&this.rogue.x+30>this.player.x||this.player.attacking&&"left"===this.player.direction&&this.rogue.x<this.player.x)&&this.rogue.beingAttacked(30),this.rogue.shurikenArr.length>0&&this.collision(this.player,this.rogue.shurikenArr[0],0,0)&&this.rogue.alive&&!this.rogue.dying&&this.player.beingAttacked(2),this.player.dying&&setTimeout((function(){t.gameState=t.gameOver}),3e3)}}])&&b(e.prototype,i),t}();window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas1");t.width=800,t.height=500,new S(t)}))}()}();
//# sourceMappingURL=main.js.map