

const data = new Date()
console.log("TCL: data", data)

const localData = new Date().toLocaleString()
console.log("TCL: localData", localData)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour : 'numeric', minute: 'numeric'};
const localDataAndOption = new Date().toLocaleString("en-EN", options)
console.log("TCL: localDataAndOption", localDataAndOption)

