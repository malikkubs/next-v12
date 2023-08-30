export function PageView(url) {
  (window as any).gtag("config", "G-G1SKPQR42K", {
    path_url: url,
  });
}
export function EvenClick(topmenu) {
  (window as any).gtag("event", "onClick", {
    top_menu_category: topmenu,
  });
}

export function EvenClickButton(button) {
  (window as any).gtag("event", "onClick", {
    button: button,
  });
}

export function EvenClickMenuApp(menuapp) {
  (window as any).gtag("event", "onClick", {
    menu_app: menuapp,
  });
}
