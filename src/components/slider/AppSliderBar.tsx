/**
 * Properties
 */
interface Props {
  label?: string;
  valueMaximum?: number;
  valueMinimum?: number;
  name: string;
  value?: any;
  onChange?: (valor: number) => void;
}

/**
 * Component AppSliderBar
 * @param props
 * @returns
 */
export function AppSliderBar(props: Props) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(Number(event.target.value));
    }
  };

  return (
    <>
      <div className="slidecontainer">
        <label style={{ paddingRight: "10px" }}>{props.label}</label>
        <label style={{ paddingRight: "10px" }}>{props.valueMinimum}</label>
        <input
          type="range"
          min="1"
          max="100"
          value={props.value}
          className="slider"
          id="myRange"
          onChange={handleOnChange}
          name={props.name}
        />
        <label style={{ paddingLeft: "10px" }}>{props.valueMaximum}</label>
      </div>
    </>
  );
}
