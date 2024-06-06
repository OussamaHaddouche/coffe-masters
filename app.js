import { loadMenuData } from "./services/menu.js";
import registerCustomComponents from "./services/custom-components/register-components.js";
import Router from "./services/router.js";
import proxyStore from "./services/store.js";

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);

window.app = {
  store: proxyStore,
  router: Router
};

async function onDOMContentLoaded() {
  proxyStore.menu = await loadMenuData();
  Router.init();
  registerCustomComponents();
}

window.addEventListener("cart-change", event => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
