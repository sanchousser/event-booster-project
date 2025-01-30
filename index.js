var E=n=>{throw TypeError(n)};var I=(n,e,t)=>e.has(n)||E("Cannot "+t);var _=(n,e,t)=>(I(n,e,"read from private field"),t?t.call(n):e.get(n)),g=(n,e,t)=>e.has(n)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var f,y;class b{constructor(){g(this,f,"3vLlhLsn5MSlQI96Cy78HBPNhef1xnsS");g(this,y,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery="",this.searchCountry=""}async fetchEvents(){const e=new URLSearchParams({apikey:_(this,f),page:this.page,size:this.pageSize,keyword:this.searchQuery,countryCode:this.searchCountry,sort:"random"}),t=`${_(this,y)}?${e}&classificationName=music`,c=await fetch(t);if(!c.ok)throw new Error("Failed to fetch events");return c.json()}}f=new WeakMap,y=new WeakMap;fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=3vLlhLsn5MSlQI96Cy78HBPNhef1xnsS");function k(n){return n.map(t=>{var s,l;const c=((s=t.images[0])==null?void 0:s.url)||"",o=t.name||"No name available",i=t.dates.start.localDate||"Unknown date",r=((l=t._embedded)==null?void 0:l.venues[0].name)||"Unknown location",a=t.url||"#";return`
        <li class="cards__item" data-id="${t.id}">
                <img src="${c}" alt="${o}" class="cards__item__img">
                <h2 class="cards__item__title">
                    ${o}
                </h2>
                <p class="cards__item__date">${i}</p>
                <a href="${a}" class="cards__item__location__link">
                    <svg class="location__item__icon">
                        <use href="../img/icons/sprite.svg#icon-location"> </use>
                    </svg>

                   ${r} </a>
            </li>
      `}).join("")}function T(n,e,t){const c=document.querySelector(".pagination__list");c.innerHTML="";const i=S(n,e).map(a=>a==="..."?`<li class="pagination__list__item">
                <span class="pagination__dots">...</span>
            </li>`:` <li class="pagination__list__item">
                <button class="pagination__list__button ${a===e?"active":""}" data-page="${a}">${a+1}</button>
            </li>`).join("");c.insertAdjacentHTML("beforeend",i),c.addEventListener("click",r);function r(a){if(a.target.tagName!=="BUTTON")return;const s=Number(a.target.dataset.page);s!==e&&t(s)}}function S(n,e){const t=[];if(n<=5)for(let o=0;o<n;o++)t.push(o);else{e>1&&t.push(0),e>2&&t.push("...");const o=Math.max(0,e-1),i=Math.min(n,e+2);for(let r=o;r<i;r++)t.push(r);e<n-3&&t.push("..."),e<n-1&&t.push(n-1)}return t}const L=[{en:"Choose country",code:""},{en:"United States Of America",code:"US"},{en:"Andorra",code:"AD"},{en:"Anguilla",code:"AI"},{en:"Argentina",code:"AR"},{en:"Australia",code:"AU"},{en:"Austria",code:"AT"},{en:"Azerbaijan",code:"AZ"},{en:"Bahamas",code:"BS"},{en:"Bahrain",code:"BH"},{en:"Barbados",code:"BB"},{en:"Belgium",code:"BE"},{en:"Bermuda",code:"BM"},{en:"Brazil",code:"BR"},{en:"Bulgaria",code:"BG"},{en:"Canada",code:"CA"},{en:"Chile",code:"CL"},{en:"China",code:"CN"},{en:"Colombia",code:"CO"},{en:"Costa Rica",code:"CR"},{en:"Croatia",code:"HR"},{en:"Cyprus",code:"CY"},{en:"Czech Republic",code:"CZ"},{en:"Denmark",code:"DK"},{en:"Dominican Republic",code:"DO"},{en:"Ecuador",code:"EC"},{en:"Estonia",code:"EE"},{en:"Faroe Islands",code:"FO"},{en:"Finland",code:"FI"},{en:"France",code:"FR"},{en:"Georgia",code:"GE"},{en:"Germany",code:"DE"},{en:"Ghana",code:"GH"},{en:"Gibraltar",code:"GI"},{en:"Great Britain",code:"GB"},{en:"Greece",code:"GR"},{en:"Hong Kong",code:"HK"},{en:"Hungary",code:"HU"},{en:"Iceland",code:"IS"},{en:"India",code:"IN"},{en:"Ireland",code:"IE"},{en:"Israel",code:"IL"},{en:"Italy",code:"IT"},{en:"Jamaica",code:"JM"},{en:"Japan",code:"JP"},{en:"Korea, Republic of",code:"KR"},{en:"Latvia",code:"LV"},{en:"Lebanon",code:"LB"},{en:"Lithuania",code:"LT"},{en:"Luxembourg",code:"LU"},{en:"Malaysia",code:"MY"},{en:"Malta",code:"MT"},{en:"Mexico",code:"MX"},{en:"Monaco",code:"MC"},{en:"Montenegro",code:"ME"},{en:"Morocco",code:"MA"},{en:"Netherlands",code:"NL"},{en:"Netherlands Antilles",code:"AN"},{en:"New Zealand",code:"NZ"},{en:"Northern Ireland",code:"ND"},{en:"Norway",code:"NO"},{en:"Peru",code:"PE"},{en:"Poland",code:"PL"},{en:"Portugal",code:"PT"},{en:"Romania",code:"RO"},{en:"Russian Federation",code:"RU"},{en:"Saint Lucia",code:"LC"},{en:"Saudi Arabia",code:"SA"},{en:"Serbia",code:"RS"},{en:"Singapore",code:"SG"},{en:"Slovakia",code:"SK"},{en:"Slovenia",code:"SI"},{en:"South Africa",code:"ZA"},{en:"Spain",code:"ES"},{en:"Sweden",code:"SE"},{en:"Switzerland",code:"CH"},{en:"Taiwan",code:"TW"},{en:"Thailand",code:"TH"},{en:"Trinidad and Tobago",code:"TT"},{en:"Turkey",code:"TR"},{en:"Ukraine",code:"UA"},{en:"United Arab Emirates",code:"AE"},{en:"Uruguay",code:"UY"},{en:"Venezuela",code:"VE"}],A=document.getElementById("header__form__country__select");document.querySelector(".header__form__country__button-text");const w=L.map(n=>`
        <option class='header__form__country__option' value="${n.en}">${n.en}</option>
    `).join("");A.insertAdjacentHTML("beforeend",w);function M(n){return L.find(e=>e.en===n).code}const B=document.querySelector(".cards__list"),$=document.querySelector(".pagination__list"),U=document.getElementById("header__form"),N=document.getElementById("search-input"),x=document.getElementById("header__form__country__select"),P=document.querySelector(".header__form__country__button-text"),d=new b;h();function H(){document.querySelectorAll(".cards__item").forEach(e=>{e.addEventListener("click",t=>{const o=t.target.getAttribute("data-id");o&&onCardClick(o)},{capture:!0})})}U.addEventListener("submit",R);x.addEventListener("change",D);async function D(n){n.preventDefault();const e=n.target.value;P.textContent=e,d.searchCountry=M(n.target.value),console.log(d.searchCountry),d.page=0,v(),C(),await h()}async function R(n){n.preventDefault(),d.searchQuery=N.value.trim(),d.page=0,v(),C(),await h()}async function h(){var n;try{const e=await d.fetchEvents(),t=((n=e._embedded)==null?void 0:n.events)||[],c=k(t);H(),B.insertAdjacentHTML("beforeend",c);const o=e.page.totalPages;console.log("Total Pages:",o,"Current Page:",d.page),T(o,d.page,O)}catch(e){console.error(e)}}function v(){B.innerHTML=""}function O(n){n!==d.page&&(d.page=n,v(),h())}function C(){$.innerHTML=""}const F="No additional info provided :(";function G(n){var p;const e=window.events.find(m=>m.id===n),t=((p=e._embedded)==null?void 0:p.venues[0].name)||"Unknown location",c=e.dates.timezone,o=e._embedded.venues[0].city.name||"Unknown city",i=e._embedded.attractions[0].name,r=e._embedded.venues[0].url,a=e==null?void 0:e.priceRanges,s=a==null?void 0:a.find(m=>m.type==="standard"),l=a==null?void 0:a.find(m=>m.type==="vip");j(e.info),z(e.dates.start,c),K(o,t),V(i),Y(r),q(s,l,s==null?void 0:s.currency);const u=document.getElementById("backdrop-window");u.style.display="flex"}function j(n=F){const e=document.getElementById("text-information");n.length>=132?e.innerText=(n==null?void 0:n.slice(0,132))+"...":e.innerText=n}function z(n,e){const t=document.getElementById("event-date"),c=document.getElementById("event-time"),o=r(n.localDate),i=a(n.localTime);t.textContent=o,c.textContent=`${i} (${e.replace("_"," ")})`;function r(s){const[l,u,p]=s.split("-");return`${l}-${u}-${p}`}function a(s){const[l,u]=s.split(":");return`${l}:${u}`}}function K(n,e){const t=document.getElementById("event-city"),c=document.getElementById("event-place");t.innerText=n,c.innerText=e}function V(n){const e=document.getElementById("event-performer");e.innerText=n}function Y(n){const e=document.getElementById("event-ticket"),t=document.getElementById("event-ticket-vip");e.href=n,t.href=n,e.addEventListener("click",c),t.addEventListener("click",c);function c(){window.open(n,"_blank").focus()}}function q(n,e,t){const c=document.getElementById("standart-price"),o=document.getElementById("standart-ticket"),i=document.getElementById("vip-ticket"),r=document.getElementById("vip-price"),a=document.getElementById("event-ticket-vip");n&&(o.style.display="flex",c.innerText=`Standart ${n.min} - ${n.max} ${t}`),e&&(r.style.display="flex",a.style.display="flex",i.innerText=`Vip ${e.min} - ${e.max} ${t}`)}window.onCardClick=G;function Z(){const n=document.getElementById("backdrop-window"),e=document.getElementById("close");e.addEventListener("click",t,{capture:!0}),n.addEventListener("click",t,{capture:!0});function t(c){const o=document.getElementById("backdrop-window");(c.target==e||c.target==n||e.contains(c.target))&&(o.style.display="none")}}Z();
//# sourceMappingURL=index.js.map
