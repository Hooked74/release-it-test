const { getDeepMessage } = require("@repo/deep");

function run() {
  // Simple runtime hook that demonstrates the dependency chain.
  return `reader uses ${getDeepMessage()}`;
}

module.exports = {
  run
};
