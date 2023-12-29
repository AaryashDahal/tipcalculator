const amount = document.getElementById('#cont');
const percent = document.getElementById('#cont2');
const btn = document.getElementById('#cont3');
const total = document.getElementById('#cont4');

function calculate() {

    const amountvalue = amount.value;
    const percentvalue = percent.value;
    const totalvalue = amountvalue * (1 + percentvalue / 100);
    console.log(totalvalue);
}


btn.addEventListener("click", calculate);