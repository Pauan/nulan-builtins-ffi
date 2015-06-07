export const _sequential = (interface, wrap, bind, a) => {
  const out = new Array(a["length"]);

  const loop = (i) => {
    if (i < a["length"]) {
      return bind(interface, a[i], (x) => {
        out[i] = x;
        return loop(i + 1);
      });

    } else {
      return wrap(interface, out);
    }
  };

  return loop(0);
};
