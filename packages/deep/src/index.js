const { getSharedMessage } = require("@repo/share");

function getDeepMessage() {
  return `${getSharedMessage()} plus deep features 1`;
}

module.exports = {
  getDeepMessage
};
