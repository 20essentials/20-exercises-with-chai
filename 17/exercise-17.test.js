import { expect } from 'chai';
import { countPackages } from './exercise-17.js';

describe('countPackages', () => {
  it('should be defined as a function', () => {
    expect(countPackages).to.be.a('function');
  });

  it('should return the sum of packages of a carrier and their colleagues (simple case)', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []]
    ];
    expect(countPackages(carriers, 'dapelu')).to.be.equal(9);
  });

  it('should return the sum of packages of a carrier with nested colleagues in chain', () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ];
    expect(countPackages(carriers, 'camila')).to.be.equal(15);
  });

  it('should return only the packages of the carrier when it has no colleagues', () => {
    const carriers = [
      ['ana', 7, []],
      ['juan', 3, []]
    ];
    expect(countPackages(carriers, 'ana')).to.be.equal(7);
  });

  it('should return 0 if the carrier ID does not exist in the list', () => {
    const carriers = [
      ['pepe', 4, []],
      ['luis', 6, []]
    ];
    expect(countPackages(carriers, 'maria')).to.be.equal(0);
  });

  it('should return the correct total when the structure is deeply nested', () => {
    const carriers = [
      ['root', 1, ['lvl1']],
      ['lvl1', 2, ['lvl2']],
      ['lvl2', 3, ['lvl3']],
      ['lvl3', 4, ['lvl4']],
      ['lvl4', 5, []]
    ];
    expect(countPackages(carriers, 'root')).to.be.equal(15);
  });

  it('should return the correct total when multiple independent groups exist', () => {
    const carriers = [
      ['alpha', 10, ['beta']],
      ['beta', 5, []],
      ['gamma', 20, ['delta']],
      ['delta', 15, []]
    ];
    expect(countPackages(carriers, 'gamma')).to.be.equal(35);
    expect(countPackages(carriers, 'alpha')).to.be.equal(15);
  });
});
