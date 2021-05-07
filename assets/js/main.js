//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.

var studente = {
    nome: "Paolo",
    cognome: "Ferrari",
    età: 23
}


//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var propr = document.getElementById("proprieta");
for (var key in studente){
    console.log(studente[key]);
    propr.insertAdjacentHTML("beforeend", `<p>${key}: ${studente[key]}</p>`)
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
        età: 23
    },
    {
        nome: "Luigi",
        cognome: "Verdi",
        età: 23
    },
    {
        nome: "Giuseppe",
        cognome: "Gialli",
        età: 23
    },
    {
        nome: "Marco",
        cognome: "Neri",
        età: 23
    }
];


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
//un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.