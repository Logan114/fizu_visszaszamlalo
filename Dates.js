export default class Dates {
  constructor() {
    const d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth();
    if (this.getDay<10)
    {
      this.nextMonth=this.month

    }
    else{

      this.nextMonth = this.month + 1;
    }
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
      const dayOfWeek = nextDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 1 && dayOfWeek !== 6) {
        weekdays.push(day);
        console.log(day);
        console.log(nextDate, dayOfWeek);
      }
    });
    return weekdays;
  }

  SzelErt(szelsoertek) {
    return new Date(this.year, this.nextMonth, szelsoertek);
  }
}
