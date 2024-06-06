import Component from "../../services/custom-components/component.js";
import { getProductById } from "../../services/menu.js";
import { addToCart } from "../../services/order.js";

export default class DetailsPage extends Component {
  static elementName = "details-page";
  constructor() {
    super({
      styleUrl: "/components/DetailsPage/DetailsPage.css",
      templateUrl: "/components/DetailsPage/DetailsPage.html",
    });
  }

  async render() {
    if (this.dataset.id) {
      this.product = await getProductById(this.dataset.id);
      this.root.querySelector("h2").textContent = this.product.name;
      this.root.querySelector("img").src = `/data/images/${this.product.image}`;
      this.root.querySelector(".description").textContent =
        this.product.description;
      this.root.querySelector(
        ".price"
      ).textContent = `$ ${this.product.price.toFixed(2)} ea`;
      this.root.querySelector("button").addEventListener("click", () => {
        addToCart(this.product.id);
        app.router.go("/order");
      });
    } else {
      alert("Invalid Product ID");
    }
  }
}
