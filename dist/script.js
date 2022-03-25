(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function a(s){let c=(s-o)/n;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(a)}))},t=(t,n,o)=>{const a=document.querySelector("body"),s=document.querySelector(n),c=document.querySelector(".overlay");c.style.opacity=0,s.style.transform="translate(-50%, -50%) scale(0)",a.addEventListener("click",(n=>{n.target.matches(t)&&(n.preventDefault(),c.style.display="block",s.style.display="block",e({duration:500,timing:e=>e,draw(e){c.style.opacity=e,s.style.transform=`translate(-50%, -50%) scale(${e})`}})),(n.target.matches(o)||n.target.classList.contains("overlay"))&&(n.preventDefault(),c.style.display="none",s.style.display="none")}))},n=(t,n,o,a,s)=>{const c=document.getElementById(t),r=c.querySelectorAll(n);let l=s,i=0;const d=()=>{r.forEach(((t,n)=>{t.style.display="none",t.style.opacity=0,n>=i&&n<l&&(t.style.display="block",e({duration:500,timing:e=>e,draw(e){t.style.opacity=e}}))}))};c.addEventListener("click",(e=>{e.target.matches(o)&&l<r.length&&(i+=s,l+=s,d()),e.target.matches(a)&&i>0&&(i-=s,l-=s,d())})),window.innerWidth<576&&(l=s=1),d()};t("#header .btn",".header-modal",".header-modal__close"),t(".service-button .btn",".services-modal",".services-modal__close"),n("benefits",".benefits__item",".benefits__arrow--right img",".benefits__arrow--left img",3),n("services",".service-block",".services__arrow--right img",".services__arrow--left img",2),(e=>{const t=document.querySelectorAll(".countdown");let n;const o=()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemainig:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60)%24,minutes:Math.floor(t/60)%60,seconds:Math.floor(t%60)}},a=e=>e>=0&&e<10?"0"+e:e;n=setInterval((()=>{t.forEach((e=>{const t=e.querySelector(".count_1 span"),s=e.querySelector(".count_2 span"),c=e.querySelector(".count_3 span"),r=e.querySelector(".count_4 span");if(o().timeRemainig<=0)return t.textContent="00",s.textContent="00",c.textContent="00",r.textContent="00",void clearInterval(n);t.textContent=a(o().days),s.textContent=a(o().hours),c.textContent=a(o().minutes),r.textContent=a(o().seconds)}))}),1e3)})("30 March 2022"),(()=>{const t=document.getElementById("documents"),n=document.querySelector(".overlay");t.addEventListener("click",(t=>{t.target.classList.contains("document-overlay")&&(t.preventDefault(),(t=>{n.innerHTML="";const o=t.getAttribute("href"),a=document.createElement("div"),s=document.createElement("img");s.setAttribute("src",o),s.style.maxHeight="100%",a.append(s),a.style.transform="scale(0)",n.append(a),n.style.cssText="\n         display: flex;\n         justify-content: center;\n         align-item: center;\n      ",e({duration:500,timing:e=>e,draw(e){n.style.opacity=e,a.style.transform=`scale(${e})`}})})(t.target.parentNode))})),t.addEventListener("mouseover",(t=>{t.target.classList.contains("document-overlay")&&e({duration:200,timing:e=>e,draw(e){t.target.style.opacity=e}})})),t.addEventListener("mouseout",(e=>{e.target.classList.contains("document-overlay")&&(e.target.style.opacity=0)}))})(),(()=>{const t=document.getElementById("offer"),n=document.querySelector(".smooth-scroll");n.style.display="none",n.style.opacity="0",window.addEventListener("scroll",(()=>{const o=t.offsetTop+t.offsetHeight;n.style.display="none",window.scrollY>=o&&(n.style.display="block",e({duration:200,timing:e=>e,draw(e){n.style.opacity=e}}))})),n.addEventListener("click",(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})}))})(),document.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(()=>{"fio"===e.getAttribute("name")&&(e.value=e.value.replace(/[^А-Яа-яA-Za-z\s]/g,"")),"phone"===e.getAttribute("name")&&(e.value=e.value.replace(/[^\+\d]/g,"").slice(0,16)),"calc-input"===e.getAttribute("name")&&(e.value=e.value.replace(/[^\d]/g,""))}))})),((e=100)=>{const t=document.getElementById("calc"),n=document.querySelector('select[name="calc-type"]'),o=document.querySelector('select[name="calc-type-material"]'),a=document.querySelector('input[name="calc-input"]'),s=document.querySelector('input[name="calc-total"]');t&&t.addEventListener("change",(t=>{s.value=(()=>{const t=+n.options[n.selectedIndex].value,s=+o.options[o.selectedIndex].value,c=+a.value;let r=1;if(a.value&&a.value>1&&(r=c),n.value&&o.value)return e*t*s*r})()}))})(100),(({element:e=[]})=>{const t=document.querySelectorAll("form");t.forEach((t=>{t.addEventListener("submit",(n=>{n.preventDefault(),(t=>{const n=t.querySelectorAll("input"),o=new FormData(t),a={};var s;o.forEach(((e,t)=>{a[t]=e})),e.forEach((e=>{const t=document.getElementById(e.id);t&&("block"===e.type&&(a[t.id]=t.textContent),"input"===e.type&&(a[e.id]=t.value))})),(e=>{let t=!0;return e.forEach((e=>{e.classList.add("success"),"hidden"!==e.getAttribute("type")&&""===e.value.trim()&&e.classList.remove("success"),e.classList.contains("success")||(t=!1)})),t})(n)&&(s=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.forEach((e=>e.value=""))}))})(t)}))}))})({element:[{type:"input",id:"calc-total"}]})})();