import { expect } from 'chai';
import { groupBy } from './exercise-9.js';

describe('groupBy', () => {
  it('groups objects by a given numeric property', () => {
    const books = [
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 },
    ];

    const result = groupBy(books, 'rating');

    expect(result).to.deep.equal({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    });
  });

  it('returns an empty object when given an empty array', () => {
    expect(groupBy([], 'rating')).to.deep.equal({});
  });

  it('groups items with the same key value into the same array', () => {
    const items = [
      { name: 'Item A', category: 'tools' },
      { name: 'Item B', category: 'tools' },
      { name: 'Item C', category: 'books' },
    ];

    const result = groupBy(items, 'category');

    expect(result).to.deep.equal({
      tools: [
        { name: 'Item A', category: 'tools' },
        { name: 'Item B', category: 'tools' },
      ],
      books: [
        { name: 'Item C', category: 'books' },
      ],
    });
  });

  it('uses undefined as key if the property does not exist', () => {
    const data = [{ name: 'Test 1' }, { name: 'Test 2', rating: 5 }];

    const result = groupBy(data, 'rating');

    expect(result).to.deep.equal({
      undefined: [{ name: 'Test 1' }],
      5: [{ name: 'Test 2', rating: 5 }],
    });
  });
});