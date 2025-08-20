/*
  Una carta de Pangramas?
  - Ejercicio desde: https://2021.adventjs.dev/challenges/20

  En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

  Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

  Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

  Vamos a ver unos ejemplos de frases:

  pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

  pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
  pangram('De la a a la z, nos faltan letras') // false

*/

export function pangram(letter) {
  let letterClon = letter
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u')
    .toLowerCase();

  const abecedario = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'ñ',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  const setAbecedario = new Set(abecedario);
  const setLetter = new Set(letterClon.split(''));
  const intersection = setAbecedario.intersection(setLetter);
  let result = intersection.size === 27;

  return result;
}
