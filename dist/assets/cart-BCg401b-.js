import{l as c,g as e}from"./utils-B8urrpqJ.js";/* empty css              */c();function o(){const a=e("so-cart");if(a&&a.length>0){const r=a.map(t=>s(t));document.querySelector(".product-list").innerHTML=r.join("")}else document.querySelector(".product-list").innerHTML="<li class='empty-cart'>Your cart is empty</li>"}function s(a){return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${a.Image}" alt="${a.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${a.Name}</h2>
    </a>
    <p class="cart-card__color">${a.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${a.FinalPrice}</p>
  </li>`}o();
