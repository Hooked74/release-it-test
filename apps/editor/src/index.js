const { getDeepMessage } = require("@repo/deep");

function run() {
  return `editor uses 1 ${getDeepMessage()}`;
}

module.exports = {
  run
};
