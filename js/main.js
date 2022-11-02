const cellMaker = document.querySelector(".cell-container");

for (let i = 1; i <= 100; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        cellMaker.innerHTML += `<div class="cell fw-bold bg-danger">FizzBuzz</div>`
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
        cellMaker.innerHTML += `<div class="cell fw-bold bg-success">Fizz</div>`
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
        cellMaker.innerHTML += `<div class="cell fw-bold bg-warning">Buzz</div>`
    }
    else {
        console.log(i)
        cellMaker.innerHTML += `<div class="cell fw-bold bg-primary">${i}</div>`
    }




}



