import { render, screen } from "@testing-library/react";
import React from "react";
import { AppFormDialog } from "../../../src/components/";

describe("Pruebas AppFormDialog", () => {
  const title = "Titulo Pokemon";
  const open: boolean = true;

  test("Debe realizar match con el snapshot", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <AppFormDialog onClose={mockCallBack} open={open} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar en titulo - Titulo Pokemon", () => {
    const mockCallBack = jest.fn();
    render(<AppFormDialog onClose={mockCallBack} title={title} open={open} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar en titulo - en un h4", () => {
    const mockCallBack = jest.fn();
    render(<AppFormDialog onClose={mockCallBack} title={title} open={open} />);
    expect(screen.getByRole("heading", { level: 4 })).toBeTruthy();
  });

  test("Debe contener 2 botones", () => {
    const mockCallBack = jest.fn();
    render(<AppFormDialog onClose={mockCallBack} title={title} open={open} />);
    expect(screen.getAllByRole("button").length).toBe(2);
  });
});
