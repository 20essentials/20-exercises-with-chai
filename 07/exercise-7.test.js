import { expect } from 'chai';
import { contains } from './exercise-7.js';

describe('contains()', () => {
  it('debería estar definida como una función', () => {
    expect(contains).to.be.a('function');
  });

  it('debería encontrar un producto dentro de un objeto anidado', () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite'
        }
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta'
        }
      }
    };
    expect(contains(almacen, 'camiseta')).to.be.true;
  });

  it('debería devolver false si el producto no existe en ninguna profundidad', () => {
    const otroAlmacen = {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    };
    expect(contains(otroAlmacen, 'gameboy')).to.be.false;
  });

  it('debería encontrar el valor si está en la raíz del objeto', () => {
    const almacen = {
      producto: 'laptop',
      otro: 'teclado'
    };
    expect(contains(almacen, 'laptop')).to.be.true;
  });

  it('debería manejar objetos profundamente anidados y encontrar el valor', () => {
    const almacen = {
      a: {
        b: {
          c: {
            d: {
              e: 'meta'
            }
          }
        }
      }
    };
    expect(contains(almacen, 'meta')).to.be.true;
  });

  it('debería devolver false en un objeto vacío', () => {
    expect(contains({}, 'cualquier-cosa')).to.be.false;
  });

  it('debería distinguir entre mayúsculas y minúsculas si es case-sensitive', () => {
    const almacen = { producto: 'Camisa' };
    expect(contains(almacen, 'camisa')).to.be.false;
  });
});
