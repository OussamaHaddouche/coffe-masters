const store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(store, {
  set(target, propertyName, value) {
    target[propertyName] = value;
    if (propertyName === "menu") {
      window.dispatchEvent(new CustomEvent("menu-change"));
    }
    if (propertyName === "cart") {
      window.dispatchEvent(new CustomEvent("cart-change"));
    }

    return true;
  },
});

export default proxyStore;
