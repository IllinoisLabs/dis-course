const md5 = require('md5');

function hashId(input) {
  return md5(input).substring(0, 8);
}

module.exports = {
  hashId,
};
