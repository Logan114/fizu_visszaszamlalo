const daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let payDays = []
for (let i=6; i<=10;i++){
    payDays.push(i) //lusta voltam kézzel beirogatni a dátumokat, na
}
const d = new Date()
const year = d.getFullYear()
let month = d.getMonth() //nulláról számolja a hónapokat, pl szeptember szerinte 08
let nextMonth = month+2 //következő hónap, +1 mert ugye nulláról számolja
fizunap = 0
while (fizunap < 1 && fizunap >=5){
    let nextMonthDays = new Date(`${year}-${nextMonth}-05`)
}
console.log (daysoftheweek[nextMonthDays.getDay()])
