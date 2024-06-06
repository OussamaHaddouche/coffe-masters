import Component from "../../services/custom-components/component.js";
import { removeFromCart } from "../../services/order.js";

export default class CartItem extends Component {
  static elementName = "cart-item";
  constructor() {
    super({
      templateUrl: "/components/CartItem/CartItem.html",
      withShadowDom: false,
    });
  }
  render() {
    const item = JSON.parse(this.dataset.item);
    this.root.querySelector(".qty").textContent = `${item.quantity}x`;
    this.root.querySelector(".name").textContent = item.product.name;
    this.root.querySelector(".price").textContent = `$${item.product.price.toFixed(
      2
    )}`;
    this.root.querySelector("a.delete-button").addEventListener("click", (event) => {
      removeFromCart(item.product.id);
    });
  }
}
