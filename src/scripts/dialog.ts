import { IBtnOrLink, IButtons } from "./interfaces";

export class Dialog {
  private elms: IButtons;
  private dialog;

  constructor(elms: IButtons, dialog: HTMLDialogElement) {
    this.elms = elms;
    this.dialog = dialog;
  }

  private baseTemplate(text: string) {
    const template = `
    <form method='dialog'>
    <p>Template for ${text}</p>
    <button class='button button--darkgrey'>x</button>
    </form>`;
    this.dialog.innerHTML = template;
  }

  private clickHandler(e: Event) {
    let el = <IBtnOrLink>e.target;
    if (!el.id && el.tagName === "IMG") {
      el = <HTMLLinkElement>el.parentNode;
    }

    this.baseTemplate(el.id);
    this.dialog.showModal();
  }

  init() {
    for (const btn of this.elms) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.clickHandler(e);
      });
    }

    this.dialog.addEventListener("close", () => {
      this.dialog.innerText = "";
    });
  }
}
