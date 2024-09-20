export default class Dates{
    const d = new Date()
    const year = d.getFullYear()
let month = d.getMonth() //nulláról számolja a hónapokat, pl szeptember szerinte 08
let nextMonth = month+2 //következő hónap, +1 mert ugye nulláról számolja
let day = 0
const daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let payDays = []
for (let i=6; i<=10;i++){
    payDays.push(i) //lusta voltam kézzel beirogatni a dátumokat, na
}
let hetkoznapok = [] //azok a napok a payDays listából amik hétköznapok



payDays.forEach(day => {
    const nextDate = new Date(`${year}-${nextMonth}-${day}`)
    if (nextDate.getDay() <=5 && nextDate.getDay() >= 1){
        hetkoznapok.push(day)
        console.log(hetkoznapok)
    }
});

let legkorabbi = Math.min(...hetkoznapok)
let legkesobb = Math.max(...hetkoznapok)

}