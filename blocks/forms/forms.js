(()=>{"use strict";var e,t={753:(e,t,a)=>{var r=a(540),n=a(338);const o=({formURL:e})=>{const[t,a]=(0,r.useState)();return(0,r.useEffect)((()=>{(async()=>{try{const t=await fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const r=await t.json(),n=await Promise.all(r?.data.map((async e=>{if(e.Options&&e.Options.endsWith(".json"))try{const t=await fetch(e.Options);if(t.ok){const a=await t.json(),r=a?.data?.map((e=>e.location)).join(",")||"";return{...e,Options:r}}}catch(e){}return e})));a(n)}catch(e){}})()}),[e]),r.createElement("div",{className:"react-form"},r.createElement("h3",null,"Calculate Your Fee"),r.createElement("div",{className:"react-form__sections"},t?.map(((e,t)=>r.createElement("div",{key:t,className:"react-form__section"},"submit"!=e.Type&&r.createElement("label",null,e.Label),r.createElement("div",{className:"react-form__section--options"},"select"===e.Type&&r.createElement("select",{name:e.Name},e.Options,e.Options.split(",").map(((e,t)=>r.createElement("option",{key:t,value:e},e)))),"text"===e.Type&&r.createElement(r.Fragment,null,r.createElement("input",{type:"text",placeholder:e.Placeholder,required:"True"==e.Mandatory}),r.createElement("span",null,"Min ",e.Min),r.createElement("span",null,"Max ",e.Max))),"submit"===e.Type&&r.createElement("button",null,e.Label))))))},c=document.querySelector(".form");if(c){let e=c.querySelector("form")?.dataset?.action;e||(e=c.querySelector(".button-container a").href);(0,n.H)(c).render(r.createElement(o,{formURL:e}))}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var c=1/0;for(p=0;p<e.length;p++){for(var[a,n,o]=e[p],l=!0,s=0;s<a.length;s++)(!1&o||c>=o)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(l=!1,o<c&&(c=o));if(l){e.splice(p--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[a,n,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={forms:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[c,l,s]=a,i=0;if(c.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var p=s(r)}for(t&&t(a);i<c.length;i++)o=c[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},a=self.webpackChunkreact_app=self.webpackChunkreact_app||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,["vendor"],(()=>r(753)));n=r.O(n)})();
