import Dates from './Dates.js'; // Import the Dates class

export default class Leghamarabb {
  constructor() {
    this.Dates = new Dates(); // Instantiate the Dates class
    this.calculateMillisec();
    this.calculateDays();
    this.calculateHours();
    this.calculateMinutes();
  }

  calculateMillisec() {
    const legkorabbiDatum = this.Dates.get10thDate();
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
