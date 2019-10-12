
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(res => {
    console.log("TCL: getPost -> res", res)

       res.forEach(element => {
        const para = document.createElement('p')
        para.innerHTML = element.body
        para.setAttribute('id', "body-text"+ element.id  )
        para.setAttribute('class', 'body-class' + element.userId)
        console.log("TCL: getPost -> para", para)
        
       if(element.id == 5) {
           console.log(element)
       }
        
       });
    })
    
}




getPost()