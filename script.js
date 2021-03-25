// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// CICLO FOR
// var somma = 0 ;

// var maxNum = 5;

// for ( var i = 0; i < maxNum; i++){
//     var numero = parseInt(prompt('Inserisci un numero'));

//     console.log('Il numero che hai inserito è: ', numero);

//     somma += numero;

//     console.log('La somma parziale è: ' , somma);

// }

// console.log('La somma totale dei numeri che hai inserito è: ', somma);




// CICLO WHILE

var somma = 0;

var maxNum = 5;

var counter = 0;

while ( counter < maxNum){

    var numero = parseInt(prompt('Inserisci un numero'));

    console.log('Il numero che hai inserito è: ', numero);

     somma += numero;

     console.log('La somma parziale è: ' , somma);

     counter++;
}

console.log('La somma totale dei numeri che hai inserito è: ', somma);