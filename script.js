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



console.log("ciao");
const ageUser = document.getElementById('age')
console.log(ageUser)
const kmUser = document.getElementById('km')
console.log(kmUser)
const mainButton = document.getElementById('button')
console.log(mainButton)

mainButton.addEventListener('click', function(event){
    event.preventDefault()


    let kmforpay = kmUser.value
    kmforpay = parseInt(kmforpay)
    console.log(kmforpay)


    let ageForDiscount = ageUser.value
    ageForDiscount = parseInt(ageForDiscount)
    console.log(ageForDiscount)

    let discount = 0
    let price = 0
    if (isNaN(ageForDiscount) || isNaN(kmforpay)){
        console.log ( "età o kilometri non validi per favore inserire un numero valido")
    
        // controlli eta per lo sconto 
    } else {
        if (ageForDiscount <= 18){
            discount = 20
        }
        else if (ageForDiscount >= 65) {
            discount = 40
        }
        // calcolo sconto 
    
        discount = (0,21 * discount)/100
    
        price = (kmforpay * 0,21 ) - discount
        price = price.toFixed(2)
    
        // dichiarazione prezzo totale 
       console.log (`il totale del tuo viaggio € ${ price} euro`) 
    }







})