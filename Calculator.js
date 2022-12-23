//console.log(eval("2 + 3"));

let input = document.getElementById('calcField');
let number = document.querySelectorAll('#number');
//console.log(input.value);


for(let num of number){
    num.addEventListener('click', function(e){
        input.value = e.target.value;
        //console.log(e.target.value);
    })
}
