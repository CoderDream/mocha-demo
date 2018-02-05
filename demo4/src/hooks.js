// 保存用户对象
var saveUserObj = {};

// 定义用户类
function User (name) {}

// 保存用户
User.save = function(name) {
  saveUserObj[name] = name;
} 

// 删除用户
User.delete = function(name) {
  delete saveUserObj[name];
}

// 检查是否包含该用户
User.contains = function(name) {
  return saveUserObj[name] !== null;
}
// 返回所有的数据
User.getUsers = function() {
  return saveUserObj;
}
module.exports = User;