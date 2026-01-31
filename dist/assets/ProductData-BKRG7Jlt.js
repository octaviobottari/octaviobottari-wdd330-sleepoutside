import { E as r } from "./ExternalServices-DxDLiG_F.js";
class e {
  constructor() {
    this.services = new r();
  }
  async getData(t) {
    return await this.services.getData(t);
  }
  async findProductById(t) {
    return await this.services.findProductById(t);
  }
}
export { e as P };
