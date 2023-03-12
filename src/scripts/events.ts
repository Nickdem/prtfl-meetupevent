export class Events {
  private btn: HTMLButtonElement;
  private list = document.querySelector(".events-list");
  private viewText = "View More";
  private hideText = "Hide";
  private maxLength = 16;
  private step = 4;

  constructor(btn: HTMLButtonElement) {
    this.btn = btn;
  }

  private getLength() {
    return this.list.children.length;
  }

  private getChildrens() {
    return this.list.children;
  }

  private show() {
    const length = this.getLength();
    for (let i = length; i < length + this.step; i++) {
      const currLength = this.getLength();
      const elem = this.getChildrens()[currLength - this.step];
      const newElem = <Element>elem.cloneNode(true);
      newElem.id = `event-${i + 1}`;
      this.list.insertAdjacentElement("beforeend", newElem);
    }

    if (length + this.step >= this.maxLength) {
      this.btn.innerText = this.hideText;
    }
  }

  private hide() {
    const length = this.getLength();
    for (let i = 0; i <= length; i++) {
      if (i > this.step) {
        document.getElementById(`event-${i}`).remove();
      }
    }
    this.btn.innerText = this.viewText;
  }

  init() {
    this.btn.addEventListener("click", () => {
      if (this.btn.innerText === this.viewText) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
}
