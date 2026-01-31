import ExternalServices from './ExternalServices.mjs';

export default class ProductData {
  constructor() {
    this.services = new ExternalServices();
  }
  
  async getData(category) {
    const data = await this.services.getData(category);
    return data;
  }
  
  async findProductById(id) {
    const product = await this.services.findProductById(id);
    return product;
  }
}