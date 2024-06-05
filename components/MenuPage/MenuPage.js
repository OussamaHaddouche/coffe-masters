import Component from "../../services/custom-components/component.js";
export default class MenuPage extends Component {
  static elementName = "menu-page";
  constructor() {
    super({
      styleUrl: "/components/MenuPage/MenuPage.css",
      templateUrl: "/components/MenuPage/MenuPage.html",
    });
  }
}