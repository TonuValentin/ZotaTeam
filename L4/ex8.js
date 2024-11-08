// Definim o funcție care verifică dacă un șir este palindrom
function estePalindrom(sir) {
  // Eliminăm spațiile din șir și transformăm toate literele în minuscule
  // `replace(/\s+/g, '')` înlocuiește toate spațiile (g = global, \s = orice spațiu)
  // `toLowerCase()` transformă toate literele în minuscule
  sir = sir.replace(/\s+/g, "").toLowerCase();

  // Verificăm dacă șirul este egal cu versiunea sa inversată
  // `split('')` împarte șirul în caractere individuale
  // `reverse()` inversează ordinea caracterelor
  // `join('')` reconstruiește șirul din caracterele inversate
  return sir === sir.split("").reverse().join("");
}

// Exemplu de utilizare
let sir = "Ana"; // Definim un șir de caractere de test

// Apelăm funcția și verificăm dacă rezultatul este true sau false
if (estePalindrom(sir)) {
  // Dacă funcția returnează true, afișăm că șirul este un palindrom
  console.log("Șirul este un palindrom.");
} else {
  // Dacă funcția returnează false, afișăm că șirul nu este un palindrom
  console.log("Șirul nu este un palindrom.");
}
