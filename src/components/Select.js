import SelectUI from "@material-ui/core/Select";
import MenuItemUI from "@material-ui/core/MenuItem";

function Select({
  id,
  data,
  onChange,
  value,
  setVal,
  setAmount1,
  setAmount2,
  currentAmount1,
  currentAmount2,
  secondCurrencyValue
}) {
  return (
    <>
      <SelectUI
        value={value}
        onChange={(e) =>
          onChange(
            e,
            id,
            setVal,
            setAmount1,
            setAmount2,
            currentAmount1,
            currentAmount2,
            data,
            secondCurrencyValue
          )
        }
      >
        {Object.keys(data).map((k, v) => {
          return (
            <MenuItemUI key={k} value={k}>
              {data[k].name}
            </MenuItemUI>
          );
        })}
      </SelectUI>
    </>
  );
}

export default Select;
