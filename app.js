import { loadMenuData } from "./services/menu.js"
import store from "./services/store.js";

window.addEventListener("DOMContentLoaded", onDOMContentLoaded)

window.app = {
  store
}

async function onDOMContentLoaded() {
  app.store.menu = await loadMenuData();
}
