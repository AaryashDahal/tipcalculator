const amount = document.getElementById('bill');
const percent = document.getElementById('Tip');
const btn = document.getElementById('buttn');
const total = document.getElementById('total');
// console.log(amount.value,percent.value);
function calculate() {

    const amountvalue = amount.value;
    const percentvalue = percent.value;
    const totalvalue = amountvalue * (percentvalue / 100);
    total.innerText= 'Total:'+totalvalue

}


btn.addEventListener("click", calculate);