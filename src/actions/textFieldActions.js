export function onChangeValue(e, setValue, setSecondAmountFieldValue, currency1Rate, currency2Rate) {
    // const dataCurrencyRate1 = data[currency1Val].rate;
    // const dataCurrencyRate2 = data[currency2Val].rate;
    const v = e.target.value;
    setValue(v);
    setSecondAmountFieldValue(((currency2Rate/currency1Rate) * v).toFixed(3))
}