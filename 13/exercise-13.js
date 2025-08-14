/*
  Envuelve regalos con Asteriscos
  - Ejercicio desde: https://2021.adventjs.dev/challenges/13

  ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

  Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

  Sólo tienes que tener en cuenta unas cosillas ✌️:

  Si el array está vacío, devuelve un array vacío
  Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
  Por suerte, cada posición del array siempre tiene la misma longitud...
  wrapGifts(["📷", "⚽️"])
  Resultado:
  [ '****',
    '*📷*',
    '*⚽️*',
    '****'
  ]


  wrapGifts(["🏈🎸", "🎮🧸"])
  Resultado:
  [ '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ]


  wrapGifts(["📷"])
  Resultado:
  [ '****',
    '*📷*',
    '****'
  ]

*/

export function wrapGifts(gifts) {
  if (gifts.length < 1) return [];
  let maxLength = Math.max(...gifts.map(el => el.length));
  let rowComplete = '*'.repeat(maxLength + 2);
  let arrayGifs = gifts.map(gift => `*${gift}*`);
  return [rowComplete, ...arrayGifs, rowComplete];
}
