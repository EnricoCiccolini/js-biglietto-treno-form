/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/


/*
console.log("ciao");
const ageUser = document.getElementById('age')
console.log(ageUser)
*/
const ageUser = document.getElementById('age')
console.log(ageUser)

const kmUser = document.getElementById('km')
console.log(kmUser)

const mainButton = document.getElementById('button')
console.log(mainButton)
const total = document.getElementById('total')
console.log(total)
const formMain = document.getElementById('form')
console.log(formMain)

const userName = document.getElementById('name')
console.log(userName)
const userSurname = document.getElementById('surname')
console.log(userSurname)
const namefinal = document.getElementById('namefinal')
console.log(formMain)
const surnamefinal = document.getElementById('surnamefinal')
console.log(formMain)
const ticket = document.getElementById('Biglietto')
console.log(formMain)


mainButton.addEventListener('click', function (event) {
    event.preventDefault()
    ticket.style.display = "inline"

let result = document.createElement('h3')
let resul1 = ''
let kmforpay = kmUser.value
kmforpay = parseInt(kmforpay)
console.log(kmforpay)


let ageForDiscount = ageUser.value
ageForDiscount = parseInt(ageForDiscount)
console.log(ageForDiscount)

let discount = 0
let price = 0
if (isNaN(ageForDiscount) || isNaN(kmforpay)) {
    resul1 = ("età o kilometri non validi per favore inserire un numero valido")
    if (isNaN(age) || isNaN(kilometer)) {
        resul1 = ("età o kilometri non validi per favore inserire un numero valido")

        // controlli eta per lo sconto 
    } else {
        if (age <= 18) {
            discount = 20
        }
        else if (age >= 65) {
            discount = 40
        }
        // calcolo sconto 

        discount = (0, 21 * discount) / 100

        price = (kilometer * 0, 21) - discount
        price = price.toFixed(2)

        // dichiarazione prezzo totale 

        resul1 = (`il totale del tuo viaggio € ${price} euro`)

    }
    // controlli eta per lo sconto 
} else {
    if (ageForDiscount <= 18) {
        discount = 20
    }
    else if (ageForDiscount >= 65) {
        discount = 40
    }
    // calcolo sconto 

    discount = (0, 21 * discount) / 100

    price = (kmforpay * 0, 21) - discount
    price = price.toFixed(2)

    // dichiarazione prezzo totale 
    resul1 = (`il totale del tuo viaggio € ${price} euro`)

}
result.innerText = resul1

console.log(resul1)
console.log(result)

total.append(result)

let nomefinal = document.createElement('h3');
let nome1 = userName.value;
nomefinal.innerText = nome1;
namefinal.append(nomefinal);

let surnamefinalElement = document.createElement('h3');
let surname1 = userSurname.value;
surnamefinalElement.innerText = surname1;
surnamefinal.append(surnamefinalElement)
   


})



