import MenuPage from "../../components/MenuPage/MenuPage.js";
import OrderPage from "../../components/OrderPage/OrderPage.js";
import DetailsPage from "../../components/DetailsPage/DetailsPage.js";
import ProductItem from "../../components/ProductItem/ProductItem.js";
import CartItem from "../../components/CartItem/CartItem.js";

const components = [MenuPage, OrderPage, DetailsPage, ProductItem, CartItem];

export default function registerCustomComponents() {
  components.forEach(registerComponent);
}

function registerComponent(component) {
  customElements.define(component.elementName, component);
}