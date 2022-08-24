import { ReactNode } from "react";

/**
 * Properties
 */
interface Props {
  children?: ReactNode;
}

/***
 * Component AppTable
 */
export function AppTable(props: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <table className="data-table">{props.children}</table>
    </div>
  );
}
