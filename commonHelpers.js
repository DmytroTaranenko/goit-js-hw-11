import{i as n,S as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(r){return`<li class="gallery-item">
        <a href="${r.largeImageURL}" class="gallery-link" ></a>
        <img class="image-item" src="${r.webformatURL}" alt="${r.tags}" width="360" height="200" />
        <div class="wrap">
          <div>
            <h4 class="image-title">likes</h4>
            <p class="image-description">${r.likes}</p>
          </div>
          <div>
            <h4 class="image-title">Views</h4>
            <p class="image-description">${r.views}</p>
          </div>
          <div>
            <h4 class="image-title">Comments</h4>
            <p class="image-description">${r.comments}</p>
          </div>
          <div>
            <h4 class="image-title">Downloads</h4>
            <p class="image-description">${r.downloads}</p>
          </div>
        </div>
      </li>`}function g(r){return r.map(u).join("")}function p(r){const i="https://pixabay.com",a="/api",s=new URLSearchParams({key:"44483341-a81d0a92f1c16412fe8933c44",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}${a}?${s}`;return fetch(e).then(t=>t.json()).catch(t=>console.log(t))}const l=document.querySelector(".form"),c=document.querySelector(".gallery-list");l.addEventListener("submit",r=>{r.preventDefault();const a=new FormData(l).get("userInput").trim();if(a===""){n.warning({title:"Empty search",message:"Please enter a search query!"});return}p(a).then(s=>{if(s.hits.length!==0){const e=g(s.hits);c.innerHTML=e,d.refresh()}else n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=""}).catch(s=>{n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(s)}),l.reset()});const d=new m(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
