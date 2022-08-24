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
          ariaLabel="input-search"
          className="search text-field"
          placeholder="Buscar"
          onChange={props.onSearch}
          name="search"
          type="text"
        />
        {/* BUTTON NEW */}
        <AppButton
          className="btn-new"
          label={LabelCrud.NEW}
          onClick={props.onClickAdd}
        />
      </div>
    </>
  );
}
