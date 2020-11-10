const compose = <T>(...funcs: Array<(arg: T) => T>) => (comp: any) => {
  return funcs.reduceRight((prevResult, f) => f(prevResult), comp);
};

export default compose;