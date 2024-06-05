import Component from "../../services/custom-components/component.js";

export default class DetailsPage extends Component {
  static elementName = "details-page";
  constructor() {
    super({
      styleUrl: "/components/DetailsPage/DetailsPage.css",
      templateId: "/components/DetailsPage/DetailsPage.html",
    });
  }
}