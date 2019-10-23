// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova


//lista di cognomi non ordinata
var listaCognomi = ["Rossi", "Ferrari", "Lazzari", "Barilla"];

//stampo la lista non ordinata
for(var j =0; j<listaCognomi.length; j++) {
    document.getElementById("listacognomi").innerHTML += "<li>" + listaCognomi[j] + "</li>";
}

//chiedo cognome
var cognomeUser = prompt("Inserisci il tuo cognome")

//inserisco cognomeUser nella lista non orinata
listaCognomi.push(cognomeUser);

//ordino la lista
listaCognomi.sort();

//stampo la lista ordinata alfabeticamente dei cognomi
for(var j =0; j<listaCognomi.length; j++) {
    document.getElementById("listaordinata").innerHTML += "<li>" + listaCognomi[j] + "</li>";
}

//stampo l'indice del cognome inserito
var i =0;
while (i < listaCognomi.length) {
    if (listaCognomi[i] === cognomeUser) {
        document.getElementById("numero").innerHTML = "Cognome inserito al numero " + (i+1);
    }
    i++;
}