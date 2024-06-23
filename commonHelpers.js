import{a as w,S as E,i as u}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function h(e,o){const t="https://pixabay.com/api/",r={key:"44406929-b6512fae58ed0703418d850ba",q:e,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await w.get(t,{params:r})).data}catch{console.log("Error")}}function S(e){return`<li class="gallery-item">
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
`}function g(e){return e.map(S).join("")}const a={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".load-more-btn")};let c="",s=1,d=1;const P=15;a.formElem.addEventListener("submit",q);async function q(e){e.preventDefault(),c=e.target.elements.searchField.value.trim(),s=1,y(),p();try{const o=await h(c,s);d=Math.ceil(o.total/P),o.total===0&&(f(),v());const i=g(o.hits);a.ulElem.innerHTML=i,m.refresh()}catch{b()}L(),f(),a.formElem.reset()}a.btnLoadMore.addEventListener("click",async()=>{s++,y(),p();try{const e=await h(c,s);e.total===0&&v();const o=g(e.hits);a.ulElem.insertAdjacentHTML("beforeend",o),m.refresh()}catch{b()}L(),f()});const m=new E(".gallery a",{captionsData:"alt",captionDelay:250});m.refresh();function y(){a.loader.classList.remove("hidden")}function f(){a.loader.classList.add("hidden")}function $(){a.btnLoadMore.classList.remove("hidden")}function p(){a.btnLoadMore.classList.add("hidden")}function L(){s>=d?(p(),d!==0&&u.info({title:"",message:"We are sorry, but you have reached the end of search results.",position:"bottomCenter"})):$()}function v(){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topCenter",backgroundColor:"#ef4040",icon:!1})}function b(){u.warning({title:"",message:"Sorry! There was a problem with the server!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
