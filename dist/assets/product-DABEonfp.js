import { g as c, s as a, a as i, l as s, b as u } from "./utils-CzYKsxI9.js";
import { P as n } from "./ProductData-BKRG7Jlt.js";
import "./ExternalServices-DxDLiG_F.js";
class p {
  constructor(t, o) {
    (this.productId = t), (this.product = {}), (this.dataSource = o);
  }
  async init() {
    (this.product = await this.dataSource.findProductById(this.productId)),
      this.renderProductDetails(),
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let t = c("so-cart") || [];
    t.push(this.product),
      a("so-cart", t),
      i(`${this.product.Name} added to cart!`);
  }
  renderProductDetails() {
    var r;
    const t =
      ((r = this.product.Images) == null ? void 0 : r.PrimaryLarge) ||
      this.product.Image ||
      "";
    (document.querySelector(".product-name").textContent = this.product.Name),
      (document.querySelector(".product-image").src = t),
      (document.querySelector(".product-image").alt = this.product.Name),
      (document.querySelector(".product-price").textContent =
        `$${this.product.FinalPrice || this.product.ListPrice || "0.00"}`),
      (document.querySelector(".product-description").textContent =
        this.product.DescriptionHtmlSimple || this.product.Description || "");
    const o = document.querySelector(".product-colors");
    o &&
      this.product.Colors &&
      (o.innerHTML = this.product.Colors.map(
        (d) => `<option value="${d.ColorCode}">${d.ColorName}</option>`,
      ).join("")),
      (document.title = `${this.product.Name} | Sleep Outside`);
    const e = document.getElementById("addToCart");
    e && (e.dataset.id = this.product.Id);
  }
}
s();
const l = u("product"),
  m = new n(),
  h = new p(l, m);
h.init();
