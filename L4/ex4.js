function estePrim(numar) {
  if (numar <= 1) return false; // Numerele mai mici decât 2 nu sunt prime
  if (numar <= 3) return true; // 2 și 3 sunt numere prime

  // Eliminăm numerele pare și multiplii de 3
  if (numar % 2 === 0 || numar % 3 === 0) return false;

  // Verificăm divizorii de la 5 până la numar
  for (let i = 5; i * i <= numar; i += 6) {
    if (numar % i === 0 || numar % (i + 2) === 0) return false;
  }

  return true;
}

// Exemplu de utilizare
const numar = 12;
console.log(
  estePrim(numar)
    ? `${numar} este un număr prim.`
    : `${numar} nu este un număr prim.`
);
