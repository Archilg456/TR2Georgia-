"use strict"


let currencyEl_one = document.getElementById('currency-one');
let currencyEl_two = document.getElementById('currency-two');
let amountEl_one = document.getElementById('amount-one');
let amountEl_two = document.getElementById('amount-two');

let rateEl = document.getElementById('rate');
let swap = document.getElementById('swap');


function calculate() {
  let currency_one = currencyEl_one.value;
  let  currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/09bfba01301e487a4eeb0bc3/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {


      let rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  let temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();