export default class Dates {
  constructor() {
    const d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth(); // Months are zero-based
    this.nextMonth = this.month + 2; // Next month (add 2)
    this.daysoftheweek = [
      "Vasárnap",
      "Hétfő",
      "Kedd",
      "Szerda",
      "Csütörtök",
      "Péntek",
      "Szombat",
    ];
    this.payDays = this.generatePayDays();
    this.hetkoznapok = this.calculateWeekdays();
    this.legkorabbi = Math.min(...this.hetkoznapok);
    this.legkesobb = Math.max(...this.hetkoznapok);
  }

  generatePayDays() {
    let payDays = [];
    for (let i = 6; i <= 10; i++) {
      payDays.push(i);
    }
    return payDays;
  }

  calculateWeekdays() {
    let weekdays = [];
    this.payDays.forEach((day) => {
      const nextDate = new Date(this.year, this.nextMonth, day);
      if (nextDate.getDay() <= 5 && nextDate.getDay() >= 1) {
        weekdays.push(day);
      }
    });
    return weekdays;
  }

  SzelErt(szelsoertek) {
    return new Date(`${this.year}-${this.nextMonth}-${szelsoertek}`);
  }

 
  minden(fizunap) {
    return `${this.napok(fizunap)} nap ${this.orak(fizunap)} óra ${this.perc(
      fizunap
    )} perc`;
  }
}
