import { expect } from 'chai';
import { shouldBuyFidelity } from './exercise-11.js';

describe('shouldBuyFidelity', () => {
  it('should be defined as a function', () => {
    expect(shouldBuyFidelity).to.be.a('function');
  });

  it('should return false when buying only 1 ticket', () => {
    expect(shouldBuyFidelity(1)).to.be.false;
  });

  it('should return false when buying a few tickets (e.g., 3)', () => {
    expect(shouldBuyFidelity(3)).to.be.false;
  });

  it('should return true for a large number of tickets (e.g., 100)', () => {
    expect(shouldBuyFidelity(100)).to.be.true;
  });

  it('should return true when the fidelity card becomes cheaper than single tickets', () => {
    expect(shouldBuyFidelity(24)).to.be.true;
  });

  it('should return false when the fidelity card is still more expensive', () => {
    expect(shouldBuyFidelity(20)).to.be.false;
  });

  it('should return consistent results for repeated calls with the same input', () => {
    const result1 = shouldBuyFidelity(50);
    const result2 = shouldBuyFidelity(50);
    expect(result1).to.equal(result2);
  });

  it('should handle 0 tickets as false', () => {
    expect(shouldBuyFidelity(0)).to.be.false;
  });
});
