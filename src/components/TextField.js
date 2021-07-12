import TextFieldUI from "@material-ui/core/TextField";

function TextField({
  value,
  onChange,
  setVal,
  setSecondAmountFieldValue,
  currency1Rate,
  currency2Rate,
}) {
  return (
    <TextFieldUI
      label="Amount"
      type="number"
      value={value}
      onChange={(e) =>
        onChange(
          e,
          setVal,
          setSecondAmountFieldValue,
          currency1Rate,
          currency2Rate
        )
      }
    />
  );
}

export default TextField;
