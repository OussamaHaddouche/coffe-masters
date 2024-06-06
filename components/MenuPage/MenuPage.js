import Component from "../../services/custom-components/component.js";
export default class MenuPage extends Component {
  static elementName = "menu-page";
  constructor() {
    super({
      styleUrl: "/components/MenuPage/MenuPage.css",
      templateUrl: "/components/MenuPage/MenuPage.html",
      eventName: "menu-change"
    });
  }
  render() {
    if (app.store.menu) {
      const menu = this.root.querySelector("#menu");
      menu.innerHTML = "";
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul class='category'>
                </ul>`;
        menu.appendChild(liCategory);
        category.products.map(product => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector("ul").appendChild(item);
      });
      }
    } else {
      menu.innerHTML = `Loading...`;
    }
  }
}
