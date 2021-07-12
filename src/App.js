import "./App.css";
import React, { useState, useEffect } from "react";
import Select from "./components/Select";
import TextField from "./components/TextField";
import useCustomFetch from "./hooks/useCustomFetch";
import * as SelectActions from './actions/selectActions';
import * as TextFieldActions from './actions/textFieldActions';

function App() {

  const [currency1, setCurrency1] = useState("eur");
  const [currency2, setCurrency2] = useState("eur");
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);

  const [countryCurrencies, loading, error] = useCustomFetch(
    "http://www.floatrates.com/daily/usd.json"
  );

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div>Loading ....</div>
        ) : (
          <div className="div-style">
            <label className="input-label-style">Currency Converter</label>
            <TextField value={amount1} onChange={TextFieldActions.onChangeValue} setVal={setAmount1} setSecondAmountFieldValue={setAmount2} currency1Rate={countryCurrencies[currency1].rate} currency2Rate={countryCurrencies[currency2].rate}/>
            <Select id={"currency1"} data={countryCurrencies} value={currency1} onChange={SelectActions.setValOnSelect} setVal={setCurrency1} setAmount1={setAmount1} setAmount2={setAmount2} currency1Rate={countryCurrencies[currency1].rate} currency2Rate={countryCurrencies[currency2].rate} currentAmount1={amount1} currentAmount2={amount2} data={countryCurrencies} secondCurrencyValue={currency2}/>
            <TextField value={amount2} onChange={TextFieldActions.onChangeValue} setVal={setAmount2} setSecondAmountFieldValue={setAmount1} currency1Rate={countryCurrencies[currency2].rate} currency2Rate={countryCurrencies[currency1].rate}/>
            <Select id={"currency2"} data={countryCurrencies} value={currency2} onChange={SelectActions.setValOnSelect} setVal={setCurrency2} setAmount1={setAmount1} setAmount2={setAmount2} currency1Rate={countryCurrencies[currency1].rate} currency2Rate={countryCurrencies[currency2].rate} currentAmount1={amount1} currentAmount2={amount2} data={countryCurrencies} secondCurrencyValue={currency1}/>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
