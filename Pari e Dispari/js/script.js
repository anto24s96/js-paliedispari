//PERMETTERE ALL'UTENTE DI INSERIRE PARI O DISPARI
const odd_or_even = prompt("Inserisci 'pari' o 'dispari'");
console.log(odd_or_even);

//CHIEDERE ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

//CREO UNA FUNZIONE PER GENERARE UN NUMERO DA 1 A 5
function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

//CREO LA VARIABILE PER IL COMPUTER ASSOCIANDOLA ALLA FUNZIONE CHE GENERA IL NUMERO
let compNumber = randomNumber();
console.log(compNumber);

//CREO UNA FUNZIONE SOMMA
function numberSum(num1, num2){
    let risultato = num1 + num2;

    return risultato;
}

// RICHIAMO LA FUNZIONE SOMMA ASSOCIANDOLA A UNA VARIABILE
let sum = numberSum(userNumber, compNumber);
console.log(sum)

//CREO UNA FUNZIONE PER VERIFICARE SE SOMMA É PARI O DISPARI
function oddOrEven(num){
    if(num%2 == 0){
        return `pari`;
    }
    else{
        return `dispari`;
    }
}

//CREO UNA VARIABILE PER LA FUNZIONE PARI/DISPARI E ASSOCIO LA SOMMA ALLA FUNZIONE POI STAMPO
let pd = oddOrEven(sum);
console.log("La somma è: " + pd);

//VERIFICA DEL VINCITORE
if(odd_or_even == pd){
    console.log("Hai vinto!");
}
else{
    console.log("Hai perso!")
}


