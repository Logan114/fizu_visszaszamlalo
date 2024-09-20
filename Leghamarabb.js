import Dates from "./Dates.js";

export default class Leghamarabb {
  constructor() {
    this.Dates = new Dates();
    this.calculateMillisec();
    this.calculateDays();
    this.calculateHours();
    this.calculateMinutes();
  }

  calculateMillisec() {
    const legkorabbiDatum = this.Dates.SzelErt(this.Dates.legkorabbi);
    console.log(`legkorabbiDatum ${legkorabbiDatum}`);
    this.mili = legkorabbiDatum - new Date();
  }

  calculateDays() {
    this.days = Math.ceil(this.mili / (1000 * 60 * 60 * 24));
  }

  calculateHours() {
    this.hours = Math.floor(
      (this.mili % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  calculateMinutes() {
    this.minutes = Math.floor((this.mili % (1000 * 60 * 60)) / (1000 * 60));
  }
}
