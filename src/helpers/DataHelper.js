export default {
  returnValueOrDefault(object, key, fallback) {
    let value = fallback;

    if (object && object[key]) {
      value = object[key];
    }

    return value;
  },
};
