import { Dialog } from "./dialog";
import { Events } from "./events";
import { Form } from "./form";
import { IButtons } from "./interfaces";
import { Menu } from "./menu";
import { Timer } from "./timer";
import { Timetable } from "./timetable";

export default function init() {
  const navigationContainer: Element =
    document.querySelector(".header-navigation");
  const menuButton: HTMLButtonElement = document.querySelector(".header-menu");
  const timerItems = document.querySelectorAll(".timer-item");
  const timetableBtns: IButtons =
    document.querySelectorAll(".timetable-button");
  const formContainer: HTMLFormElement = document.querySelector(".form");
  const dialogBtns: IButtons = document.querySelectorAll(".dialog-btn");
  const dialogContainer: HTMLDialogElement = document.querySelector(".dialog");
  const eventsBtn: HTMLButtonElement = document.querySelector(".events-button");

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

  const events = new Events(eventsBtn);
  events.init();
}
