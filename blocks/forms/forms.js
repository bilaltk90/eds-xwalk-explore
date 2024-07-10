(()=>{"use strict";var e,t={753:(e,t,a)=>{var r=a(540),n=a(338);const o=({formURL:e})=>{const[t,a]=(0,r.useState)(),[n,o]=(0,r.useState)({}),[c,s]=(0,r.useState)({}),i=e=>{const{name:a,value:r}=e.target;let i=e.target.getAttribute("data-min"),l=e.target.getAttribute("data-max"),m=e.target.getAttribute("data-description");o({...n,[a]:r}),i&&((e,a,r,n,o)=>{const i={...c},l=t.find((t=>t.Name===e)),m=Number(a),u=Number(r),p=Number(n);l&&!a?i[e]="Enter a value":m<u||m>p?(o=o.replace("${Min}",r).replace("${Max}",n),i[e]=o):delete i[e],s(i)})(a,r,i,l,m)};(0,r.useEffect)((()=>{c.cost||o({...n,borrow:80*n.cost/100})}),[n.cost]),(0,r.useEffect)((()=>{(async()=>{try{const t=await fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const r=await t.json(),n=await Promise.all(r?.data.map((async e=>{if(e.Options&&e.Options.endsWith(".json"))try{const t=await fetch(e.Options);if(t.ok){const a=await t.json(),r=a?.data?.map((e=>e.location)).join(",")||"";return{...e,Options:r}}}catch(e){}return e})));a(n)}catch(e){}})()}),[e]),(0,r.useEffect)((()=>{l("purpos",0),l("property-type",1)}),[t]);const l=(e,t)=>{const a=document.querySelector(`select[name="${e}"]`),r=document.querySelectorAll(".react-form__section--options");a&&(Array.from(a.options).forEach((e=>{const a=document.createElement("button");a.textContent=e.textContent,a.value=e.value,a.name=e.name,a.className="button",a.addEventListener("click",(function(){[...r[t].querySelectorAll(".button")].map((e=>{e.classList.remove("selected")})),this.classList.add("selected"),i()})),r[t].appendChild(a)})),a.remove())},m=()=>{var e={data:n},t=new FormData;t.append("json",JSON.stringify(e)),fetch("/test/receiver/",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){}))};return r.createElement("div",{className:"react-form"},r.createElement("h3",null,"Calcula ti cuota"),r.createElement("div",{className:"react-form__sections"},t?.map(((e,t)=>r.createElement("div",{key:t,className:"react-form__section"},"submit"!=e.Type&&r.createElement("label",null,e.Label),r.createElement("div",{className:"react-form__section--options"},"select"===e.Type&&r.createElement("select",{onChange:i,name:e.Name},e.Options.split(",").map(((e,t)=>r.createElement("option",{key:t,value:e},e)))),"text"===e.Type&&r.createElement(r.Fragment,null,r.createElement("input",{value:n[e.Name]||"",onChange:i,name:e.Name,type:"text",placeholder:e.Placeholder,"data-min":e.Min,"data-max":e.Max,"data-description":e.Description,required:"True"==e.Mandatory}),r.createElement("div",{className:"message"},c[e.Name]&&r.createElement("span",{className:"error"},c[e.Name]),!c[e.Name]&&r.createElement(r.Fragment,null,r.createElement("span",{className:"message-left"},"Min ",e.MinMaxPrefix," ",e.Min," ",e.MinMaxSuffix),r.createElement("span",{className:"message-right"},"Max ",e.MinMaxPrefix," ",e.Max," ",e.MinMaxSuffix))))),"submit"===e.Type&&r.createElement("button",{onClick:m},e.Label))))))},c=document.querySelector(".form");if(c){let e=c.querySelector("form")?.dataset?.action;e||(e=c.querySelector(".button-container a").href);(0,n.H)(c).render(r.createElement(o,{formURL:e}))}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,n,o]=e[m],s=!0,i=0;i<a.length;i++)(!1&o||c>=o)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(s=!1,o<c&&(c=o));if(s){e.splice(m--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,n,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={forms:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[c,s,i]=a,l=0;if(c.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(i)var m=i(r)}for(t&&t(a);l<c.length;l++)o=c[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},a=self.webpackChunkreact_app=self.webpackChunkreact_app||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,["vendor"],(()=>r(753)));n=r.O(n)})();