import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(
      this.productCardTemplate.bind(this),
      this.listElement,
      list,
      "beforeend",
      true
    );
  }

  productCardTemplate(product) {
    const imageUrl = product.Images?.PrimaryMedium || product.Image || "";
    const encodedImageUrl = encodeURI(imageUrl);
    
    return `
    <li class="product-card">
      <a href="/product_pages/index.html?product=${product.Id}">
        <img
          src="${encodedImageUrl}"
          alt="${product.Name}"
          onerror="this.src='/images/placeholder.jpg'"
        />
        <h3 class="card__brand">${product.Brand?.Name || product.Brand || ""}</h3>
        <h2 class="card__name">${product.NameWithoutBrand || product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice || product.ListPrice || "0.00"}</p>
      </a>
    </li>`;
  }
}