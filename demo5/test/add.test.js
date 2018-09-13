var expect = require('chai').expect;
var add = require('../src/add.js');
it.only('1 加 1应该等于2', function () {
    expect(add(1, 1)).to.be.equal(2);
});

it('任何数加0应该等于自身', function () {
    expect(add(1, 0)).to.be.equal(1);
});
