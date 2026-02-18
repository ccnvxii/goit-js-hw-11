import{S as u,i}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="54693688-3a10af049777c36308454ddb3",p="https://pixabay.com/api/";function m(n){const o=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${p}?${o}`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e.hits)}const l=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(e=>`
      <div class="photo-card">
        <a href="${e.largeImageURL}">
          <img 
            src="${e.webformatURL}" 
            alt="${e.tags}" 
            class="photo-img"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${e.likes}</p>
          <p class="info-item"><b>Views:</b> ${e.views}</p>
          <p class="info-item"><b>Comments:</b> ${e.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </div>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){l.innerHTML=""}function b(){f.style.display="flex"}function w(){f.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",function(n){n.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}g(),b(),m(o).then(e=>{e.length===0&&i.error({title:"Sorry, there are no images matching your search query. Please try again!"}),y(e)}).catch(e=>{i.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(e)}).finally(()=>w())});
//# sourceMappingURL=index.js.map
