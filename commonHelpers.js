import{a as b,i as c,S as w}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function h(e,r){const t="https://pixabay.com/api/",o={key:"44406929-b6512fae58ed0703418d850ba",q:e,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await b.get(t,{params:o})).data}catch{console.log("Error")}}function S(e){return`<li class="gallery-item">
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
`}function g(e){return e.map(S).join("")}const s={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".load-more-btn")};let l="",a=1,u=1;const P=15;s.formElem.addEventListener("submit",q);async function q(e){if(e.preventDefault(),l=e.target.elements.searchField.value.trim(),!l){c.error({title:"Error",message:"Enter your details. Please try again!",position:"topRight"});return}a=1,y(),p();try{const r=await h(l,a);u=Math.ceil(r.total/P),r.total===0&&(f(),v());const i=g(r.hits);s.ulElem.innerHTML=i,m.refresh()}catch{E()}L(),f(),s.formElem.reset()}s.btnLoadMore.addEventListener("click",async()=>{a++,y(),p();try{const e=await h(l,a);e.total===0&&v();const r=g(e.hits);s.ulElem.insertAdjacentHTML("beforeend",r),m.refresh(),$()}catch{E()}L(),f()});const m=new w(".gallery a",{captionsData:"alt",captionDelay:250});m.refresh();function y(){s.loader.classList.remove("hidden")}function f(){s.loader.classList.add("hidden")}function O(){s.btnLoadMore.classList.remove("hidden")}function p(){s.btnLoadMore.classList.add("hidden")}function L(){a>=u?(p(),u!==0&&c.info({title:"",message:"We are sorry, but you have reached the end of search results.",position:"bottomCenter"})):O()}function $(){const r=s.ulElem.children[0].getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}function v(){c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topCenter",backgroundColor:"#ef4040",icon:!1})}function E(){c.warning({title:"",message:"Sorry! There was a problem with the server!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
