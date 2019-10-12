/*
Metoda filter() tworzy nową tablicę z wszystkimi elementami, 
które przechodzą test określony w postaci funkcji.
*/


function isBigEnough(element) {
    return element.id == 5 || element.id == 15;
  }


function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
      const dataRow = res.filter(isBigEnough)

      console.log("TCL: getPost -> filtrowane", dataRow)
       
    })
    
}



getPost()