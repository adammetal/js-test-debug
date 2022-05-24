const at = (arr, pos) => {
  if (!Array.isArray(arr)) {
    throw new Error("arr must be an aray");
  }

  if (!Number.isSafeInteger(pos)) {
    throw new Error("pos must be an integer");
  }

  if (Math.abs(pos) >= arr.length) {
    return undefined;
  }

  let index;

  if (pos <= 0) {
    index = arr.length - Math.abs(pos);
  } else {
    index = pos;
  }

  return arr[index];
};

module.exports = at;
