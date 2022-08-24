import { PokemonModel } from "./PokemonModel";

/**
 * Class to define the services and consume the pokemon api
 */
export class PokemonService {
  /**
   * Consult all the register by an accountant
   * @returns
   */
  static async getAll(): Promise<Array<PokemonModel>> {
    return new Promise<Array<PokemonModel>>((resolve, reject) => {
      fetch("https://bp-pokemons.herokuapp.com/10?idAuthor=1")
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /**
   * Get data a pokemon
   * @param pokemonID
   * @returns
   */
  static async getByID(pokemonID: number): Promise<PokemonModel> {
    return new Promise<PokemonModel>((resolve, reject) => {
      fetch(`https://bp-pokemons.herokuapp.com/${pokemonID}`)
        .then((res) => res.json())
        .then((data) => resolve(new PokemonModel(data)))
        .catch((error) => reject(`No existe el pokemon id ${pokemonID}`));
    });
  }

  /**
   * create a pokemon
   * @param pokemon
   * @returns
   */
  static async create(pokemon: PokemonModel): Promise<PokemonModel> {
    return new Promise<PokemonModel>((resolve, reject) => {
      fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /**
   * Edit a pokemon
   * @param pokemon
   * @returns
   */
  static async edit(pokemon: PokemonModel): Promise<PokemonModel> {
    return new Promise<PokemonModel>((resolve, reject) => {
      fetch(`https://bp-pokemons.herokuapp.com/${pokemon.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /**
   * Delete a pokemon
   * @param model '
   * @returns
   */
  static async remove(model: PokemonModel): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      fetch(`https://bp-pokemons.herokuapp.com/${model.id}`, {
        method: "DELETE",
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data.success))
        .catch((error) => reject(error));
    });
  }
}
