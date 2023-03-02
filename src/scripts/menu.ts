export class Menu {
  private openClsName = "header-navigation--open";
  private el;
  private btn;

  constructor(el: Element, btn: HTMLButtonElement) {
    this.el = el;
    this.btn = btn;
  }

  public clickHandler() {
    if (this.btn.innerText == "x") {
      this.close();
    } else {
      this.open();
    }
  }

  private open() {
    this.el.classList.add(this.openClsName);
    this.btn.innerText = "x";
  }

  private close() {
    this.el.classList.remove(this.openClsName);
    this.btn.innerText = "menu";
  }
}
