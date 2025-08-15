/*
  En Busca del Reno Perdido 
  - Ejercicio desde: https://2021.adventjs.dev/challenges/14

  ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

  Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

  👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

  👎 Lo malo: la lista está desordenada y podría faltar el último...

  Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

  missingReindeer([0, 2, 3]) // -> 1
  missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
  missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
  missingReindeer([3, 0, 1]) // -> 2
  missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
  missingReindeer([0]) // -> 1 (¡es el último el que falta!)
  Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

*/

export function missingReindeer(ids) {
  let arrayIdsSorteados = ids.toSorted((a, b) => a - b);
  let maxRenos = arrayIdsSorteados[arrayIdsSorteados.length - 1];
  let arrayIdQueDebenExistir = Array.from({ length: maxRenos }, (_, i) => i);
  let set100Elementos = new Set(arrayIdQueDebenExistir);
  let setIdsSorteados = new Set(arrayIdsSorteados);
  let difference = set100Elementos.difference(setIdsSorteados);
  let result = [...difference];
  return result.length === 0 ? maxRenos + 1 : result[0];
}
