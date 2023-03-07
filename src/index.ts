import "./index.html";
import "./index.less";
import { Form } from "./scripts/form";
import { Menu } from "./scripts/menu";
import { Timer } from "./scripts/timer";

window.addEventListener("DOMContentLoaded", () => {
  const navigationContainer: Element =
    document.querySelector(".header-navigation");
  const menuButton: HTMLButtonElement = document.querySelector(".header-menu");
  const timerItems = document.querySelectorAll(".timer-item");
  const formContainer: HTMLFormElement = document.querySelector(".form");

  const menu = new Menu(navigationContainer, menuButton);
  menu.init();

  const timer = new Timer(timerItems);
  timer.init();

  const form = new Form(formContainer);
  form.init();
});
