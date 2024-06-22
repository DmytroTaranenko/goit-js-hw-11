import{i as n,S as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(t){return`<li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link" >
        <img class="image-item" src="${t.webformatURL}" alt="${t.tags}" width="360" height="200" />
        </a>
        <div class="wrap">
          <div>
            <h4 class="image-title">likes</h4>
            <p class="image-description">${t.likes}</p>
          </div>
          <div>
            <h4 class="image-title">Views</h4>
            <p class="image-description">${t.views}</p>
          </div>
          <div>
            <h4 class="image-title">Comments</h4>
            <p class="image-description">${t.comments}</p>
          </div>
          <div>
            <h4 class="image-title">Downloads</h4>
            <p class="image-description">${t.downloads}</p>
          </div>
        </div>
      </li>`}function g(t){return t.map(u).join("")}function f(t){t.classList.remove("hidden")}function p(t){t.classList.add("hidden")}function h(t){const i="https://pixabay.com/api/",a=new URLSearchParams({key:"44483341-a81d0a92f1c16412fe8933c44",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${i}?${a}`;return fetch(s).then(e=>e.json()).catch(e=>console.log(e))}debugger;const l=document.querySelector(".form"),c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");l.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(l).get("userInput").trim();if(a===""){n.warning({title:"Empty search",message:"Please enter a search query!"});return}f(d),h(a).then(s=>{if(s.hits.length!==0){const e=g(s.hits);c.innerHTML=e,y.refresh()}else n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=""}).catch(s=>{n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(s)}).finally(()=>{p(d),l.reset()})});const y=new m(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
