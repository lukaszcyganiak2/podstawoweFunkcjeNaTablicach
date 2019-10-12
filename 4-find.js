/*
Metoda find() zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji testującej. W przeciwnym razie, 
gdy żaden element tablicy nie spełni warunku, zwracana jest wartość undefined.
*/


function isBigEnough(element) {
    return element.id === 19;
  }


function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
      const tylkoJeden = res.find(isBigEnough)
      console.log("TCL: getPost -> tylkoJeden", tylkoJeden)

       
    })
    
}



getPost()