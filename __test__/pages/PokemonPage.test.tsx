import { fireEvent, render, screen } from "@testing-library/react";

import React, { Component } from "react";
import { PokemonModel, PokemonPage } from "../../src/pages";
describe("Pruebas en PokemonPage", () => {
  test("Pagina inicio Pokemon", () => {
    //@ts-ignore
    const { container } = render(<PokemonPage />);

    expect(container).toMatchSnapshot();
  });

  test("Abrir modal y crear un pokemon", () => {
    const name = "Pikachu";
    const url =
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png";
    //@ts-ignore
    render(<PokemonPage />);
    fireEvent.click(screen.getByText("Nuevo"));

    const inputName = screen.getByRole("textbox", { name: "input-name" });
    const inputUrl = screen.getByRole("textbox", { name: "input-url" });
    const form = screen.getByRole("form");

    fireEvent.input(inputName, { target: { value: name } });
    fireEvent.input(inputUrl, { target: { value: url } });
    fireEvent.submit(form);
    screen.debug();
  });
});
