import { expect } from 'chai';
import { isValid } from './exercise-3.js';

describe('isValid()', () => {
  it('should be defined as a function', () => {
    expect(isValid).to.be.a('function');
  });

  it('should return true for valid input with balanced and properly nested parentheses', () => {
    expect(isValid('bici coche (balón) bici coche peluche')).to.be.true;
  });

  it('should return true when parentheses wrap a word correctly and are not nested', () => {
    expect(isValid('(muñeca) consola bici')).to.be.true;
  });

  it('should return false for input with unclosed parentheses', () => {
    expect(isValid('bici coche (balón bici coche')).to.be.false;
  });

  it('should return false for input with mismatched or improperly nested brackets', () => {
    expect(isValid('peluche (bici [coche) bici coche balón')).to.be.false;
  });

  it('should return false for input with incorrect bracket order', () => {
    expect(isValid('(peluche {) bici')).to.be.false;
  });

  it('should return false for input with empty parentheses', () => {
    expect(isValid('() bici')).to.be.false;
  });
});
