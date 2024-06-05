import { loadMenuData } from "./services/menu.js"
import registerCustomComponents from "./services/custom-components/register-components.js";
import Router from "./services/router.js";

window.addEventListener("DOMContentLoaded", onDOMContentLoaded)

function onDOMContentLoaded() {
  loadMenuData();
  Router.init();
  registerCustomComponents();
}
