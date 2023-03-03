import "./index.html";
import "./index.less";
import { Menu } from "./scripts/menu";
import { Timer } from "./scripts/timer";

window.addEventListener("DOMContentLoaded", () => {
  const navigationContainer: Element =
    document?.querySelector(".header-navigation");
  const menuButton: HTMLButtonElement = document?.querySelector(".header-menu");
  const timerItems = document.querySelectorAll(".timer-item");

  const menu = new Menu(navigationContainer, menuButton);
  menu.init();

  const t = new Timer(timerItems);
  t.init();
});
