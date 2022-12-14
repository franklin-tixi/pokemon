/**
 * Properties
 */
interface Props {
  className?: string;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

/**
 * Component AppButton
 * @param props
 * @returns
 */
export function AppButton(props: Props) {
  return (
    <div>
      <button
        aria-label={props.ariaLabel}
        className={props.className}
        onClick={props.onClick}
        style={{ marginLeft: "1rem" }}
        type={props.type}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </div>
  );
}
