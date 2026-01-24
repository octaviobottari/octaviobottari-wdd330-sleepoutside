import{r as i,l as c}from"./utils-B8urrpqJ.js";/* empty css              */import{P as n}from"./ProductData-Dx0C3TkS.js";class o{constructor(t,e,s){this.category=t,this.dataSource=e,this.listElement=s}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){i(this.productCardTemplate.bind(this),this.listElement,t,"beforeend",!0)}productCardTemplate(t){const e=encodeURI(t.Image.replace("../","/"));return`
  <li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
      <img
        src="${e}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand||t.Name}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}}c();const r=document.querySelector(".product-list");if(r){const a=new n("tents");new o("tents",a,r).init()}
