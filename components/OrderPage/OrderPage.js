export default class OrderPage extends HTMLElement {
  static elementName = "order-page"
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style")
    async function loadCSS() {
      const request = await fetch("/components/OrderPage/OrderPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
    this.root.appendChild(styles)
  }

  connectedCallback() {
    const template = document.getElementById("order-form-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content); 
  }
}