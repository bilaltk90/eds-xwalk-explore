import '../../scripts/vendor.js';
(()=>{"use strict";var e,t={753:(e,t,a)=>{var r=a(540),n=a(338);const o=({formURL:e})=>{const[t,a]=(0,r.useState)(),[n,o]=(0,r.useState)({}),[c,s]=(0,r.useState)({}),l=e=>{const{name:a,value:r}=e.target;let n=e.target.getAttribute("data-min"),l=e.target.getAttribute("data-max"),i=e.target.getAttribute("data-description");o((e=>({...e,[a]:r}))),n&&((e,a,r,n,o)=>{const l={...c},i=t.find((t=>t.Name===e)),m=Number(a),u=Number(r),p=Number(n);i&&!a?l[e]="Enter a value":m<u||m>p?(o=o.replace("${Min}",r).replace("${Max}",n),l[e]=o):delete l[e],s(l)})(a,r,n,l,i)};(0,r.useEffect)((()=>{c.cost||o((e=>({...e,borrow:80*e.cost/100})))}),[n.cost]),(0,r.useEffect)((()=>{(async()=>{try{const t=await fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const r=await t.json(),n=await Promise.all(r?.data.map((async e=>{if(e.Options&&e.Options.endsWith(".json"))try{const t=await fetch(e.Options);if(t.ok){const a=await t.json(),r=a?.data?.map((e=>e.location)).join(",")||"";return{...e,Options:r}}}catch(e){}return e})));a(n)}catch(e){}})()}),[e]),(0,r.useEffect)((()=>{document.querySelector(".react-form__section--options .button")||(i("purpos",0),i("property-type",1))}),[t]);const i=(e,t)=>{const a=document.querySelector(`select[name="${e}"]`),r=document.querySelectorAll(".react-form__section--options");a&&(Array.from(a.options).forEach((e=>{const n=document.createElement("button");n.textContent=e.textContent,n.value=e.value,n.name=a.name,n.className="button",n.addEventListener("click",(function(e){e.preventDefault(),[...r[t].querySelectorAll(".button")].map((e=>{e.classList.remove("selected")})),this.classList.add("selected"),l(e)})),r[t].appendChild(n)})),a.remove())},m=()=>{if(6==Object.keys(n).length){var e={...n},t=new FormData;t.append("json",JSON.stringify(e)),fetch("/test/receiver/",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){}))}else alert("Please fill all fields of the form")};return r.createElement("div",{className:"react-form"},r.createElement("h3",null,"Calcula ti cuota"),r.createElement("div",{className:"react-form__sections"},t?.map(((e,t)=>r.createElement("div",{key:t,className:"react-form__section"},"submit"!=e.Type&&r.createElement("label",null,e.Label),r.createElement("div",{className:"react-form__section--options"},"select"===e.Type&&r.createElement("select",{onChange:l,name:e.Name},e.Options.split(",").map(((e,t)=>r.createElement("option",{key:t,value:e},e)))),"text"===e.Type&&r.createElement(r.Fragment,null,r.createElement("input",{value:n[e.Name]||"",onChange:l,name:e.Name,type:"text",placeholder:e.Placeholder,"data-min":e.Min,"data-max":e.Max,"data-description":e.Description,required:"True"==e.Mandatory}),r.createElement("div",{className:"message"},c[e.Name]&&r.createElement("span",{className:"error"},c[e.Name]),!c[e.Name]&&r.createElement(r.Fragment,null,r.createElement("span",{className:"message-left"},"Min ",e.MinMaxPrefix," ",e.Min," ",e.MinMaxSuffix),r.createElement("span",{className:"message-right"},"Max ",e.MinMaxPrefix," ",e.Max," ",e.MinMaxSuffix))))),"submit"===e.Type&&r.createElement("button",{onClick:m},e.Label))))))},c=document.querySelector(".form");if(c){let e=c.querySelector("form")?.dataset?.action;e||(e=c.querySelector(".button-container a").href);(0,n.H)(c).render(r.createElement(o,{formURL:e}))}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,n,o]=e[m],s=!0,l=0;l<a.length;l++)(!1&o||c>=o)&&Object.keys(r.O).every((e=>r.O[e](a[l])))?a.splice(l--,1):(s=!1,o<c&&(c=o));if(s){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,n,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={forms:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[c,s,l]=a,i=0;if(c.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var m=l(r)}for(t&&t(a);i<c.length;i++)o=c[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},a=self.webpackChunkreact_app=self.webpackChunkreact_app||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,["vendor"],(()=>r(753)));n=r.O(n)})();
