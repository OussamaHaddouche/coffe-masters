const Router = {
  init: function initRouter() {
    document.querySelectorAll(".navlink").forEach((navLink) => {
      navLink.addEventListener("click", (event) => {
        event.preventDefault();
        const path = event.currentTarget.getAttribute("href");
        this.go(path);
      });
    });
    window.addEventListener("popstate", (event) => {
      this.go(event.state.path, false);
    });
    this.go(location.pathname);
  },
  go: (path, replace = false) => {
    if (!replace) {
      history.pushState({ path }, null, path);
    }
    let page = null;
    const mainElement = document.querySelector("main");

    switch (path) {
      case "/":
        page = document.createElement("menu-page");
        break;
      case "/order":
        page = document.createElement("order-page");
        break;
      default:
        if (path.startsWith("/products-")) {
          page = document.createElement("details-page");
          const productId = path.split("-")[1];
          page.dataset.id = productId;
        }
        break;
    }
    if (mainElement.children.length > 0) {
      mainElement.children[0].remove();
    }
    mainElement.appendChild(page);
  },
};

export default Router;
