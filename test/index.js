/* eslint-disable no-undef */
require('chai').should();


const doILookBigInThis = require('../index');

describe("doILookBigInThis should determine a narcissistic number", () => {
  it("should return true for single digits", function () {
    (doILookBigInThis(2)).should.eql(true);
  });

  it("should return true on any given number with multiple digits that is narcisstic", () => {
    (doILookBigInThis(407)).should.eql(true);
    (doILookBigInThis(1634)).should.eql(true);
    (doILookBigInThis(153)).should.eql(true);
  });

  it("should return false for any number that is not considered narcisstic", () => {
    (doILookBigInThis(33)).should.eql(false);
    (doILookBigInThis(1253)).should.eql(false);
  })
});

