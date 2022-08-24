import { AppButton } from "@component";
import { ReactNode } from "react";

/**
 * Properties
 */
interface Props<E extends Object> {
  children?: ReactNode;
  onClose: () => void;
  open?: boolean;
  title?: string;
  onSubmit?: () => void;
  disabled?: boolean;
}

/**
 * Component to display the form, to edit and create
 * @param props Com
 * @returns
 */
export function AppFormDialog<E extends Object>(props: Props<E>) {
  console.log("on sumit desde testing");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  return (
    <>
      {props.open && (
        <div className="form-crud">
          {/* FORM */}
          <form onSubmit={handleSubmit} aria-label="form">
            <h4 style={{ textAlign: "center" }}>{props.title}</h4>
            <div
              style={{
                margin: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* COMPONENT CHILDREN OF FORM */}
              {props.children}
            </div>
            {/* BUTTON */}
            <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AppButton
                className="save"
                label="Guardar"
                type="submit"
                disabled={props.disabled}
              />
              <AppButton
                className="cancel"
                label="Cancelar"
                onClick={props.onClose}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
