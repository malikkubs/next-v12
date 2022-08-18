export function PageView(url) {
  window.gtag("config", "G-G1SKPQR42K", {
    path_url: url,
  });
}
export function EvenClick(topmenu) {
  window.gtag("event", "onClick", {
    top_menu_category: topmenu,
  });
}

export function EvenClickButton(button) {
  window.gtag("event", "onClick", {
    Button: button,
  });
}

export function EvenClickMenuApp(menuapp) {
  window.gtag("event", "onClick", {
    MenuApp: menuapp,
  });
}
