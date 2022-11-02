const cellMaker = document.querySelector(".cell-container");

for (let i = 1; i <= 100; i++) {

    let num = i;
    let bgCell = "bg-primary"
    if (i % 3 === 0 && i % 5 === 0) {
        num = "FizzBuzz"
        console.log(num)
        bgCell = "bg-danger"
    }
    else if (i % 3 === 0) {
        num = "Fizz"
        console.log(num)
        bgCell = "bg-success"
    }
    else if (i % 5 === 0) {
        num = "Buzz"
        console.log(num)
        bgCell = "bg-warning"
    }
    else {
        console.log(num)
    }


    cellMaker.innerHTML += `<div class="cell fw-bold ${bgCell}">${num}</div>`

}



