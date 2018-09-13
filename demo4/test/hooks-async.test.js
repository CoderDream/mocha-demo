var expect = require('chai').expect;

/*
describe('异步钩子函数', function() {
  var foo = false;
  beforeEach(function(){
    setTimeout(function(){
      foo = true;
    }, 50)
  });
  it('异步钩子函数成功', function() {
    expect(foo).to.be.equal(true);
  })
});
*/
describe('异步钩子函数', function () {
    var foo = false;
    beforeEach(function (done) {
        setTimeout(function () {
            foo = true;
            // complete the async beforeEach
            done();
        }, 50)
    });
    it('异步钩子函数成功', function () {
        expect(foo).to.be.equal(true);
    });
});
