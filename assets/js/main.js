//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.

var studente = {
    nome: "Michele",
    cognome: "Grigi",
    età: 52
}


//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var propr = document.getElementById("proprieta");
for (var key in studente){
    console.log(studente[key]);
    propr.insertAdjacentHTML("beforeend", `<p>${key}: ${studente[key]}</p>`);
}


//Creare un array di oggetti di studenti.

var listaStudenti = [
    {
        nome: "Paolo",
        cognome: "Ferrari",
        età: 23
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        età: 48
    },
    {
        nome: "Luigi",
        cognome: "Verdi",
        età: 34
    },
    {
        nome: "Giuseppe",
        cognome: "Gialli",
        età: 85
    },
    {
        nome: "Marco",
        cognome: "Neri",
        età: 45
    }
];


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var lista = document.getElementById("lista");
for (var i = 0; i < listaStudenti.length; i++){
    console.log(listaStudenti[i]);
    for (var key in listaStudenti[i]) {
        lista.insertAdjacentHTML("beforeend", `<p>${key}: ${listaStudenti[i][key]}</p>`);
    }
}


//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
//un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

document.querySelector("#nuovo_studente").addEventListener("click", function () {
    var nuovoStudente = {};
    alert("Inserisci un nuovo studente nella lista!");
    nuovoStudente.nome = prompt("Inserisci il nome del nuovo studente!");
    nuovoStudente.cognome = prompt("Inserisci il cognome del nuovo studente!");
    nuovoStudente.età = Number(prompt("Inserisci l'età del nuovo studente!"));
    listaStudenti.push(nuovoStudente);
    console.log(nuovoStudente);
});


//Aggiornare la lista scritta in precedenza
//In modo da visualizzare il nuovo studente

document.querySelector("#aggiorna_lista").addEventListener("click", function () {
    lista.innerHTML = "";
    for (var i = 0; i < listaStudenti.length; i++) {
        for (var key in listaStudenti[i]) {
            lista.insertAdjacentHTML("beforeend", `<p>${key}: ${listaStudenti[i][key]}</p>`);
        }
    }
});