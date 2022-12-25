//console.log(eval(test));

let input = document.getElementById('calcField');
let number = document.querySelectorAll('#number');
let operator = document.querySelectorAll('#operator');
let calculate = document.getElementById('calculate');


let operation = '';

for(let num of number){
    num.addEventListener('click', function(e){
        operation = operation + num.value;
        input.value = operation;
    })
}

for(let op of operator){
    op.addEventListener('click', function(e){
        operation = operation + op.value;
        input.value = operation;
    })
}



function doCalculation(){
    input.value = eval(operation);
    operation = ''
}

calculate.addEventListener('click', doCalculation);
