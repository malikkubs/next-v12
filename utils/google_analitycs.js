export function PageView(url) {
  window.gtag("config", "G-G1SKPQR42K", {
    path_url: url,
  });
}
export function EvenClick(url) {
  window.gtag("event", "onClick", {
    event_category: url,
    event_label: "TesEventLabel1",
    value: "TesValue1",
  });
}
