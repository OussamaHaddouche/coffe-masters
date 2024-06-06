import Component from "../../services/custom-components/component.js";

export default class OrderPage extends Component {
  static elementName = "order-page";
  constructor() {
    super({
      styleUrl: "/components/OrderPage/OrderPage.css",
      templateUrl: "/components/OrderPage/OrderPage.html",
      eventName: "cart-change"
    });
  }

  render() {
    let section = this.root.querySelector("section");
    if (app.store.cart.length == 0) {
      section.innerHTML = `
          <p class="empty">Your order is empty</p>
      `;
    } else {
      let html = `
          <h2>Your Order</h2>
          <ul>
          </ul>
      `;
      section.innerHTML = html;
      let total = 0;
      for (let prodInCart of app.store.cart) {
        const item = document.createElement("cart-item");
        item.dataset.item = JSON.stringify(prodInCart);
        this.root.querySelector("ul").appendChild(item);

        total += prodInCart.quantity * prodInCart.product.price;
      }
      this.root.querySelector("ul").innerHTML += `
            <li>
                <p class='total'>Total</p>
                <p class='price-total'>$${total.toFixed(2)}</p>
            </li>                
        `;
    }
  }
}
