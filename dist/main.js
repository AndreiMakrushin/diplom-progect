(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay");document.addEventListener("click",(o=>{o.target.closest(".fancyboxModal")?(e.classList.toggle("dblock"),l.classList.toggle("dblock")):(o.target.closest(".modal-close")||o.target.closest(".modal-overlay"))&&(e.classList.remove("dblock"),l.classList.remove("dblock"))}))})()})();