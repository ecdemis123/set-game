import assert from 'assert';
import library from './library';

describe('#generateCard', () => {
  let result;
  beforeEach(() => {
    result = library.generateCard();
  });
  it('returns an instance of a Card model', done => {
    assert(typeof result === 'object');
    done();
  });
  it('sets the values on the card', done => {
    ['color', 'fill', 'shape', 'count'].forEach(attr => {
      assert.notEqual(result[attr], undefined);
    });
    done();
  });
});

describe('#generateDeck', () => {
  it('returns 81 cards', done => {
    const result = library.generateDeck();
    assert.equal(result.length, 81);
    done();
  });
});
