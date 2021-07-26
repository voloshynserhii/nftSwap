import type { Principal } from '@dfinity/agent';
export type Symbol = string;
export type Token = string;
export default interface _SERVICE {
  'createDefaultCurrencies' : () => Promise<string>,
  'get' : (arg_0: Symbol) => Promise<Token>,
  'makeCurrency' : (arg_0: bigint, arg_1: string, arg_2: Symbol) => Promise<
      string
    >,
  'makePerson' : (arg_0: string) => Promise<string>,
  'put' : (arg_0: Symbol, arg_1: Token) => Promise<undefined>,
};