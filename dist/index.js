!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function p(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],p=t.base?i[0]+t.base:i[0],c=n[p]||0,d="".concat(p," ").concat(c);n[p]=c+1;var l=s(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:d,updater:b(u,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,g=0;function b(e,t){var n,o,r;if(t.singleton){var i=g++;n=f||(f=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=p(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=p(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-results-button,input[type='search']::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type='search']{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type='search']{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}.header{background-image:url(\"https://via.placeholder.com/300x300\");background-size:cover;background-position:center;background-repeat:no-repeat;position:relative;height:75vh;padding:0;z-index:-99}.header__navbar{padding:10px 0 0 0;line-height:0;font-size:0}@media (min-width: 992px){.header__navbar{margin:0 100px}}@media (min-width: 1440px){.header__navbar{margin:0 300px}}.header__hamburger{padding:5px 0 0 15px}.header__brand{padding:0 0 0 20px}@media (min-width: 1200px){.header__brand{position:absolute;left:50%;transform:translateX(-50%)}}.header__item{margin:0 10px}.header__link{font-size:15px;font-weight:500;color:#000}.header__link:hover{color:#000;cursor:pointer}.header__logo-mobile{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media (min-width: 992px){.header__logo-mobile{display:none}}.buttons{margin:0;padding:0 20px 0 0}.buttons__user,.buttons__bag{padding:0 3px 0 0;background:transparent;border:none}.buttons__user{padding:0 20px 0 0}.buttons .counter-wrapper{position:relative;width:16px;height:16px;margin:0;line-height:26px;background-color:#000;border-radius:50%}.buttons .counter-wrapper__counter{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;color:#fff;font-size:10px}.slider{padding:0;margin:0 auto;background-color:#263a49}.slider__row{margin:0}.slider__arrow{display:none;padding:0;background:transparent;border:transparent}@media (min-width: 1200px){.slider__arrow{display:block}}.slider__smooth-bar{height:4px;width:100px;margin:0 0 10px 15px;border-radius:2px;background-color:#fff;opacity:0.2}@media (min-width: 1200px){.slider__smooth-bar{display:none}}.images__wrapper{padding:0}.images__row{display:flex;flex-wrap:nowrap;overflow:hidden;margin:40px 0}.images__row .img{position:relative;width:241px;height:304px;margin:0 15px;padding:0}@media (min-width: 1200px){.images__row .img{width:268px;height:338px}}.images__row .img img{max-height:100%}.images__row .img__name,.images__row .img__price{position:absolute;font-size:12px}.images__row .img__name{bottom:10%;left:6%}.images__row .img__price{padding:5px 0 0 0;bottom:4%;left:5%}.arrow-to-top{display:none}@media (min-width: 992px){.arrow-to-top{position:absolute;top:1860px;right:45px;height:48px;width:48px;border-radius:50%;box-shadow:0px 5px 30px 0 rgba(0,0,0,0.1);cursor:pointer;border:none;background-color:transparent}}@media (min-width: 992px){.arrow-to-top__content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(90deg);width:20px;height:3px;background-color:#375973}}@media (min-width: 992px){.arrow-to-top::before,.arrow-to-top::after{content:'';position:absolute;top:50%;left:50%;width:15px;height:3px;background-color:#375973}}@media (min-width: 992px){.arrow-to-top::before{transform:translate(-25%, -7.5px) rotate(60deg)}}@media (min-width: 992px){.arrow-to-top::after{transform:translate(-75%, -7.5px) rotate(-60deg)}}.products{margin:0 auto}.products__product-cart{margin:0 0 30px 0}.products__title{text-align:center;padding:60px 0;margin:0}.products__btn-all-products{display:flex;justify-content:center;padding:15px 30px;margin:15px auto 30px;background:transparent;border:2px solid #000}.product-cart__img{height:208px;margin:0 0 15px 0;background-color:#ddd}@media (min-width: 992px){.product-cart__img{height:390px}}.product-cart__special-offer{margin:0 0 12px 0;text-align:left;text-transform:uppercase;font-weight:800;font-size:10px}.product-cart__name{font-size:13px;margin:0 0 8px 0;text-align:left}.product-cart__price{font-size:13px;font-weight:800}.product-cart__btn{display:flex;width:100%;justify-content:space-between;align-items:center;font-size:13px;font-weight:bold;text-transform:uppercase;padding:0;border:none;background-color:transparent}.news{height:282px;background-color:#ddd;padding:30px;margin:0 0 15px 0}@media (min-width: 1200px){.news{height:310px}}.news--big{height:398px}@media (min-width: 1200px){.news--big{height:630px}}.news--small{height:245px}@media (min-width: 1200px){.news--small{height:310px}}.news__link{font-size:13px;font-weight:600;text-transform:capitalize}.newsletter{max-width:650px;margin:50px auto}@media (min-width: 992px){.newsletter{margin:100px auto}}.newsletter__title{margin:0 0 30px 0;font-size:16px;font-weight:800;text-align:center;text-transform:uppercase}@media (min-width: 992px){.newsletter__title{font-size:30px}}.newsletter__subtitle{font-size:13px}@media (min-width: 992px){.newsletter__subtitle{font-size:16px}}.newsletter__subtitle--spam{margin:14px 0 0 0}.newsletter__form{display:flex;margin:40px 0 0 0;padding:0 0 15px 0;border-bottom:2px solid #000}.newsletter__input{flex-grow:1;font-size:13px;border:none;background-color:transparent}.newsletter__input::placeholder{color:rgba(50,50,50,0.5)}.newsletter__button{font-size:13px;border:none;background-color:transparent}.footer{margin:40px 0 19px}.footer__icon--marign{margin:0 30px 0 0}.footer__icons-list{margin:0 0 34px 0}.footer__links-list{display:flex;justify-content:space-between;margin:0 0 34px 0}@media (min-width: 992px){.footer__links-list{display:block}}.footer__link{font-size:12px;font-weight:bold}@media (min-width: 992px){.footer__link{margin:0 6px 0 0}}.footer__options{display:flex;justify-content:space-between;margin:0 0 35px 0}@media (min-width: 992px){.footer__options{display:block}}.footer__copyright{font-size:13px;font-weight:500;margin:21px 0 23px 0}.footer__select{border:none;font-size:13px;text-transform:uppercase}.footer__select-label{margin-bottom:0;font-size:13px;font-weight:500;text-transform:capitalize}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,p;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&r[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),t.push(p))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o=[{id:1,img:"",specialOffer:{name:"new",picture:"./assets/kz-bolt-line.png"},name:"Azure Tote",price:"$300.00"},{id:2,img:"",specialOffer:{name:"new",picture:"./assets/kz-bolt-line.png"},name:"Shirt in organic cotton",price:"$30.00"},{id:3,img:"",specialOffer:{name:"new",picture:"./assets/kz-bolt-line.png"},name:"Cardigan",price:"$280.00"},{id:4,img:"",specialOffer:{name:"new",picture:"./assets/kz-bolt-line.png"},name:"T-shirt",price:"$3.00"}];window.addEventListener("DOMContentLoaded",(function(){var e,t,n;e=document.querySelector(".products-container"),(t=document.querySelector(".products__btn-all-products")).addEventListener("click",(function(n){n.preventDefault();for(var r=0;r<o.length;r++){var i=document.createElement("div");i.classList.add("col-6"),i.classList.add("col-lg-4"),i.classList.add("col-xl-3"),i.innerHTML='<div class="product-cart products__product-cart">\n              <div class="product-cart__img"></div>\n              <p class="product-cart__special-offer">\n                <span>\n                  <img src="./assets/kz-bolt-line.png" alt="" />\n                </span>\n                '.concat(o[r].specialOffer.name,'\n              </p>\n              <p class="product-cart__name">').concat(o[r].name,'</p>\n              <p class="product-cart__price">').concat(o[r].price,'</p>\n              <button class="product-cart__btn">\n                <span>Select option</span>\n                <img src="./assets/kz-heart.png" alt="" />\n              </button>\n            </div>'),e.appendChild(i)}t.style.display="none"})),function(){var e=document.querySelector(".footer__year"),t=(new Date).getFullYear();e.textContent="".concat(t)}(),n=document.querySelector(".arrow-to-top"),document.addEventListener("scroll",(function(){window.scrollY>=screen.availHeight/2?n.style.display="block":n.style.display="none"})),n.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}))}]);