import { l as r, b as c } from "./utils-CzYKsxI9.js";
import { P as a } from "./ProductData-BKRG7Jlt.js";
import { P as s } from "./ProductList-DmNGkpEb.js";
import "./ExternalServices-DxDLiG_F.js";
r();
const t = c("category"),
  o = document.getElementById("category-title");
o &&
  t &&
  (o.textContent = `Top Products: ${t.charAt(0).toUpperCase() + t.slice(1)}`);
const i = new a(),
  e = document.querySelector(".product-list");
e && t && new s(t, i, e).init();
