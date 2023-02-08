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

//let lettera = parola.charAt(0)
//let array = parola.split('')
