async function loadCSS(url, onLoadedCSS) {
  return fetch(url)
    .then((request) => request.text())
    .then(onLoadedCSS);
}

async function loadTemplate(url, onLoadedTemplate) {
  return fetch(url)
    .then((request) => request.text())
    .then((templateString) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(templateString, "text/html");
      return doc.querySelector("template");
    })
    .then(onLoadedTemplate);
}

export default class Component extends HTMLElement {
  constructor({ styleUrl, templateUrl, eventName, withShadowDom = true }) {
    super();
    this.root = withShadowDom ? this.attachShadow({ mode: "open" }): this;
    this.styleUrl = styleUrl;
    this.templateUrl = templateUrl;
    this.eventName = eventName;
  }

  connectedCallback() {
    const styles = document.createElement("style");
    if (this.styleUrl) {
      loadCSS(this.styleUrl, (style) => {
        styles.textContent = style;
        this.root.appendChild(styles);
      });
    }
    loadTemplate(this.templateUrl, (template) => {
      this.root.appendChild(template.content.cloneNode(true));
    }).then(() => {
      if (this.eventName) {
        window.addEventListener(this.eventName, () => {
          this.render();
        });
      }
      this.render();
    });
  }
}
