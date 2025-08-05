import { expect } from 'chai';
import { createXmasTree } from './exercise-4.js';

describe('createXmasTree()', () => {
  it('should be defined as a function', () => {
    expect(createXmasTree).to.be.a('function');
  });

  it('should return a symmetrical Christmas tree of height 5', () => {
    expect(createXmasTree(5)).to.equal(`____*____
___***___
__*****__
_*******_
*********
____#____
____#____`);
  });

  it('should return a symmetrical Christmas tree of height 3', () => {
    expect(createXmasTree(3)).to.equal(`__*__
_***_
*****
__#__
__#__`);
  });

  it('should return a symmetrical Christmas tree of height 4', () => {
    expect(createXmasTree(4)).to.equal(`___*___
__***__
_*****_
*******
___#___
___#___`);
  });

  it('should return a symmetrical Christmas tree of height 6', () => {
    expect(createXmasTree(6)).to.equal(`_____*_____
____***____
___*****___
__*******__
_*********_
***********
_____#_____
_____#_____`);
  });

  it('should return a symmetrical Christmas tree of height 7', () => {
    expect(createXmasTree(7)).to.equal(`______*______
_____***_____
____*****____
___*******___
__*********__
_***********_
*************
______#______
______#______`);
  });
});
