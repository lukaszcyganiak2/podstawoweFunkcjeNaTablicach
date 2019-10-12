/*
Metoda  every() sprawdza, czy wszystkie elementy w tablicy przechodzą test zrealizowany w postaci dostarczonej funkcji.
zwraca true lub false 

*/


function onlyOne(element) {
    return element.userId === 1;
  }


function all(element) {
    return element.userId > 0 && element.userId < 11
}

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
      const every = res.every(all)
      console.log("TCL: getPost -> every", every)

       
    })
    
}



getPost()