const selectCurrency = (base, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency: base,
  rates: rates
});

window.selectCurrency = selectCurrency;

export default selectCurrency;
