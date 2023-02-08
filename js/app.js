//PALINDROMO//

let parola = prompt('Inserisci una parola: ')

if (palindromo(parola)) {
    console.log('La parola è palindroma')
}


function palindromo(w) {    //w - word
    let array = w.split('')
    //console.log(array)

    if(array.length % 2 == 0){
        let check = 0
        let j = array.length-1  //j - posizione opposta a i
        for(let i=0; i<(array.length/2); i++){
            if (array[i] == array[j]){ check += 1 }
            //console.log(array[i], array[j], check)
            j--
        }
        return (check == array.length/2)
    }
    
    if(array.length % 2 == 1){
        let check = 0
        let j = array.length-1  //posizione opposta a i
        for(let i=0; i<((array.length-1)/2); i++){
            if (array[i] == array[j]){ check += 1 }
            //console.log(array[i], array[j], check)
            j--
        }
        return (check == (array.length-1)/2)
    }
}


//PARI DISPARI//

let pariDispari = 'null'

while (pariDispari.charAt(0) != 'p' && pariDispari.charAt(0) != 'd'){
    pariDispari = prompt('Digita PARI o DISPARI: ')
}
//console.log(pariDispari, pariDispari.charAt(0))

let numero = parseInt (prompt('Inserisci un numero: '))
//console.log(numero)

let numeroComputer = rand()
//console.log(numeroComputer)

console.log(numero, '+', numeroComputer, '=', numero+numeroComputer, numeroPari(numero+numeroComputer))

if(numeroPari(numero+numeroComputer)){
    if(pariDispari.charAt(0) == 'p'){
        console.log('Hai vinto')
    }
    else {
        console.log('Hai perso')
    }
}
else {
    if(pariDispari.charAt(0) == 'd'){
        console.log('Hai vinto')
    }
    else {
        console.log('Hai perso')
    }
}


function rand() {
    return parseInt(Math.floor(Math.random()*5+1))  //dita di una mano
}

function numeroPari(n){
    return (n % 2 == 0)
}
