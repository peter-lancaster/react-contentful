function dateReformat(inputDate) {

// Function expected input example
// 2020-07-03T00:00+01:00

// Function output example
// 3rd July 2020

const monthNum = inputDate.slice(9,10)
const dayOfMonthNum = inputDate.slice(6,7)
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


function formatDayOfMonth(dayOfMonthNum) {

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




    console.log("in dateReformat")

    return 



}

export default dateReformat 