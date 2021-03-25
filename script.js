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

// var somma = 0;

// var maxNum = 5;

// var counter = 0;

// while ( counter < maxNum){

//     var numero = parseInt(prompt('Inserisci un numero'));

//     console.log('Il numero che hai inserito è: ', numero);

//      somma += numero;

//      console.log('La somma parziale è: ' , somma);

//      counter++;
// }

// console.log('La somma totale dei numeri che hai inserito è: ', somma);









// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var numero = parseInt(prompt('Inserisci un numero. Se è pari verrà stampato, altrimenti verrà stampato il numero successivo a quello che hai inserito'));

if ( numero % 2 === 0 ){
    console.log('Il numero che hai inserito è pari. Hai inserito il numero: ', numero);
}else{
    console.log('Il numero che hai inserito è dispari, il successivo numero è: ', ++numero);
}