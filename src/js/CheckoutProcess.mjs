import { alertMessage } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';

export default class CheckoutProcess {
  constructor(key) {
    this.key = key;
    this.services = new ExternalServices();
  }

  async checkout() {
    try {
      const form = document.forms['checkout'];
      const order = {
        orderDate: new Date().toISOString(),
        fname: form.fname.value,
        lname: form.lname.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zip: form.zip.value,
        cardNumber: form.cardNumber.value,
        expiration: form.expiration.value,
        code: form.code.value,
        items: this.getCartItems()
      };

      await this.services.sendOrder(order);
      
      localStorage.removeItem('so-cart');
      
      window.location.href = '/checkout/success.html';
      
    } catch (err) {
      console.error('Checkout error:', err);
      if (err.name === 'servicesError') {
        alertMessage(`Checkout failed: ${JSON.stringify(err.message)}`);
      } else {
        alertMessage('An unexpected error occurred. Please try again.');
      }
    }
  }

  getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('so-cart')) || [];
    return cartItems.map(item => ({
      id: item.Id,
      name: item.Name,
      price: item.FinalPrice,
      quantity: 1
    }));
  }
}