import { PokemonService } from "./../../src/pages";

describe("Pruebas en PokemonService", () => {
  // test("GetById", (done) => {
  //   const pokemonID: number = 3067;
  //   const PokemonModel = {
  //     id: 3067,
  //     name: "charmander",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxQih4cEIHvVcVYp418yEXaQeEvyvWGJw_3ihSFInF7IQc9iYvOy37fVjfxK9A7rZaK4&usqp=CAU",
  //     attack: 48,
  //     defense: 13,
  //     hp: 31,
  //     type: "Fire",
  //     idAuthor: 1,
  //   };
  //   PokemonService.getByID(pokemonID).then((data) => {
  //     expect(data).toEqual(PokemonModel);
  //     done();
  //   });
  // });
  test("GetById - Debe de obtener un error si pokemon no existe", (done) => {
    const pokemonID: number = 1;
    PokemonService.getByID(pokemonID)
      .then((data) => {
        expect(data).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No existe el pokemon id ${pokemonID}`);
        done();
      });
  });

  // test("Crear - Se debe crear un Pokemon y me debe devolver los mismo campos execto el id", (done) => {
  //   const PokemonModelCreate = {
  //     id: 0,
  //     name: "TDD - Pokemon",
  //     image:
  //       "https://assets.gamepur.com/wp-content/uploads/2022/07/18152918/Eevee-Pokemon-640x480.jpg",
  //     attack: 44,
  //     defense: 60,
  //     idAuthor: 1,
  //     hp: 100,
  //     type: "water",
  //   };
  //   PokemonService.create(PokemonModelCreate).then((data) => {
  //     expect({
  //       name: data.name,
  //       image: data.image,
  //       attack: data.attack,
  //       defense: data.defense,
  //       hp: data.hp,
  //       type: data.type,
  //     }).toEqual({
  //       name: "TDD - Pokemon",
  //       image:
  //         "https://assets.gamepur.com/wp-content/uploads/2022/07/18152918/Eevee-Pokemon-640x480.jpg",
  //       attack: 44,
  //       defense: 60,
  //       hp: 100,
  //       type: "water",
  //     });
  //     done();
  //   });
  // });
  // test("Editar - Se debe editar Pokemon y me debe devolver los mismos datos que envio", (done) => {
  //   const PokemonModelEdit = {
  //     id: 3007,
  //     name: "TDD Editar 2 - Pokemon",
  //     image:
  //       "https://assets.gamepur.com/wp-content/uploads/2022/07/18152918/Eevee-Pokemon-640x480.jpg",
  //     attack: 44,
  //     defense: 60,
  //     idAuthor: 1,
  //     hp: 100,
  //     type: "water",
  //   };
  //   PokemonService.edit(PokemonModelEdit).then((data) => {
  //     expect({
  //       id: data.id,
  //       name: data.name,
  //       image: data.image,
  //       attack: data.attack,
  //       defense: data.defense,
  //       hp: data.hp,
  //       type: data.type,
  //     }).toEqual({
  //       id: 3007,
  //       name: "TDD Editar 2 - Pokemon",
  //       image:
  //         "https://assets.gamepur.com/wp-content/uploads/2022/07/18152918/Eevee-Pokemon-640x480.jpg",
  //       attack: 44,
  //       defense: 60,
  //       hp: 100,
  //       type: "water",
  //     });
  //     done();
  //   });
  // });
  // test("Eliminar - Se debe eliminar el pokemon y devuelve un true", (done) => {
  //   const PokemonModelDelete = {
  //     id: 3012,
  //     name: "TDD Editar 2 - Pokemon",
  //     image:
  //       "https://assets.gamepur.com/wp-content/uploads/2022/07/18152918/Eevee-Pokemon-640x480.jpg",
  //     attack: 44,
  //     defense: 60,
  //     idAuthor: 1,
  //     hp: 100,
  //     type: "water",
  //   };
  //   PokemonService.remove(PokemonModelDelete).then((data) => {
  //     expect(data).toBeTruthy;
  //     done();
  //   });
  // });
});
