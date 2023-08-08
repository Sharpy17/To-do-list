(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(81),i=e.n(o),r=e(645),a=e.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Bungee+Spice:regular);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Sen:regular,700,800);"]),a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nlabel {\n    display: inline-block;\n    width: 110px;\n    text-align: right;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 2fr 6fr;\n    font-family: Sen;\n    background-color: #52525b;\n    height: 100vh;\n    width: 100vw;\n}\n\ninput { \n    font-family: inherit;\n    font-size: 17px;\n    border: 3px solid black;\n    border-radius: 5px;\n    padding: 5px;\n    width: 150px;\n    outline: none;\n}\n\nbutton,\ndiv,\np,\nh1,\nh2 {\n    font-size: 22px;\n    color: orange;\n    font-weight: bold;\n}\n\nh1,\nh2 {\n    font-size: 38px;\n}\n\nbutton {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n    font-family: inherit;\n}\n\ninput[type=radio] {\n    width: 25px;\n    margin: 0;\n    padding: 0;\n    border: none;\n    border-radius: 4px;\n}\n\nbutton:hover {\n    color: blue;\n}\n\n.project-to-appear {\n    color: #a3e635;\n    text-align: left;\n}\n\n.input-styling { \n    font-family: inherit;\n    font-size: 17px;\n    border: 3px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    width: 250px;\n    outline: none;\n}\n\n\n.header {\n    grid-column: 1 / 3;\n    grid-row: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #27272a;\n    padding: 20px;\n    padding-inline: 50px;\n}\n\n.nav {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n.projects {\n    grid-column: 1;\n    grid-row: 3;\n}\n\n.nav,\n.projects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 25px;\n    padding: 10px;\n    background-color: #18181b;\n}\n\n.space {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    grid-column: 2;\n    grid-row: 2 / 4;\n    margin-top: 15px;\n    gap: 50px;\n}\n\n.container {\n    width: 1000px;       \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.date {\n    width: 130px;\n}\n\n.btns {\n    display: flex;\n    gap: 50px;\n}\n\n.add-button-styling {\n    background-color: greenyellow;\n}\n\n.cancel-button-styling {\n    background-color: red;\n}\n\n.add-button-styling,\n.cancel-button-styling {\n    color: black;\n    width: 75px;\n    margin: 5px;\n}\n\n.task {\n    display: block;\n    font-size: 22px;\n    color: black;\n}\n\n.description {\n    display: block;\n    font-size: 12px;\n    color: black;\n}\n\n\n.invisible {\n    display: none;\n}\n\n\n\n\n\n\n\n",""]);const c=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=e(r[a]);t[c].references--}for(var s=o(n,i),d=0;d<r.length;d++){var l=e(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var o={};(()=>{e.d(o,{AA:()=>y});var n=e(379),t=e.n(n),i=e(795),r=e.n(i),a=e(569),c=e.n(a),s=e(565),d=e.n(s),l=e(216),u=e.n(l),p=e(589),m=e.n(p),f=e(426),b={};function v(){function n(){!function(){const n=document.getElementsByClassName("container"),t=Array.from(n);title.classList.add("invisible"),addTask.classList.add("invisible"),t.forEach((n=>{n.classList.add("invisible")}))}();const n=document.createElement("div"),t=document.createElement("div"),e=document.createElement("input"),o=document.createElement("input"),i=document.createElement("label"),r=document.createElement("label"),a=document.createElement("div"),c=document.createElement("button"),s=document.createElement("button");function d(){const e=document.getElementsByClassName("container"),o=document.getElementsByClassName("radio"),i=Array.from(o),r=Array.from(e);n.remove(),t.remove(),a.remove(),title.classList.remove("invisible"),addTask.classList.remove("invisible"),r.forEach((n=>{n.classList.remove("invisible")})),i.forEach((n=>{n.addEventListener("click",(()=>{!function(n){r.find((t=>t.getAttribute("id")===n.id)).remove()}(n)}))}))}e.setAttribute("id",`${y}`),i.setAttribute("for",`${y}`),o.setAttribute("id",`${y+1}`),r.setAttribute("for",`${y+1}`),a.classList.add("btns"),c.classList.add("add-button-styling"),s.classList.add("cancel-button-styling"),n.classList.add("container"),t.classList.add("container"),e.classList.add("input-styling"),o.classList.add("input-styling"),space.append(n,t,a),n.append(i,e),t.append(r,o),a.append(c,s),i.textContent="Title",r.textContent="Description",c.textContent="Add",s.textContent="Cancel",c.addEventListener("click",(()=>{const n=document.createElement("label"),t=document.createElement("label"),i=document.createElement("input"),r=document.createElement("input"),a=document.createElement("div");t.classList.add("description"),r.classList.add("date"),a.classList.add("container"),i.classList.add("radio"),n.classList.add("task"),i.setAttribute("type","radio"),r.setAttribute("type","date"),t.setAttribute("for",`${y}`),i.setAttribute("id",`${y}`),i.setAttribute("name",`${y}`),n.setAttribute("for",`${y}`),a.setAttribute("id",`${y}`),r.setAttribute("id",`${y}`),space.append(a),a.append(i,n,t,r),n.textContent=e.value,""===o.value?t.remove():t.textContent=o.value,d(),y++})),s.onclick=d}const t=document.getElementById("0");if(console.log(t),null!==t)addTask.onclick=n;else{const t=document.querySelector("body");window.body=t;const e=document.createElement("div");window.space=e;const o=document.createElement("h1");window.title=o;const i=document.createElement("button");window.addTask=i,t.append(space),i.classList.add("add-task"),e.classList.add("space"),o.classList.add("title"),e.append(title,addTask),e.setAttribute("id","0"),o.textContent="Inbox",i.textContent="Add Task +",i.onclick=n}}b.styleTagTransform=m(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),t()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals,v();let y=0;const g=document.querySelector(".inbox"),x=document.querySelector(".today"),h=document.querySelector(".this-week");function E(n){let t=document.getElementById(`${n}`);for(let t=0;t<3;t++)if(t!==n){let n=document.getElementById(`${t}`);console.log(n),n.style.display="none"}t.style.display="flex"}document.querySelector(".add-project").addEventListener("click",(()=>{!function(){const n=document.querySelector(".projects"),t=document.createElement("input"),e=document.createElement("button"),o=document.createElement("button"),i=document.createElement("div");n.append(t,i),i.append(e,o),i.style.display="inline",e.classList.add("add-button-styling"),o.classList.add("cancel-button-styling"),e.textContent="Add",o.textContent="Cancel",e.addEventListener("click",(()=>{const e=document.createElement("button");e.classList.add("project-to-appear"),e.setAttribute("id",`${t.value}`),e.textContent=t.value,n.append(e),i.remove(),t.remove()}))}()})),g.addEventListener("click",(()=>{E(0),v()})),x.addEventListener("click",(()=>{E(1),function(){const n=document.getElementById("1");n.textContent="Today",n.setAttribute("id","1"),n.classList.add("space")}()})),h.addEventListener("click",(()=>{E(2),function(){const n=document.getElementById("2");n.textContent="This Week",n.setAttribute("id","2"),n.classList.add("space")}()}))})()})();