!function(){"use strict";setTimeout((function(){document.querySelector("body").classList.add("body_visible")}),0),function(){const t=document.querySelector(".light-mode-btn"),e=document.querySelector(".main");function o(){t.classList.add("light-mode-btn--active"),e.classList.add("light")}function n(){t.classList.remove("light-mode-btn--active"),e.classList.remove("light")}window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&o(),"dark"===localStorage.getItem("darkMode")?n():"light"===localStorage.getItem("darkMode")&&o(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{"dark"==(t.matches?"dark":"light")?(n(),localStorage.setItem("darkMode","dark")):(o(),localStorage.setItem("darkMode","light"))})),t.addEventListener("click",(()=>{t.classList.toggle("light-mode-btn--active"),e.classList.toggle("light")?localStorage.setItem("darkMode","light"):localStorage.setItem("darkMode","dark")}))}(),function(){const t=document.querySelector(".quote__inner"),e=document.querySelector(".quote__container"),o=document.getElementById("quote"),n=document.getElementById("author"),a=document.getElementById("btn"),c=document.getElementById("preloader"),r=document.querySelector(".lang-btn");let d,i="ru";function l(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function s(){!async function(){const a=`./files/json/quote-${i}.json`;try{const t=await fetch(a);if(!t.ok)throw new Error("Something went wrong...");const r=await t.json(),d=l(0,r.length-1);o.innerText=r[d].text,n.innerText=r[d].author,c.remove(),e.style.display="block"}catch{t.textContent=""}}();const a=(d=l(1,20),String(d).padStart(2,"0")),r=new Image;r.src=`./img/jpg/${a}.jpg`,r.addEventListener("load",(()=>{t.style.backgroundImage=`url(${r.src})`}))}a.addEventListener("click",s),r.addEventListener("click",(()=>{r.classList.contains("lang-btn--active")?(r.classList.remove("lang-btn--active"),i="ru"):(r.classList.add("lang-btn--active"),i="en"),s()})),window.addEventListener("load",s)}()}();