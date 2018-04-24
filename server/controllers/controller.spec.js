import assert from 'assert';
import httpMock from 'node-mocks-http';
import controller from './controller';

describe('getGame', () => {
  let req;
  let res;
  beforeEach(() => {
    req = httpMock.createRequest({ method: 'GET', url: '/deck' });
    res = httpMock.createResponse();
    controller.getDeck(req, res);
  });
  it('returns a response with 81 cards in the body', (done) => {
    const length = JSON.parse(res._getData()).deck.length;
    assert.equal(length, 81);
    done();
  });
  it('returns a 200 status code', (done) => {
    const code = res.statusCode;
    assert.equal(code, 200);
    done();
  });
});
