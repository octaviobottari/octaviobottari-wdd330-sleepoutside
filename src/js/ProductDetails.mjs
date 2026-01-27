import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    
    document.getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    let cart = getLocalStorage('so-cart') || [];
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
    console.log('Added to cart:', this.product.Name);
  }

  renderProductDetails() {
    const imageUrl = this.product.Images?.PrimaryLarge || this.product.Image || "";
    
    document.querySelector('.product-name').textContent = this.product.Name;
    document.querySelector('.product-image').src = imageUrl;
    document.querySelector('.product-image').alt = this.product.Name;
    document.querySelector('.product-price').textContent = `$${this.product.FinalPrice || this.product.ListPrice || "0.00"}`;
    document.querySelector('.product-description').textContent = this.product.DescriptionHtmlSimple || this.product.Description || "";
    
    const productColors = document.querySelector('.product-colors');
    if (productColors && this.product.Colors) {
      productColors.innerHTML = this.product.Colors
        .map(color => `<option value="${color.ColorCode}">${color.ColorName}</option>`)
        .join('');
    }
    
    document.title = `${this.product.Name} | Sleep Outside`;
    
    const addToCartBtn = document.getElementById('addToCart');
    if (addToCartBtn) {
      addToCartBtn.dataset.id = this.product.Id;
    }
  }
}