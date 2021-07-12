export function setValOnSelect(e, id, setValue, setAmount1, setAmount2, currentAmount1, currentAmount2, data, secondCurrencyValue) {
    const v = e.target.value;
    const currency1Rate = data[v].rate;
    const currency2Rate = data[secondCurrencyValue].rate;

    if(id == "currency1") {
        if(secondCurrencyValue == v) {
            setAmount1(currentAmount2);
        } else {
            setAmount1(((currency2Rate/currency1Rate) * currentAmount1).toFixed(3))
        }
    } else {
        if(secondCurrencyValue == v) {
            setAmount2(currentAmount1);
        } else {
            setAmount2(((currency1Rate/currency2Rate) * currentAmount2).toFixed(3))
        }
    }

    setValue(v);
};