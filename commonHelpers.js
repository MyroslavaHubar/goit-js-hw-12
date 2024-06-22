import{a as b,S as w,i as u}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function m(e,o){const t="https://pixabay.com/api/",r={key:"44406929-b6512fae58ed0703418d850ba",q:e,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await b.get(t,{params:r})).data}catch{console.log("Error")}}function E(e){return`<li class="gallery-item">
	<a class="gallery-link" href="${e.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${e.previewURL}" 
			alt="${e.tags}" 
			/>
	</a>
    <div class="item-footer">
          <div class="item-footer-pair">
            <p>Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="item-footer-pair">
            <p>Views</p>
            <p>${e.views}</p>
          </div>
          <div class="item-footer-pair">
            <p>Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="item-footer-pair">
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
</li>
`}function p(e){return e.map(E).join("")}const a={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".load-more-btn")};let c="",s=1,g=1;const S=15;a.formElem.addEventListener("submit",P);async function P(e){e.preventDefault(),c=e.target.elements.searchField.value.trim(),s=1,h(),f();try{const o=await m(c,s);g=Math.ceil(o.total/S),o.total===0&&L();const i=p(o.hits);a.ulElem.innerHTML=i,d.refresh(),y()}catch{v()}q(),a.formElem.reset()}a.btnLoadMore.addEventListener("click",async()=>{s++,h(),f();try{const e=await m(c,s);e.total===0&&L();const o=p(e.hits);a.ulElem.insertAdjacentHTML("beforeend",o),d.refresh(),y()}catch{v()}});const d=new w(".gallery a",{captionsData:"alt",captionDelay:250});d.refresh();function h(){a.loader.classList.remove("hidden")}function q(){a.loader.classList.add("hidden")}function $(){a.btnLoadMore.classList.remove("hidden")}function f(){a.btnLoadMore.classList.add("hidden")}function y(){s>=g?f():$()}function L(){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}function v(){u.warning({title:"",message:"Sorry! There was a problem with the server!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
