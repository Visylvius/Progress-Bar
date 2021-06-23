/**
 *
 * @param {number} percentage - current percentage of the widget
 * @returns {string}
 */
function getXAttribute(percentage) {
  if (percentage < 10) {
    return "60%";
  } else if (percentage <= 99) {
    return "70%";
  }
  return "77%";
}

export { getXAttribute };
