export default ({ IDL }) => {
  const Symbol = IDL.Text;
  const Token = IDL.Text;
  return IDL.Service({
    'createDefaultCurrencies' : IDL.Func([], [IDL.Text], []),
    'get' : IDL.Func([Symbol], [Token], ['query']),
    'makeCurrency' : IDL.Func([IDL.Nat, IDL.Text, Symbol], [IDL.Text], []),
    'makePerson' : IDL.Func([IDL.Text], [IDL.Text], []),
    'put' : IDL.Func([Symbol, Token], [], []),
  });
};
export const init = ({ IDL }) => { return []; };