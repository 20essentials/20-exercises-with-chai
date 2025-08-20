import { expect } from 'chai';
import { pangram } from './exercise-20.js';

describe('pangram', () => {
  it('should be defined as a function', () => {
    expect(pangram).to.be.a('function');
  });

  it('should return true for a valid Spanish pangram with special characters', () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).to.be
      .true;
  });

  it('should return true for another valid pangram containing punctuation and accents', () => {
    expect(
      pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
    ).to.be.true;
  });

  it('should return false for a long sentence missing some letters', () => {
    expect(
      pangram(
        'Esto es una frase larga pero no tiene todas las letras del abecedario'
      )
    ).to.be.false;
  });

  it('should return false when explicitly missing letters', () => {
    expect(pangram('De la a a la z, nos faltan letras')).to.be.false;
  });

  it('should return false for an empty string', () => {
    expect(pangram('')).to.be.false;
  });

  it('should return false for a string with only repeated characters', () => {
    expect(pangram('aaaaaaaaaaaaaa')).to.be.false;
  });
});
