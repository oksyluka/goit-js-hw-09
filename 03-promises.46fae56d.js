var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("iQIUW");const r=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),u=document.querySelector('[name="amount"]');function a(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();let o=+r.value;for(let e=1;e<=+u.value;e+=1){a(e,o).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=+l.value}}));
//# sourceMappingURL=03-promises.46fae56d.js.map