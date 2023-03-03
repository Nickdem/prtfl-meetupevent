export class Menu {
  private openCls = "header-navigation--open";
  private navContainer;
  private menuBtn;

  constructor(navContainer: Element, menuBtn: HTMLButtonElement) {
    this.navContainer = navContainer;
    this.menuBtn = menuBtn;
  }

  public clickHandler() {
    if (this.menuBtn.innerText == "x") {
      this.close();
    } else {
      this.open();
    }
  }

  private open() {
    this.navContainer.classList.add(this.openCls);
    this.menuBtn.innerText = "x";
  }

  private close() {
    this.navContainer.classList.remove(this.openCls);
    this.menuBtn.innerText = "menu";
  }

  init() {
    this.menuBtn.onclick = () => {
      this.clickHandler();
    };
  }
}
