export default class MenuPage extends HTMLElement {
  static elementName = "menu-page";
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style")
    async function loadCSS() {
      const request = await fetch("/components/MenuPage/MenuPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
    this.root.appendChild(styles)
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content); 
    this.root.appendChild(content); 
  }
}