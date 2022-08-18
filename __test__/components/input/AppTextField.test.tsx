import React from "react";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { AppTextField } from "../../../src/components";

configure({ adapter: new Adapter() });

describe("Prueba componente AppTextField", () => {
  test("Prop - TextField ", () => {
    const Props = {
      className: "",
      label: "",
      disabled: true,
      placeholder: "",
      required: true,
      name: "",
      value: "",
    };

    const textField = shallow(<AppTextField {...Props} />);
  });

  test("onChange - textField", () => {
    const mockCallBack = jest.fn();
    const textField = shallow(
      <AppTextField onChange={mockCallBack} name="testing" />
    );

    textField.find("input").simulate("change", { target: { value: 50 } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
