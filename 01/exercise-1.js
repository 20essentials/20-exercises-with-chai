/*
  Contando ovejas para Dormir

  - Ejercicio desde: https://2021.adventjs.dev/challenges/01
  
  Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

  Por ejemplo, si tenemos las ovejas:

  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  Al ejecutar el método debería devolver lo siguiente:

  const ovejasFiltradas = contarOvejas(ovejas)

  console.log(ovejasFiltradas)

  // [{ name: 'Navidad', color: 'rojo' },
  //  { name: 'Ki Na Ma', color: 'rojo' }]
  Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.
*/

export function contarOvejas(ovejas) {
  let arrayOvejas = ovejas.filter(oveja => {
    const { color, name } = oveja;
    const nameLowerCase = name.toLowerCase();
    return (
      color === 'rojo' &&
      nameLowerCase.includes('a') &&
      nameLowerCase.includes('n')
    );
  });

  return arrayOvejas;
}