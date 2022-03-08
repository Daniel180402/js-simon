let randomNumbers = [];
let writeRandomNumbers = document.getElementById("random-numbers");

for( i=0; i <  5; i++){
    randomNumbers.push(randomInteger(1, 100));
}

console.log(randomNumbers);
writeRandomNumbers.innerHTML = "i numeri sono: " + randomNumbers;





function randomInteger(min, max){
    if (isNaN(parseInt(min)) || isNaN(parseInt(max))){
        console.error("randomInteger(min, max) needs two numbers as argument");
    }
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}