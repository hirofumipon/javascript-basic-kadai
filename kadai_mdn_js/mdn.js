const date = new Date();

const [year, month, day] = [date.getFullYear(), date.getMonth()+1, date.getDate()];

console.log(year,'年', month,'月', day,'日');