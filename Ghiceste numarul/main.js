let btn = document.getElementById('btn');
let output = document.getElementById('outputnumber');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('usernumber').value;
    if (input == number){
        output.innerHTML = `Ai ghicit, numarul este ${number}👍`
    } else if ( input < number){
        output.innerHTML = "Numarul este prea mic👎"
    };
    if( input > number){
        output.innerHTML = "Numarul este prea mare👎"
    }
})