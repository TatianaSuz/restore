import * as appActionsCreators from '../action-creators/app-creators';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type AppActionTypes = ReturnType<InferValueTypes<typeof appActionsCreators>>;
