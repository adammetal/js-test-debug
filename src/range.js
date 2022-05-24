const range = (from, to, step = 1) => {
  let first;
  let last;

  if (to === undefined) {
    first = 0;
    last = from;
  } else {
    first = from;
    last = to;
  }

  let i = first;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (i <= last) {
        const value = i;
        i += step;
        return { done: false, value };
      } else {
        return { done: true };
      }
    },
  };
};

module.exports = range;
