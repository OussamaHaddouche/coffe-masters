export default class DetailsPage extends HTMLElement {
  static elementName = "details-page"
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style")
    async function loadCSS() {
      const request = await fetch("/components/DetailsPage/DetailsPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
    this.root.appendChild(styles)
  }

  connectedCallback() {
    const template = document.getElementById("details-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content); 
  }
}