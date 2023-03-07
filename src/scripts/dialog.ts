export class Dialog {
  private elms: NodeListOf<HTMLButtonElement>;
  private dialog;

  constructor(elms: NodeListOf<HTMLButtonElement>, dialog: HTMLDialogElement) {
    this.elms = elms;
    this.dialog = dialog;
  }

  private prizeTemplate() {
    const template = `
    <form method='dialog'>
    <p>hehehehheehhePRIze</p>
    <button class='button button--darkgrey'>x</button>
    </form>`;
    this.dialog.innerHTML = template;
  }

  private sponsorTemplate() {
    const template = `<form method='dialog'>
    <p>hehehehheehheSposNsors</p>
    <button class='button button--darkgrey'>x</button>
    </form>`;
    this.dialog.innerHTML = template;
  }

  private clickHandler(e: Event) {
    const btn = <HTMLButtonElement>e.target;

    if (btn.id === "prize") {
      this.prizeTemplate();
    } else if (btn.id === "sponsor") {
      this.sponsorTemplate();
    }

    this.dialog.showModal();
  }

  init() {
    for (const btn of this.elms) {
      btn.addEventListener("click", (e) => {
        this.clickHandler(e);
      });
    }

    this.dialog.addEventListener("close", () => {
      this.dialog.innerText = "";
    });
  }
}
