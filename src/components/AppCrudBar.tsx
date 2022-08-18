import { AppButton } from "./button/AppButton";
import { AppTextField } from "./inputs/AppTextField";
import { LabelCrud } from "./../helpers/const/global";

/**
 * Properties
 */
interface Props {
  title?: string;
  onClickAdd?: () => void;
  onSearch?: (value: string) => void;
}

/**
 * Component that contains the search engine and new button
 * @param props
 * @returns
 */
export function AppCrudBar(props: Props) {
  return (
    <>
      {/* TITLE */}
      <h3>{props.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* INPUT SEARCH */}
        <AppTextField
          className="search text-field"
          placeholder="Buscar"
          onChange={props.onSearch}
          name="search"
        />
        {/* BUTTON NEW */}
        <AppButton
          className="add"
          label={LabelCrud.NEW}
          onClick={props.onClickAdd}
        />
      </div>
    </>
  );
}
