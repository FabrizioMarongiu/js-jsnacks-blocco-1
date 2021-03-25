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

// var numero = parseInt(prompt('Inserisci un numero. Se è pari verrà stampato, altrimenti verrà stampato il numero successivo a quello che hai inserito'));

// if ( numero % 2 === 0 ){
//     console.log('Il numero che hai inserito è pari. Hai inserito il numero: ', numero);
// }else{
//     console.log('Il numero che hai inserito è dispari, il successivo numero è: ', ++numero);
// }










// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


// var nomi = ['paolo', 'fabrizio', 'laura', 'andrea', 'susanna'];

// var cognomi = ['rossi', 'bianchi', 'verdi', 'boschi', 'bruni'];

// var lista = 3;

// var invitati = [];

// for ( i = 0; i <  lista; i++){

//     var nomeRandom = Math.floor(Math.random() * nomi.length);

    
//     var cognomeRandom = Math.floor(Math.random() * cognomi.length);

//     var personaRandom = nomi[nomeRandom] + ' ' + cognomi[cognomeRandom];

//     invitati.push(personaRandom);

//     console.log('La ', i + 1 , ' persona invitata è: ', personaRandom);
// }

// console.log('La lista degli invitati è: ', invitati);









// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri = [ 10 , 6 , 644 , 321 , 90 , 412 , 65 , 77 , 98 , 994 ];

somma = 0;

for ( var i = 0; i < numeri.length; i++ ){

    if ( i % 2 !== 0 ){

        console.log('Questo numero è in posizione dispari e verrà sommato: ', numeri[i]);

        somma += numeri[i];

        console.log('La somma parziale è; ', somma); 

    }
}

console.log('La somma totale dei numeri in posizione dispari è: ', somma);