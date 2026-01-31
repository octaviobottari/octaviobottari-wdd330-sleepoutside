import { a, l as o } from "./utils-CzYKsxI9.js";
import { E as s } from "./ExternalServices-DxDLiG_F.js";
class n {
  constructor(e) {
    (this.key = e), (this.services = new s());
  }
  async checkout() {
    try {
      const e = document.forms.checkout,
        t = {
          orderDate: new Date().toISOString(),
          fname: e.fname.value,
          lname: e.lname.value,
          street: e.street.value,
          city: e.city.value,
          state: e.state.value,
          zip: e.zip.value,
          cardNumber: e.cardNumber.value,
          expiration: e.expiration.value,
          code: e.code.value,
          items: this.getCartItems(),
        };
      await this.services.sendOrder(t),
        localStorage.removeItem("so-cart"),
        (window.location.href = "/checkout/success.html");
    } catch (e) {
      console.error("Checkout error:", e),
        e.name === "servicesError"
          ? a(`Checkout failed: ${JSON.stringify(e.message)}`)
          : a("An unexpected error occurred. Please try again.");
    }
  }
  getCartItems() {
    return (JSON.parse(localStorage.getItem("so-cart")) || []).map((t) => ({
      id: t.Id,
      name: t.Name,
      price: t.FinalPrice,
      quantity: 1,
    }));
  }
}
o();
const i = new n("so-cart");
function l() {
  const e = (JSON.parse(localStorage.getItem("so-cart")) || []).reduce(
    (t, c) => t + (c.FinalPrice || 0),
    0,
  );
  document.querySelector(".cart-total").textContent = `Total: $${e.toFixed(2)}`;
}
document.querySelector("#checkoutSubmit").addEventListener("click", (r) => {
  r.preventDefault();
  const e = document.forms.checkout,
    t = e.checkValidity();
  e.reportValidity(), t && i.checkout();
});
l();
