import{a as u,S as p,i}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="54693688-3a10af049777c36308454ddb3",m="https://pixabay.com/api/";async function y(n){try{return(await u.get(m,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const l=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const r=n.map(t=>`
      <li class="photo-card">
        <a href="${t.largeImageURL}">
          <img 
            src="${t.webformatURL}" 
            alt="${t.tags}" 
            class="photo-img"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${t.likes}</p>
          <p class="info-item"><b>Views:</b> ${t.views}</p>
          <p class="info-item"><b>Comments:</b> ${t.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function L(){f.style.display="flex"}function w(){f.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",function(n){n.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),y(r).then(t=>{t.length===0&&i.error({title:"Sorry, there are no images matching your search query. Please try again!"}),g(t)}).catch(t=>{i.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(t)}).finally(()=>w())});
//# sourceMappingURL=index.js.map
