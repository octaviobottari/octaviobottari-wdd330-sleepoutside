import{r}from"./utils-B_kqwxmC.js";import{P as s}from"./ProductData-D6Sl5V2y.js";class i{constructor(t,e,a){this.category=t,this.dataSource=e,this.listElement=a}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){r(this.productCardTemplate.bind(this),this.listElement,t,"beforeend",!0)}productCardTemplate(t){return`
    <li class="product-card">
      <a href="product_pages/index.html?product=${t.Id}">
        <img
          src="${t.Image.replace("../","/")}"
          alt="${t.Name}"
        />
        <h3 class="card__brand">${t.Brand.Name}</h3>
        <h2 class="card__name">${t.NameWithoutBrand||t.Name}</h2>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>`}}const c=document.querySelector(".product-list"),n=new s("tents"),d=new i("tents",n,c);d.init();
