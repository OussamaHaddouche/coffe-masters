import Component from "../../services/custom-components/component.js";
import { addToCart } from "../../services/order.js";
export default class ProductItem extends Component {
  static elementName = "product-item";
  constructor() {
    super({
      templateUrl: "/components/ProductItem/ProductItem.html",
      withShadowDom: false
    });
  }
  render() {
    const product = JSON.parse(this.dataset.product);
    this.root.querySelector("h4").textContent = product.name;
    this.root.querySelector("p.price").textContent = `$${product.price.toFixed(
      2
    )}`;
    this.root.querySelector("img").src = `data/images/${product.image}`;
    this.root.querySelector("a").addEventListener("click", (event) => {
      console.log(event.target.tagName);
      if (event.target.tagName.toLowerCase() == "button") {
        addToCart(product.id)
      } else {
        app.router.go(`/product-${product.id}`);
      }
      event.preventDefault();
    });
  }
}
