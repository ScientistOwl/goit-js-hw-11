import{a as f,S as d,i as p}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="48807369-8911b207443a7f439467dae3a",g="https://pixabay.com/api/";async function y(o,t=1){return(await f.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:12}})).data}function h(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:c,comments:l,downloads:u})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${s}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b>: ${n}</p>
          <p><b>Views</b>: ${c}</p>
          <p><b>Comments</b>: ${l}</p>
          <p><b>Downloads</b>: ${u}</p>
        </div>
      </div>
    `).join(""),new d(".gallery a").refresh()}function i(o,t="info"){p[t]({message:o,position:"topRight"})}function b(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector("#search-form");L.addEventListener("submit",async o=>{o.preventDefault();const a=new FormData(o.currentTarget).get("searchQuery").trim();if(!a){i("Please enter a search query.","warning");return}b(),i("Loading...","info");try{const s=await y(a);s.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!","error"):(h(s.hits),i("Images loaded successfully!","success"))}catch{i("Something went wrong. Please try again later.","error")}});
//# sourceMappingURL=index.js.map
