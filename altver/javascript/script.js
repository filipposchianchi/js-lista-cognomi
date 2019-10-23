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
if (cognomeUser.charAt(0) === "a" || cognomeUser.charAt(0) === "b" ||cognomeUser.charAt(0) === "c" || cognomeUser.charAt(0) === "d" || cognomeUser.charAt(0) === "e" || cognomeUser.charAt(0) === "f" || cognomeUser.charAt(0) === "g" || cognomeUser.charAt(0) === "h" || cognomeUser.charAt(0) === "i" || cognomeUser.charAt(0) === "l" || cognomeUser.charAt(0) === "m" || cognomeUser.charAt(0) === "n" || cognomeUser.charAt(0) === "o" || cognomeUser.charAt(0) === "p" || cognomeUser.charAt(0) === "q" || cognomeUser.charAt(0) === "r" || cognomeUser.charAt(0) === "s" || cognomeUser.charAt(0) === "u" || cognomeUser.charAt(0) === "v" || cognomeUser.charAt(0) === "z") {
     cognomeUser = cognomeUser.charAt(0).toUpperCase() + cognomeUser.slice(1)
}

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