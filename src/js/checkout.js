import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart");

function renderCartSummary() {
  const cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  const total = cartItems.reduce(
    (sum, item) => sum + (item.FinalPrice || 0),
    0,
  );
  document.querySelector(".cart-total").textContent =
    `Total: $${total.toFixed(2)}`;
}

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const myForm = document.forms["checkout"];
  const chk_status = myForm.checkValidity();
  myForm.reportValidity();

  if (chk_status) {
    myCheckout.checkout();
  }
});

renderCartSummary();
