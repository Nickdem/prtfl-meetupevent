export class Timetable {
  private elms: NodeListOf<HTMLButtonElement>;

  constructor(elms: NodeListOf<HTMLButtonElement>) {
    this.elms = elms;
  }

  private createRow() {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    tr.classList.add("timetable-description");
    td.colSpan = 3;
    td.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas suscipit corrupti tenetur voluptas optio odit facere obcaecati eum in.";
    tr.appendChild(td);
    return tr;
  }

  private clickHandler(e: Event) {
    const btn = <HTMLButtonElement>e.target;
    const row = <Element>btn.parentNode.parentNode;
    if (btn.innerText === "+") {
      row.insertAdjacentElement("afterend", this.createRow());
      btn.innerText = "-";
    } else {
      row.nextElementSibling.remove();
      btn.innerText = "+";
    }
  }

  init() {
    for (const btn of this.elms) {
      btn.addEventListener("click", (e) => {
        this.clickHandler(e);
      });
    }
  }
}
