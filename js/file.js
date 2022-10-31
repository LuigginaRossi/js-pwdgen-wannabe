//chiedo informazioni all'utente:
const fullNameUser = prompt("Inserisci il tuo nome completo");

const favoriteColor = prompt("Inserisci il tuo colore preferito");

//trovo elemento html e modifico:

const h2NameUser = document.getElementById("user-informations");

//verifico cosa ho inserito:
console.log(h2NameUser);

//modifico valore nell'html:
h2NameUser.innerHTML = `Benvenuto <strong>${fullNameUser}</strong> il tuo colore preferito è ${favoriteColor}`;

//cambia colore quando a seconda di cosa inserisce l'utente:
document.getElementById("user-informations").style.setProperty('--color',favoriteColor);