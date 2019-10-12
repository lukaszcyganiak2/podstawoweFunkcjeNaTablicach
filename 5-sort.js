

function compareNumbers(a, b) {
    return  b.userId - a.userId && b.id - a.id
 }



function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
      const sort = res.sort(compareNumbers)
      console.log("TCL: getPost -> sort", sort)

    })
    
}



getPost()