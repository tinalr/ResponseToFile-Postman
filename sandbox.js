// ////_____ SETTING UP VARIABLES _____
// const resJSON = [{"id":1,"name":"The Russian","type":"fiction","available":true},{"id":2,"name":"Just as I Am","type":"non-fiction","available":false}]; 
// //console.log(resJSON) //resJSON is JSON object
// const resStr = JSON.stringify(resJSON); 
// //console.log(resStr) // resStr is a JSON string
// const resObj = JSON.parse(resStr); 
// //console.log(resObj) // reObj is an JS object

// ////_____ GET THE HEADER ROW IN CSV FORMAT _____
// const fields = Object.keys(resObj[0]) 
// //console.log(fields) //fields is an array
// const csvColumns = fields.toString();
// //console.log(csvColumns) //csvColumns is the first line of my csv file

// ////_____ GET A SINGLE ROW OF DATA _____
// const rows = Object.values(resObj[0])
// //console.log(rows) // rows is an object
// const csvRows = rows.toString()
// console.log(csvRows) // csvRows is a string

////_____ GET ALL THE ROWS OF DATA IN CSV FORMAT _____
// const getRows = () => {
//     const values = Object.entries(resObj).forEach
//     const string = JSON.stringify(values)
//     console.log(values)
// }
// getRows()

// const getRows = () => {
//     let i = 0
//     const row = Object.values(resObj)
//     do {
//         const csvRow = row.toString()
//         console.log(csvRow)
//         i++
//     } while (i < 6)
// }
// console.log(getRows())

    //const rows = Object.values(resObj)
    // //console.log(rows) // rows is an object
    // for (let i = 0; i < rows.length; i++) {
    //     const csvRows = rows[i].toString()
    //     console.log(csvRows) // csvRows is 
    // }

    ////_____ SETTING UP VARIABLES _____
// const resJSON = [{"id":1,"name":"The Russian","type":"fiction","available":true},{"id":2,"name":"Just as I Am","type":"non-fiction","available":false}]; 

// const resJSON = response.result
// //console.log(resJSON) //resJSON is JSON object
// const resStr = JSON.stringify(resJSON); 
// //console.log(resStr) // resStr is a JSON string
// const resObj = JSON.parse(resStr); 


// // csvColumns is my first line of the csv file
// const resObj = JSON.parse(responseBody); // reObj is an object
// const fields = Object.keys(resObj[0]) 
// //fields is an array
// const csvColumns = fields.toString(); 

// // // csvRows will be an array of arrays, each array will contain a line for the csv file
// // const runResponse = () => {
// //     const rows = Object.entries((responseBody[0]))
// //     return rows
// // }
// // const response = runResponse()
// const resStrtoArr = () => {
//     const array = []
//     for (i in responseBody) {
//         array.push(responseBody[i])
//     }
//     return array
// }
// const resArr = resStrtoArr(); console.log(typeof resArr)
// // const accessValues = (values) => {
// //     const data = values.map((index)=>{
// //         return values[index]
// //     });
// //     return data
// // }
// // const csvRows = accessValues()

// // //csvContent is the function that will put csvColumns and csvRows together into a multi-line string of csv formatted data
// // const csvContent = (csvColumns, csvRows) => {
// //     return data
// // }

// // csvSave is the function that will save the output of csvContent to a .csv file

// // https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side