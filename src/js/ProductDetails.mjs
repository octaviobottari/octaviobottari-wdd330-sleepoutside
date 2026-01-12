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
    
    console.log('Producto agregado:', this.product.Name);
  }

  renderProductDetails() {
    const productName = document.querySelector('.product-name');
    const productImage = document.querySelector('.product-image');
    const productPrice = document.querySelector('.product-price');
    const productDescription = document.querySelector('.product-description');
    const productColors = document.querySelector('.product-colors');
    
    if (productName) productName.textContent = this.product.Name;
    if (productImage) productImage.src = this.product.Image;
    if (productImage) productImage.alt = this.product.Name;
    if (productPrice) productPrice.textContent = `$${this.product.FinalPrice}`;
    if (productDescription) productDescription.textContent = this.product.Description;
    
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