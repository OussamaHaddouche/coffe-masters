import MenuPage from "../../components/MenuPage/MenuPage.js";
import OrderPage from "../../components/OrderPage/OrderPage.js";
import DetailsPage from "../../components/DetailsPage/DetailsPage.js";

const components = [MenuPage, OrderPage, DetailsPage];

export default function registerCustomComponents() {
  components.forEach(registerComponent);
}

function registerComponent(component) {
  customElements.define(component.elementName, component);
}