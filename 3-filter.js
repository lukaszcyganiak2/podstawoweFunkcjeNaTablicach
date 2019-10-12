/*
Metoda filter() tworzy nową tablicę z wszystkimi elementami, 
które przechodzą test określony w postaci funkcji.
*/


function isBigEnough(element) {
    return element.id > 19 && element.id < 50;
  }


function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
      const filtrowane = res.filter(isBigEnough)
      console.log("TCL: getPost -> filtrowane", filtrowane)
       
    })
    
}



getPost()