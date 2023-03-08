// Raccolta dati dell'utente
//Chiedo il nome
const nome = prompt("Come ti chiami?");
console.log(nome);

//Chiedo il cognome
const cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

//Chiedo il colore preferito
const colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

//Preparo il risultato della password generata
const pswGenerata = nome + cognome + colore + 21;
console.log(pswGenerata)

//Stampo la password generata nella pagina
document.getElementById("password").innerHTML = pswGenerata;