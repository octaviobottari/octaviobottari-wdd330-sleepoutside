import{r as i}from"./utils-B8urrpqJ.js";class d{constructor(e,a,t){this.category=e,this.dataSource=a,this.listElement=t}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e)}renderList(e){i(this.productCardTemplate.bind(this),this.listElement,e,"beforeend",!0)}productCardTemplate(e){var r,s;const a=((r=e.Images)==null?void 0:r.PrimaryMedium)||e.Image||"",t=encodeURI(a);return`
    <li class="product-card">
      <a href="/product_pages/index.html?product=${e.Id}">
        <img
          src="${t}"
          alt="${e.Name}"
          onerror="this.src='/images/placeholder.jpg'"
        />
        <h3 class="card__brand">${((s=e.Brand)==null?void 0:s.Name)||e.Brand||""}</h3>
        <h2 class="card__name">${e.NameWithoutBrand||e.Name}</h2>
        <p class="product-card__price">$${e.FinalPrice||e.ListPrice||"0.00"}</p>
      </a>
    </li>`}}export{d as P};
