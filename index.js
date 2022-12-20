// code your solution here

const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]

function superbowlWin(year, result) {
   
    const win = year.find( year => year.result === "W")
   if (win) {
    return win.year;
   } else {
    return undefined
   }
   
}
