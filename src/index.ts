import "./index.html";
import "./index.less";
import { Menu } from "./scripts/menu";
import { Timer } from "./scripts/timer";

window.addEventListener("DOMContentLoaded", () => {
  const m = document?.querySelector(".header-navigation");
  const b: HTMLButtonElement = document?.querySelector(".header-menu");

  const menu = new Menu(m, b);

  b.onclick = () => {
    menu.clickHandler();
  };

  const t = new Timer();

  // setInterval(() => {
  //   t.getTimeLeft()
  // }, 1000)
});
