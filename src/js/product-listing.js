import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");

const titleElement = document.getElementById("category-title");
if (titleElement && category) {
  titleElement.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");

if (listElement && category) {
  const productList = new ProductList(category, dataSource, listElement);
  productList.init();
}
