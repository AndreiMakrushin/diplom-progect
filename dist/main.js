(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),o=document.querySelector(".mobile-menu");document.addEventListener("click",(l=>{l.target.closest(".fancyboxModal")?(e.classList.toggle("dblock"),t.classList.toggle("dblock"),o.classList.remove("open")):l.target.closest(".modal-close")||l.target.closest(".modal-overlay")?(e.classList.remove("dblock"),t.classList.remove("dblock")):l.target.closest(".mob-menu-btn")?o.classList.toggle("open"):(l.target.closest(".close")||l.target.closest(".overlay")||l.target.closest("li"))&&o.classList.remove("open")}))})(),(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelectorAll(".item");let t=0;function o(){e[t].className="item",t=(t+1)%e.length,e[t].className="activeslide"}setInterval(o,2e3),o()})(),(()=>{const e=document.querySelector(".up");document.addEventListener("scroll",(()=>{window.pageYOffset>650?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(e=>{e.target}))})()})();