/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numero30 = 10
let numero31 = 6
if (numero30 > numero31) {
  console.log('il primo numero è piu grande');
} else (numero31 > numero30)
{
  console.log('Il secondo numero e piu grande');
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numerointero = 22
if (numerointero !== 5) {
  console.log('notequal');
} else {
  console.log('equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero5 = 50
if (numero5 % 5 === 0) {
  console.log('divisibile per 5');
} else {
  console.log("Il numero non è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero20 = 8
let numero21 = 16
if ((numero21 - numero20) === 8) {
  console.log('la sottrazione e uguale a 8');
} else (numero20 === 8)
{
  console.log('e uguale a 8');
}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60
const shippingCost = 10;
let ammontaretotale = totalShoppingCart + shippingCost;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita");
  console.log("Ammontare totale da addebitare: " + totalShoppingCart + " Euro");
} else {

  console.log("Costo fisso della spedizione: " + shippingCost + " Euro");
  console.log("Ammontare totale da addebitare: " + ammontaretotale + " Euro");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const scontoblackfriday = 0.20;
let scontototale = totalShoppingCart * (1 - scontoblackfriday);

if (scontototale > 50) {
  console.log("Hai diritto alla spedizione gratuita!");
  console.log("Ammontare totale da addebitare (sconto Black Friday incluso): " + scontototale + " Euro");
} else {
  let pagamentofinale = scontototale + shippingCost;
  console.log("Costo fisso della spedizione: " + shippingCost + " Euro");
  console.log("Ammontare totale da addebitare (sconto Black Friday incluso): " + pagamentofinale + " Euro");
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let numero1 = 60;
let numero2 = 61;
let numero3 = 352;


if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log(numero1, numero2, numero3);
    } else {
        console.log(numero1, numero3, numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log(numero2, numero1, numero3);
    } else {
        console.log(numero2, numero3, numero1);
    }
} else {
    if (numero1 >= numero2) {
        console.log(numero3, numero1, numero2);
    } else {
        console.log(numero3, numero2, numero1);
    }
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero = 55 

if (typeof numero === 'number') {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numerox = 321; 

if (numerox % 2 === 0) {
    console.log(numerox + " è un numero pari.");
} else {
    console.log(numerox + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
