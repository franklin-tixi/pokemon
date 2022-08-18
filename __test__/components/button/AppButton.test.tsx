import React from "react";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { AppButton } from "../../../src/components";

configure({ adapter: new Adapter() });

describe("Prueba componente AppButton", () => {
  test("onClic - Button", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<AppButton onClick={mockCallBack} />);

    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("Prop - Button", () => {
    const Props = {
      className: "",
      label: "",
      disabled: true,
      onClick: () => {
        console.log();
      },
    };
    const button = shallow(<AppButton {...Props} />);
  });
});
