/*
  !Es hora de Poner la Navidad en Casa!
  - Exercise desde: https://2021.adventjs.dev/challenges/04

 ¡Es hora de poner el árbol de navidad en casa! 🎄

  Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

  Si le pasamos el argumento 5, se pintaría esto:

  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
  Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

  Otro ejemplo con un árbol de altura 3:

  __*__
  _***_
  *****
  __#__
  __#__
  Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

export function createXmasTree(height) {
  let arrayRecolector = [];
  for (
    let asterisco = 1, space = height - 1;
    asterisco <= height * 2 - 1 && space >= 0;
    asterisco += 2, space--
  ) {
    let espacio = '_'.repeat(space);
    let row = `${espacio}${'*'.repeat(asterisco)}${espacio}`;
    arrayRecolector.push(row);
  }

  let underscores = '_'.repeat(height - 1);
  let rowTronco = `${underscores}#${underscores}`;
  arrayRecolector.push(rowTronco, rowTronco);

  return arrayRecolector.join('\n');
}
