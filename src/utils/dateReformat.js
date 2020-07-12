function dateReformat(inputDate) {

// Function expected input example :
// 2020-07-03T00:00+01:00

// Function output example :
// 3rd July 2020

console.log(inputDate)

const monthNum = (inputDate.slice(6,7))-1
const dayOfMonthNum = inputDate.slice(9,10)
const year = inputDate.slice(0,4)


function formatMonthNum(monthNum) {

    const monthArray = ["January", 
                        "February", 
                        "March", 
                        "April", 
                        "May", 
                        "June", 
                        "July", 
                        "August", 
                        "September", 
                        "October", 
                        "November", 
                        "December"]

    return monthArray[monthNum]
}


function formatDaySuffix(dayOfMonthNum) {

    console.log("in formatDaySuffix")

    console.log(typeof dayOfMonthNum)
    console.log(dayOfMonthNum === 3)


    let daySuffix = ""

    switch(true) {
        case dayOfMonthNum === "1" || dayOfMonthNum === "21" || dayOfMonthNum === "31" :
            daySuffix = "st";
            break;
        case dayOfMonthNum === "2" || dayOfMonthNum === "22" :
            daySuffix = "nd";
            break;
        case dayOfMonthNum === "3" || dayOfMonthNum === "23" :
            daySuffix = "rd";
            break;
        default :
            daySuffix = "th";
            break;
    }

    return daySuffix;

}

    console.log("in dateReformat")
    console.log(dayOfMonthNum)

    return `${dayOfMonthNum}${formatDaySuffix(dayOfMonthNum)} ${formatMonthNum(monthNum)} ${year}`



}

export default dateReformat 