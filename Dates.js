export default class Dates {
  constructor() {
    const d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth() + 1;

    if (d.getDate() > 10) {
      this.nextMonth = this.month + 1;
      if (this.nextMonth > 12) {
        this.nextMonth = 1;
        this.year += 1;
      }
    } else {
      this.nextMonth = this.month;
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
  }

  get10thDate() {
    return new Date(this.year, this.nextMonth - 1, 10);
  }
}
