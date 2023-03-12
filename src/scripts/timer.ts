import { IElements, ITimeObj } from "./interfaces";

export class Timer {
  private eventTime: number = new Date(2024, 0).getTime();
  private elms: IElements;

  constructor(elms: IElements) {
    this.elms = elms;
  }

  private getCurrentDate() {
    return Date.now();
  }

  private floor(num: number) {
    return Math.floor(num);
  }

  private getTimeLeft(): ITimeObj {
    const s = (this.eventTime - this.getCurrentDate()) / 1000;
    const m = s / 60;
    const h = m / 60;
    const days = this.floor(h / 24);
    const hours = this.floor(h % 24);
    const minutes = this.floor(m % 60);
    const seconds = this.floor(s % 60);
    return { days, hours, minutes, seconds };
  }

  private setTimerHTML() {
    const time = this.getTimeLeft();

    for (const i of this.elms) {
      const elId: string = i.id;
      const value = time[elId].toString();
      i.innerHTML = value.length > 1 ? value : "0" + value;
    }
  }

  init() {
    setInterval(() => {
      this.setTimerHTML();
    }, 1000);
  }
}
