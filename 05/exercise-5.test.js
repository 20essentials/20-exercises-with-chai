import { expect } from 'chai';
import { daysToXmas } from './exercise-5.js';

describe('daysToXmas()', () => {
  it('debería estar definida como una función', () => {
    expect(daysToXmas).to.be.a('function');
  });

  it('debería devolver 24 días para el 1 de diciembre de 2021', () => {
    expect(daysToXmas(new Date('Dec 1, 2021'))).to.be.equal(24);
  });

  it('debería devolver 1 día para el 24 de diciembre de 2021 a las 00:00:01', () => {
    expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).to.be.equal(1);
  });

  it('debería devolver 1 día para el 24 de diciembre de 2021 a las 23:59:59', () => {
    expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).to.be.equal(1);
  });

  it('debería devolver 5 días para el 20 de diciembre de 2021 a las 03:24:00', () => {
    expect(daysToXmas(new Date("December 20, 2021 03:24:00"))).to.be.equal(5);
  });

  it('debería devolver 0 días para el 25 de diciembre de 2021', () => {
    expect(daysToXmas(new Date('Dec 25, 2021'))).to.be.equal(0);
  });

  it('debería devolver -1 día para el 26 de diciembre de 2021', () => {
    expect(daysToXmas(new Date('Dec 26, 2021'))).to.be.equal(-1);
  });

  it('debería devolver -6 días para el 31 de diciembre de 2021', () => {
    expect(daysToXmas(new Date('Dec 31, 2021'))).to.be.equal(-6);
  });

  it('debería devolver -7 días para el 1 de enero de 2022 a las 00:00:01', () => {
    expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).to.be.equal(-7);
  });

  it('debería devolver -7 días para el 1 de enero de 2022 a las 23:59:59', () => {
    expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).to.be.equal(-7);
  });
});
