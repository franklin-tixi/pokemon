import React from "react";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { AppFormDialog } from "../../../src/components/dialog/AppFormDialog";
import { expression } from "@babel/template";
import { AppTextField } from "../../../src/components";

configure({ adapter: new Adapter() });

describe("Prueba componente AppFormDialog", () => {
  test("Crear pokemon", () => {
    const mockCallBack = jest.fn();
    const dialog = shallow(
      <AppFormDialog
        onClose={mockCallBack}
        onSubmit={mockCallBack}
        open
        title="Nuevo Pokemon"
      >
        <AppTextField
          name="name"
          label="nombre"
          value={"Pikachu"}
          className="name"
        />
        <AppTextField
          name="image"
          label="Imagen"
          value={
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          }
          className="image"
        />
      </AppFormDialog>
    );

    expect(dialog.find("h4").text()).toBe("Nuevo Pokemon");
    expect(dialog.find(".name").prop("value")).toBe("Pikachu");
    expect(dialog.find(".image").prop("value")).toBe(
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    );

    dialog.find(".save").simulate("click");
    dialog.find(".cancel").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
