const { getSharedMessage } = require("@repo/share");

function getDeepMessage() {
  return `${getSharedMessage()} plus deep features`;
}

module.exports = {
  getDeepMessage
};
