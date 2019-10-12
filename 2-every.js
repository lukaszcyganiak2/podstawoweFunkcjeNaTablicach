/*
Metoda  every() sprawdza, czy wszystkie elementy w tablicy przechodzą test 
zrealizowany w postaci dostarczonej funkcji.
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
      const every = res.every(onlyOne)
      console.log("TCL: getPost -> every", every)
      if(every) {
        res.forEach(element => {
          console.log(element)
        });
      }

      /*  alternatywa dla funkcji every ()*/
      // let counterUserID = 0

      // res.forEach(element => {
      //   if(element.userId == 1 || element.userId == 2 ) {
      //     counterUserID += 1
      //   }
      //   console.log(counterUserID)
      //   if(counterUserID == 100 ) {
      //     console.log(element)
      //   }
      // });

       
    })
    
}



getPost()