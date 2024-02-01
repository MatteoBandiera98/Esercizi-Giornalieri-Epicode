/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {

    let areaRettangolo = (l1 * l2);
    return areaRettangolo;
}

let lunghezzaLato1 = 5;
let lunghezzaLato2 = 8;
let risultatoArea = area(lunghezzaLato1, lunghezzaLato2);

console.log("area del rettangolo" + " " + risultatoArea);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2) {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3;
    } else {
        return numero1 + numero2;
    }
}
let risultato = crazySum(8, 9);
console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero1) {

    if (numero1 > 19) {
        return Math.abs(numero1 - 19) * 3;
    } else {
        return Math.abs(numero1 - 19);
    }
}
let risultatocrazyDiff = crazyDiff(22);
console.log(risultatocrazyDiff)



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
    return (n >= 20 && n <= 100 || n === 400)
}

let risultatoboundary = boundary(20)
let risultatoboundary2 = boundary(400)
console.log(risultatoboundary)
console.log(risultatoboundary2)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startswith('EPICODE')) {
        return stringa;
    }
}



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numero) {
    if (numero > 0) {
        if (numero % 3 === 0 || numero % 7 === 0) {
            return true
        }
        else {
            return false
        }
    } else {
        return false
    }

}
let risultato1 = check3and7(9);
let risultato2 = check3and7(14);
let risultato3 = check3and7(20);
let risultato4 = check3and7(-5);

console.log("Risultato 1:", risultato1);
console.log("Risultato 2:", risultato2);
console.log("Risultato 3:", risultato3);
console.log("Risultato 4:", risultato4);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
    return stringa.split("").reverse().join("");
}

let risultatoreverse = reverseString("EPICODE");
console.log("Risultato reverse:", risultatoreverse);


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
    return stringa.touppercase
}
let maiuscolo = upperFirst("hello world");


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/






/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
