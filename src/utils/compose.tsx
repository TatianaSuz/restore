import { ComponentType } from 'react';

type AnyFunc = (...args: any[]) => any;
const compose =
  (...funcs: AnyFunc[]) =>
  (comp: ComponentType<any>) =>
    funcs.reduceRight((wrapped, f) => f(wrapped), comp);

export default compose;
