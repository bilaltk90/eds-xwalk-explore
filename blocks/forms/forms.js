(()=>{"use strict";var e,t={753:(e,t,r)=>{var a=r(540),n=r(338);const o=({formURL:e})=>{const[t,r]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{try{const t=await fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const a=await t.json();r(a)}catch(e){}})()}),[e]),a.createElement("div",{className:"react-form"},a.createElement("h3",null,"Calculate Your Fee"),a.createElement("div",{className:"react-form__sections"},t?.data?.map(((e,t)=>a.createElement("div",{key:t,className:"react-form__section"},a.createElement("label",null,e.Label),a.createElement("div",{className:"react-form__section--options"},"select"===e.Type&&a.createElement("select",{name:e.Name},e.Options.split(",").map(((e,t)=>a.createElement("option",{key:t,value:e},e)))),"text"===e.Type&&a.createElement("input",{type:"text",placeholder:e.Placeholder,required:"True"==e.Mandatory})),"submit"===e.Type&&a.createElement("button",null,e.Label))))))},c=document.querySelector(".form");if(c){const e=c.querySelector(".button-container a").href;(0,n.H)(c).render(a.createElement(o,{formURL:e}))}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var c=1/0;for(p=0;p<e.length;p++){for(var[r,n,o]=e[p],l=!0,s=0;s<r.length;s++)(!1&o||c>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(l=!1,o<c&&(c=o));if(l){e.splice(p--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,n,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={forms:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[c,l,s]=r,i=0;if(c.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var p=s(a)}for(t&&t(r);i<c.length;i++)o=c[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=self.webpackChunkreact_app=self.webpackChunkreact_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,["vendor"],(()=>a(753)));n=a.O(n)})();
