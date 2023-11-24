function counting(){
    let from = +document.getElementById("from").value
    let to = +document.getElementById("to").value

    for ( i=from ; i<=to ; i++){

        let output = document.getElementById("result")
            // console.log(i)
        output.innerHTML += ` ${i},   ` 
    }
}