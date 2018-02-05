
var should = require('should');
var User = require('../src/hooks.js');

// 描述User的行为
describe('描述User的行为', function(){
  // 执行所有测试之前，执行before函数，添加数据
  before(function(){
    User.save('kongzhi111');
    console.log(User.getUsers()); // 打印出{kongzhi111: 'kongzhi111'}
    console.log(111111111111111111111);
  });
  // 在执行每个测试前，执行beforeEach函数，添加数据
  beforeEach(function() {
    User.save('kongzhi222');
    console.log(User.getUsers());
    // 打印出 {kongzhi111: 'kongzhi111', kongzhi222: 'kongzhi222'}
    console.log(222222222222222222222222)
  })
  // 描述User.save的行为
  describe('描述User.save的行为', function() {
    // 保存kongzhi333成功了
    it('保存kongzhi333成功了', function() {
      User.save('kongzhi333');
      console.log(User.getUsers());
      // 打印出 {kongzhi111: 'kongzhi111', kongzhi222: 'kongzhi222', kongzhi333: 'kongzhi333'}
      console.log(33333333333333333333);
    })
  });
  // 描述User.contains的行为
  describe('描述User.contains的行为', function(){
    it('kongzhi111是存在的', function(){
      User.contains('kongzhi111').should.be.exactly(true);
    });
    it('kongzhi222是存在的', function(){
      User.contains('kongzhi222').should.be.exactly(true);
    });
    it('kongzhi333是存在的', function(){
      User.contains('kongzhi333').should.be.exactly(true);
    });
    it('kongzhi555是不存在', function(){
      User.contains('kongzhi555').should.be.exactly(true);
    });
  });
  // 在执行完每个测试后，清空数据
  afterEach(function() {
    User.delete('kongzhi222');
    console.log(User.getUsers());  // 打印 {kongzhi111: 'kongzhi111', kongzhi333: 'kongzhi333'}
    console.log(44444444444444444444444);
  });
  // 在执行完每个测试后，清空数据
  after(function() {
    User.delete('kongzhi111');
    console.log(User.getUsers()); // 打印 {kongzhi333: 'kongzhi333'}
    console.log(555555555555555555555555);
    User.delete('kongzhi333');
    console.log(User.getUsers()); // 打印 {}
  });
})