//PERMETTERE ALL'UTENTE DI INSERIRE UNA PAROLA
const user_word = prompt("Inserisci una parola a tua scelta");

//CREO UNA FUNZIONE CHE CAPOVOLGE LA PAROLA AL CONTRARIO
function reverse(){
    //CREO UNA VARIABILE PER LA PAROLA AL CONTRARIO
    let word_reverse = user_word.split("").reverse().join("");

    //VERIFICO SE LA PAROLA INSERITA E UGUALE ALLA PAROLA AL CONTRARIO
    if(user_word == word_reverse){
        return true;
    }

    return false;
}

//RICHIAMO LA FUNZIONE ASSOCIANDOLA AD UNA VARIABILE
let comparison = reverse();

//VERIFICO LA CONDIZIONE DELL'UGUAGLIANZA
if(comparison){
    console.log("É palindroma");
}
else{
    console.log("Non è palindroma");
}