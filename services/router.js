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
      if (event?.state?.path) {
        this.go(event.state.path, false);
      }
    });
    this.go(location.pathname);
  },
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }
    let page = null;

    switch (path) {
      case "/":
        page = document.createElement("menu-page");
        break;
      case "/order":
        page = document.createElement("order-page");
        break;
      default:
        if (path.startsWith("/product-")) {
          page = document.createElement("details-page");
          const productId = path.split("-")[1];
          page.dataset.id = productId;
        }
        break;
    }
    if (page) {
      let currentPage = document.querySelector("main").firstElementChild; 
      if (currentPage) {
          let fadeOut = currentPage.animate([
              {opacity: 1}, {opacity: 0}
          ],{ duration: 200});
          fadeOut.addEventListener("finish", () => {
              currentPage.remove();
              document.querySelector("main").appendChild(page);
              let fadeIn = page.animate([
                  {opacity: 0}, {opacity: 1}
              ],{ duration: 200});
          });
      } else {
          document.querySelector("main").appendChild(page);
      }

  }
  },
};

export default Router;
