export default class Dates {
  constructor() {
    const d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth() + 1; // 0-indexelt hónap, ezért hozzáadunk +1-et

    // Ha a mai nap dátuma kisebb, mint a legkorábbi fizetési nap, az aktuális hónapot használjuk
    if (d.getDate() < 10) {
      this.nextMonth = this.month;
    } else {
      // Ha a mai nap nagyobb, mint a legkorábbi, akkor a következő hónapot használjuk
      this.nextMonth = this.month + 1;
      if (this.nextMonth > 12) {
        this.nextMonth = 1; // Év vége esetén januárra ugrunk
      }
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
      payDays.push(i); // A fizetési napok: 6-tól 10-ig
    }
    return payDays;
  }

  calculateWeekdays() {
    let weekdays = [];
    this.payDays.forEach((day) => {
      const nextDate = new Date(this.year, this.nextMonth - 1, day); // -1, hogy helyesen kezeljük a hónapokat (0-indexelés)
      const dayOfWeek = nextDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Vasárnap (0) és szombat (6) kizárása
        weekdays.push(day);
      }
    });
    return weekdays;
  }

  SzelErt(szelsoertek) {
    return new Date(this.year, this.nextMonth - 1, szelsoertek); // Hónapot -1, mert a Date osztály 0-indexelt hónapokat vár
  }
}
