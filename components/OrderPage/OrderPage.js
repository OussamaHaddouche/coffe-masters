import Component from "../../services/custom-components/component.js";

export default class OrderPage extends Component {
  static elementName = "order-page";
  constructor() {
    super({
      styleUrl: "/components/OrderPage/OrderPage.css",
      templateUrl: "/components/OrderPage/OrderPage.html",
    });
  }
}
