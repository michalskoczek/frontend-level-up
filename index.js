!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,p="".concat(s," ").concat(l);n[s]=l+1;var d=c(p),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:p,updater:b(u,t),references:1}),r.push(p)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function b(e,t){var n,r,o;if(t.singleton){var i=g++;n=m||(m=l(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var p=c(n[l]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}button:focus{outline:0 !important}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-results-button,input[type='search']::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type='search']{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type='search']{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}.error{display:none;position:fixed;top:50vh;left:50vw;transform:translate(-50%, -50%);box-shadow:0 0 10px 2px black;background-color:#fff;z-index:99}.error__content{margin:0 auto;padding:10px 20px;font-size:30px;text-align:center;color:red}.spinner{display:none;position:absolute;top:110%;left:50%;width:100%;height:100%;transform:translateX(-50%);align-items:center;justify-content:center;z-index:3;background:white}.spinner__content{width:60px;height:60px;background:#263a49;animation:rotateplane 1.2s infinite ease-in-out}.spinner.spinner--visible{display:flex}@keyframes rotateplane{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180deg) rotateY(0deg)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-180deg)}}.arrow-to-top{display:none;position:fixed;bottom:15px;right:15px;height:48px;width:48px;border-radius:50%;box-shadow:0px 0px 10px 3px rgba(0,0,0,0.1);cursor:pointer;border:none;background-color:#fff;z-index:99}.arrow-to-top__content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(90deg);width:20px;height:3px;background-color:#375973}.arrow-to-top::before,.arrow-to-top::after{content:'';position:absolute;top:50%;left:50%;width:15px;height:3px;background-color:#375973}.arrow-to-top::before{transform:translate(-25%, -7.5px) rotate(60deg)}.arrow-to-top::after{transform:translate(-75%, -7.5px) rotate(-60deg)}.slider{padding:0;margin:0 auto;background-color:#263a49}.slider__row{margin:0}.slider__arrow{display:none;padding:0;background:transparent;border:transparent}@media (min-width: 1200px){.slider__arrow{display:block}}.slider__smooth-bar{height:4px;width:100px;margin:0 0 10px 15px;border-radius:2px;background-color:#fff;opacity:0.2}@media (min-width: 1200px){.slider__smooth-bar{display:none}}.images__wrapper{padding:0}.images__row{display:flex;flex-wrap:nowrap;overflow:hidden;margin:40px 0}.images__row .img{position:relative;width:241px;height:304px;margin:0 15px;padding:0}@media (min-width: 1200px){.images__row .img{width:268px;height:338px}}.images__row .img img{max-height:100%}.images__row .img__name,.images__row .img__price{position:absolute;font-size:12px}.images__row .img__name{bottom:10%;left:6%}.images__row .img__price{padding:5px 0 0 0;bottom:4%;left:5%}.header{background-image:url(\"https://via.placeholder.com/300x300\");background-size:cover;background-position:center;background-repeat:no-repeat;position:relative;height:75vh;padding:0;z-index:-99}.header__navbar{padding:10px 0 0 0;line-height:0;font-size:0}@media (min-width: 992px){.header__navbar{margin:0 100px}}@media (min-width: 1440px){.header__navbar{margin:0 300px}}.header__hamburger{padding:5px 0 0 15px}.header__brand{padding:0 0 0 20px}@media (min-width: 1200px){.header__brand{position:absolute;left:50%;transform:translateX(-50%)}}.header__item{margin:0 10px}.header__link{font-size:15px;font-weight:500;color:#000}.header__link:hover{color:#000;cursor:pointer}.header__logo-mobile{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media (min-width: 992px){.header__logo-mobile{display:none}}.buttons{margin:0;padding:0 20px 0 0}.buttons__user,.buttons__bag{padding:0 3px 0 0;background:transparent;border:none}.buttons__user{padding:0 20px 0 0}.buttons .counter-wrapper{position:relative;width:16px;height:16px;margin:0;line-height:26px;background-color:#000;border-radius:50%}.buttons .counter-wrapper__counter{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;color:#fff;font-size:10px}.products{margin:0 auto}.products__product-cart{margin:0 0 30px 0}.products__title{text-align:center;padding:60px 0;margin:0;font-size:20px}.products__btn-all-products{display:flex;justify-content:center;padding:15px 30px;margin:15px auto 30px;background:transparent;border:2px solid #000}.product-cart__img{position:relative;height:208px;margin:0 0 15px 0;background-color:#ddd}@media (min-width: 992px){.product-cart__img{height:390px}}.product-cart__img img{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-height:100%;max-width:100%}.product-cart__special-offer{margin:0 0 12px 0;text-align:left;text-transform:uppercase;font-weight:800;font-size:10px}.product-cart__name{font-size:13px;margin:0 0 8px 0;text-align:left}.product-cart__price{font-size:13px;font-weight:800}.product-cart__btn{display:flex;width:100%;justify-content:space-between;align-items:center;font-size:13px;font-weight:bold;text-transform:uppercase;padding:0;border:none;background-color:transparent}.news{position:relative;height:282px;border:2px solid #ddd;padding:30px;margin:0 0 15px 0;overflow:hidden}.news img{position:absolute;max-width:100%;top:50%;left:50%;transform:translate(-50%, -50%);z-index:-1}@media (min-width: 1200px){.news{height:310px}}.news--big{height:398px}@media (min-width: 1200px){.news--big{height:630px}}.news--small{height:245px}@media (min-width: 1200px){.news--small{height:310px}}.news__link{font-size:13px;font-weight:600;text-transform:capitalize}.newsletter{max-width:650px;margin:50px auto}@media (min-width: 992px){.newsletter{margin:100px auto}}.newsletter__title{margin:0 0 30px 0;font-size:16px;font-weight:800;text-align:center;text-transform:uppercase}@media (min-width: 992px){.newsletter__title{font-size:30px}}.newsletter__subtitle{font-size:13px}@media (min-width: 992px){.newsletter__subtitle{font-size:16px}}.newsletter__subtitle--spam{margin:14px 0 0 0}.newsletter__form{display:flex;margin:40px 0 0 0;padding:0 0 15px 0;border-bottom:2px solid #000}.newsletter__input{flex-grow:1;font-size:13px;border:none;background-color:transparent}.newsletter__input::placeholder{color:rgba(50,50,50,0.5)}.newsletter__button{font-size:13px;border:none;background-color:transparent}.footer{margin:40px 0 19px}.footer__icon--marign{margin:0 30px 0 0}.footer__icons-list{margin:0 0 34px 0}.footer__links-list{display:flex;justify-content:space-between;margin:0 0 34px 0}@media (min-width: 992px){.footer__links-list{display:block}}.footer__link{font-size:12px;font-weight:bold}@media (min-width: 992px){.footer__link{margin:0 6px 0 0}}.footer__options{display:flex;justify-content:space-between;margin:0 0 35px 0}@media (min-width: 992px){.footer__options{display:block}}.footer__copyright{font-size:13px;font-weight:500;margin:21px 0 23px 0}.footer__select{border:none;font-size:13px;text-transform:uppercase}.footer__select-label{margin-bottom:0;font-size:13px;font-weight:500;text-transform:capitalize}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){document.querySelector(".error").style.display="block"},o=function(){return fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",{method:"GET",headers:{"x-rapidapi-host":"asos2.p.rapidapi.com","x-rapidapi-key":"76343e9babmsh83316836b7d44fap1ce83ejsn9106d24b61a1"}}).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(e){var t=[];return e.products.forEach((function(e){t.push({name:e.name,imageUrl:e.imageUrl,price:e.price.current.text})})),t})).catch((function(){r()}))};function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e,t,n){t.style.visibility="hidden",n.style.visibility="hidden",e.classList.add("spinner--visible")},s=function(e,t,n){e.classList.remove("spinner--visible"),t.style.visibility="visible",n.style.visibility="visible"};function l(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".spinner"),m=document.querySelector(".products"),g=document.querySelector(".special-offer-container"),b=function(){var e;c(f,m,g),o().then((function(e){!function(e){for(var t=d(document.querySelectorAll(".img__content")),n=d(document.querySelectorAll(".img__name")),r=d(document.querySelectorAll(".img__price")),o=0;o<t.length;o++)t[o].src="http://".concat(e[o].imageUrl),n[o].textContent="".concat(e[o].name),r[o].textContent="".concat(e[o].price)}(e.slice(5,10)),function(e){var t=document.querySelector(".products-container"),n=document.querySelector(".products__btn-all-products");n.addEventListener("click",(function(r){r.preventDefault();for(var o=0;o<e.length;o++){var i=document.createElement("div");i.classList.add("col-6"),i.classList.add("col-lg-4"),i.classList.add("col-xl-3"),i.innerHTML='<div class="product-cart products__product-cart">\n              <div class="product-cart__img">\n              <img src="http://'.concat(e[o].imageUrl,'">\n              </div>\n              <p class="product-cart__special-offer">\n                <span>\n                  <img src="./assets/kz-bolt-line.png" alt="" />\n                </span>\n                NEW\n              </p>\n              <p class="product-cart__name">').concat(e[o].name,'</p>\n              <p class="product-cart__price">').concat(e[o].price,'</p>\n              <button class="product-cart__btn">\n                <span>Select option</span>\n                <img src="./assets/kz-heart.png" alt="" />\n              </button>\n            </div>'),t.appendChild(i)}n.style.display="none"}))}(e.slice(0,8)),function(e){for(var t=i(document.querySelectorAll(".product-cart__img")),n=i(document.querySelectorAll(".product-cart__name")),r=i(document.querySelectorAll(".product-cart__price")),o=[],a=0;a<t.length;a++)o.push(document.createElement("img")),o[a].src="http://".concat(e[a].imageUrl);for(var c=0;c<e.length;c++)t[c].appendChild(o[c]),n[c].textContent="".concat(e[c].name),r[c].textContent="".concat(e[c].price)}(e.slice(16,24)),function(e){for(var t=l(document.querySelectorAll(".news-container")),n=[],r=0;r<t.length;r++)n.push(document.createElement("img")),n[r].src="http://".concat(e[r].imageUrl);for(var o=0;o<e.length;o++)t[o].appendChild(n[o])}(e.slice(27,31))})).catch((function(e){r()})).finally((function(){s(f,m,g)})),function(){var e=document.querySelector(".footer__year"),t=(new Date).getFullYear();e.textContent="".concat(t)}(),e=document.querySelector(".arrow-to-top"),document.addEventListener("scroll",(function(){window.scrollY>=screen.availHeight/2?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))};window.addEventListener("DOMContentLoaded",(function(){b()}))}]);