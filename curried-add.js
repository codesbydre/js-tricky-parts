function curriedAdd(total = 0) {
  if (arguments.length === 0) {
    return total;
  }

  return function add(nextNumber) {
    if (nextNumber === undefined) return total;
    return curriedAdd(total + nextNumber);
  };
}

module.exports = { curriedAdd };
