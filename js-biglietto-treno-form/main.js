//  DATI COSTANTI STANDARD.
const prezzoAlKm = 0.21;

// FUNZIONE ASINCRONA (Al click del bottone)
function Cliccato() {

    // PRENDO GLI INPUT DELL'UTENTE
    console.log("cliccatobottone")
    const nome = document.getElementById('nome').value;
    console.log(nome);
    const eta = document.getElementById('eta').value;
    console.log(eta);
    const kmpercorsi = document.getElementById('kmpercorsi').value;
    console.log(kmpercorsi);

    // DA STRINGA A NUMERO
    const etaNumb = parseInt(eta);
    console.log(etaNumb);
    const kmNumb = parseInt(kmpercorsi);
    console.log(kmNumb);

    // CALCOLI DEL PREZZO MEDIO
    const costoBase = prezzoAlKm * kmNumb;
    console.log(costoBase);

    // Genera un numero casuale compreso tra min e max
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Genera un numero casuale compreso tra 1 e 30
    var numeroCasuale30 = getRandomInt(1, 30);
    console.log(numeroCasuale30);


    // CONTROLLO ETA IF E RELATIVI CALCOLI DI SCONTO || DATI INVALIDI
    if (etaNumb < 18 && etaNumb > 0) {
        const minorenne = (costoBase * 0.8).toFixed(2);
        console.log(minorenne);
        document.getElementById("tuoprezzo").innerHTML = nome + " " + "il tuo prezzo sarà: " + minorenne + "€";
        document.getElementById("tuatariffa").innerHTML = "Tariffa Junior 20% Sconto"
        document.getElementById("tuacarrozza").innerHTML = "La tua carrozza sara: " + numeroCasuale30;
    } else if (etaNumb > 61 && etaNumb < 120) {
        const anziano = (costoBase * 0.6).toFixed(2);
        console.log(anziano);
        document.getElementById("tuoprezzo").innerHTML = nome + " " + "il tuo prezzo sarà: " + anziano + "€";
        document.getElementById("tuatariffa").innerHTML = "Tariffa Senior 40% Sconto"
        document.getElementById("tuacarrozza").innerHTML = "La tua carrozza sara: " + numeroCasuale30;
    } else if (etaNumb >= 18 && etaNumb <= 61) {
        const maggiorenne = costoBase.toFixed(2);
        console.log(maggiorenne);
        document.getElementById("tuoprezzo").innerHTML = nome + " " + "il tuo prezzo sarà: " + maggiorenne + "€";
        document.getElementById("tuatariffa").innerHTML = "Tariffa Adulto"
        document.getElementById("tuacarrozza").innerHTML = "La tua carrozza sara: " + numeroCasuale30;
    } else if (etaNumb < 0 || etaNumb > 120) {          //SE L UTENTE INSERISCE DATI IMPOSSIBILI
        alert("Errore, impossibile")
        document.getElementById("tuoprezzo").innerHTML = "Inserisci la tua vera eta!";
    } else {                                            //SE L UTENTE NON INSERISCE NUMERI NEI CAMPI NUMERICI, O NULL.
        alert("Errore")
    }



    // Cancello i dati scritti in pagina
    document.getElementById("nome").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("kmpercorsi").value = "";
}

//RIFERIMENTO AL BOTTONE

var button = document.getElementById("myButton");

// EVENTO CHE FA ATTIVARE LA FUNZIONE | FUNZIONE DA FAR SVOLGERE

button.addEventListener("click", Cliccato);






