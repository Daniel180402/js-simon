let randomNumbers = [];
let userNumbers = [];
let writeRandomNumbers = document.getElementById("random-numbers");

for( i=0; i <  5; i++){
    randomNumbers.push(randomInteger(1, 100));
}

writeRandomNumbers.innerHTML = "i numeri sono: " + randomNumbers;
console.log(randomNumbers);

setTimeout(userNumPrompt, 3000);

//   per verificare la presenza di un elemento x in un array y => y.includes(x)

for(i = 0; i < 5; i++){
    if ( randomNumbers.include(userNum)){
        console.log("numero " + i + " corretto")
    }
    else{
        console.log("numero " + i + " errato")
    }
}

function randomInteger(min, max){
    if (isNaN(parseInt(min)) || isNaN(parseInt(max))){
        console.error("randomInteger(min, max) needs two numbers as argument");
    }
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}


function userNumPrompt(){
    for( i=0; i < 5; i++){
        userNumbers.push(parseInt(prompt("inserisci il numero")));
    }
    return userNumbers;
}

