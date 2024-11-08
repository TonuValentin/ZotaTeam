// Definim tabloul de exemple
let array = [1, 2, 3, 4, 5];

// Calculăm suma folosind metoda reduce()
let sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("Suma elementelor este:", sum);
