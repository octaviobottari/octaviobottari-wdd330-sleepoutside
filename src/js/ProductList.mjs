import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
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
    // CODIFICAR URL para caracteres especiales (~)
    const imageUrl = encodeURI(product.Image.replace('../', '/'));
  
  return `
  <li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${imageUrl}"
        alt="${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand || product.Name}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}
}