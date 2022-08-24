/**
 * Properties
 */
interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  name: string;
  value?: any;
  required?: boolean;
  type?: "string" | "url" | "text";
  ariaLabel?: string;
}

/**
 * Compoent AppTextField
 * @param props
 * @returns
 */
export function AppTextField(props: Props) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <>
      <div>
        {props.label && (
          <label style={{ paddingRight: "1rem" }}>{props.label}</label>
        )}
        <input
          aria-label={props.ariaLabel}
          placeholder={props.placeholder}
          required={props.required}
          className={props.className}
          style={{ marginRight: "1rem" }}
          onChange={handleOnChange}
          name={props.name}
          type={props.type || "text"}
          value={props.value}
        ></input>
      </div>
    </>
  );
}
