import "./index.html";
import "./index.less";
import { Dialog } from "./scripts/dialog";
import { Form } from "./scripts/form";
import { Menu } from "./scripts/menu";
import { Timer } from "./scripts/timer";
import { Timetable } from "./scripts/timetable";

window.addEventListener("DOMContentLoaded", () => {
  const navigationContainer: Element =
    document.querySelector(".header-navigation");
  const menuButton: HTMLButtonElement = document.querySelector(".header-menu");
  const timerItems = document.querySelectorAll(".timer-item");
  const timetableBtns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".timetable-button");
  const formContainer: HTMLFormElement = document.querySelector(".form");
  const dialogBtns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".dialog-btn");
  const dialogContainer: HTMLDialogElement = document.querySelector(".dialog");

  const menu = new Menu(navigationContainer, menuButton);
  menu.init();

  const timer = new Timer(timerItems);
  timer.init();

  const form = new Form(formContainer);
  form.init();

  const timetable = new Timetable(timetableBtns);
  timetable.init();

  const dialog = new Dialog(dialogBtns, dialogContainer);
  dialog.init();
});
