import Leghamarabb from "./Leghamarabb.js";
export default class LeghamarabbKiiras {
  constructor() {
    this.leghamarabb = new Leghamarabb();
    this.kiiras();
  }

  kiiras() {
    const daysHTML = $(".nap");
    const hoursHTML = $(".ora");
    const minutesHTML = $(".perc");
    daysHTML.html(`<p>${this.leghamarabb.days} Nap</p>`);
    hoursHTML.html(`<p>${this.leghamarabb.hours} Óra</p>`);
    minutesHTML.html(`<p>${this.leghamarabb.minutes} perc*</p>`);
  }
}
