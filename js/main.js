const randomNumbers = [];

for (i = 0 ; i < 5 ; i++){
    randomNumbers.push( generateUniqueRandomNumber(randomNumbers, 0, 100));
}

document.getElementById('random-numbers').innerHTML = randomNumbers.join(', ');
console.log(randomNumbers);

setTimeout( hideNumbers, 5000 );
setTimeout( askUser, 5700, randomNumbers );

function hideNumbers(){
    document.getElementById('random-numbers').innerHTML = "";
}

function askUser(promptNumber){
    const userNumbers = [];
    const guessedNumbers = [];

    for (i = 0 ; i < 5 ; i++){
        const currentNumber = parseInt( prompt('inserisci un numero'));

        if (!isNaN(currentNumber)){

            userNumbers.push(currentNumber);

            if (promptNumber.includes(currentNumber)){
                // l'utente ha indovinato nu numero
                pushUnique(guessedNumbers, currentNumber);
            }
        }
    }

    const numberPrefix = (guessedNumbers !== 1) ? "numeri" : "numero";

    document.getElementById('random-numbers').innerHTML = `Hai indovinato
    ${guessedNumbers.length} ${numberPrefix} validi, ovvero:
    ${guessedNumbers.join(', ')}, sui numeri mostrati
    che erano ${promptNumber.join(', ')}` ;
}

function pushUnique(array, elementToAdd){
    if (!array.includes(elementToAdd)){
        array.push(elementToAdd);
        return array;
    }
}

function generateUniqueRandomNumber( numsBlacklist, min, max){
    let check = false;
    let randomInt;

    while ( !check ){
        randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt) ){
            check = true;
        }
    }
    return randomInt;
}