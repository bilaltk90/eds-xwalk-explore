(()=>{"use strict";var e,r={753:(e,r,t)=>{var a=t(540),n=t(338);const o=e=>{const[r,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const r=await fetch(e.formURL,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);const a=await r.json();t(a)}catch(e){}})()}),[e.formURL]),a.createElement("div",{className:"react-form"},a.createElement("h1",null,"React Form"),a.createElement("p",null,e.formURL),console.log("formdata",r),a.createElement("p",null,r?.total),a.createElement("p",null,r?.total),a.createElement("p",null,r?.total))},c=document.querySelector(".form");if(c){const e=c.querySelector(".button-container a").href;(0,n.H)(c).render(a.createElement(o,{formURL:e}))}}},t={};function a(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(r,t,n,o)=>{if(!t){var c=1/0;for(p=0;p<e.length;p++){for(var[t,n,o]=e[p],l=!0,s=0;s<t.length;s++)(!1&o||c>=o)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(l=!1,o<c&&(c=o));if(l){e.splice(p--,1);var f=n();void 0!==f&&(r=f)}}return r}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[t,n,o]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={forms:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[c,l,s]=t,f=0;if(c.some((r=>0!==e[r]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var p=s(a)}for(r&&r(t);f<c.length;f++)o=c[f],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},t=self.webpackChunkreact_app=self.webpackChunkreact_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=a.O(void 0,["vendor"],(()=>a(753)));n=a.O(n)})();
