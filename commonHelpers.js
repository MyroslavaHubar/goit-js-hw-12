import{a as p,S as m,i as f}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function u(r,o){const e="https://pixabay.com/api/",t={key:"44406929-b6512fae58ed0703418d850ba",q:r,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await p.get(e,{params:t})).data}catch{console.log("Error")}}function g(r){return`<li class="gallery-item">
	<a class="gallery-link" href="${r.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${r.previewURL}" 
			alt="${r.tags}" 
			/>
	</a>
    <div class="item-footer">
          <div class="item-footer-pair">
            <p>Likes</p>
            <p>${r.likes}</p>
          </div>
          <div class="item-footer-pair">
            <p>Views</p>
            <p>${r.views}</p>
          </div>
          <div class="item-footer-pair">
            <p>Comments</p>
            <p>${r.comments}</p>
          </div>
          <div class="item-footer-pair">
            <p>Downloads</p>
            <p>${r.downloads}</p>
          </div>
        </div>
</li>
`}function h(r){return r.map(g).join("")}const s={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};let l="",c=1;s.formElem.addEventListener("submit",y);async function y(r){r.preventDefault(),l=r.target.elements.searchField.value.trim(),c=1,v();try{const o=await u(l,c);console.log(o),o.total===0&&w();const a=h(o.hits);s.ulElem.innerHTML=a,d.refresh()}catch{E()}L(),s.formElem.reset()}const d=new m(".gallery a",{captionsData:"alt",captionDelay:250});d.refresh();function v(){s.loader.classList.remove("hidden")}function L(){s.loader.classList.add("hidden")}function w(){f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}function E(){f.warning({title:"",message:"Sorry! There was a problem with the server!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
