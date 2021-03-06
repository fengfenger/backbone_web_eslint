/**
 * Created by xiangwenwen on 16/4/13.
 * 通用模块,别名定义
 */

var path = require('path');
var containerPath = path.resolve('./');

//	别名列表
var alias = {
  config: path.resolve(containerPath,'./app/src/module/config'),
  tplEng: path.resolve(containerPath,'./app/link/artTemplate/dist/template'),
  pwdencrypt: path.resolve(containerPath, './app/src/module/crypto/pwdencrypt'),
  secret: path.resolve(containerPath, './app/src/module/crypto/secret'),
  FlashApi: path.resolve(containerPath, './app/src/module/FlashApi/'),
};

module.exports = alias;
