export class Timer {
  private eventTime: number = new Date(2024, 0).getTime();
  constructor() {}

  private getCurrentDate() {
    return Date.now();
  }

  private floor(num: number) {
    return Math.floor(num);
  }

 getTimeLeft() {
    const s = (this.eventTime - this.getCurrentDate()) / 1000;
    const m = s / 60;
    const h = m / 60;
    const days = this.floor(h / 24);
    const hours = this.floor(h % 24);
    const minutes = this.floor(m % 60);
    const seconds = this.floor(s % 60);
    console.log(days, hours, minutes, seconds);
  }
}
