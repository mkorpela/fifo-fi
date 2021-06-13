import "./NumberInput.scss";

export const NumberInput: React.FC<{
  onChange: (value: number) => void;
  value?: number;
}> = ({ onChange, value }) => (
  <input
    defaultValue={value}
    key={value}
    pattern="0-9,."
    onBlur={(e) =>
      onChange(
        parseFloat(e.target.value.replace(",", ".").replace(/[^\d\.]/g, "")) ||
          1
      )
    }
    type="decimal"
  />
);