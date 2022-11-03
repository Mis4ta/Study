// 用户名
export function validateUsername(rule, value, callback) {
  if (value.length < 3 || value.length > 20) {
    callback(new Error("用户名必须在3到20为字符内!"));
  } else {
    callback();
  }
}
// 密码
export function validatePassword(rule, value, callback) {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (value.length < 6 || value.length > 20) {
      callback(new Error("密码必须在6到20为字符内!"));
    }
    callback();
  }
}
