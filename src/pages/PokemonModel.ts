/**
 * Class model pokemon
 */
export class PokemonModel {
  public id: number = 0;
  public name: string = "";
  public image: string = "";
  public attack: number = 50;
  public defense: number = 50;
  public idAuthor: number = 1;
  public hp: number = 1;
  public type: string = "water";

  constructor(data?: Partial<PokemonModel>) {
    //@ts-ignore
    if (data?.id_author) {
      //@ts-ignore
      data.idAuthor = data.id_author;
      //@ts-ignore
      delete data.id_author;
    }
    Object.assign(this, data);
  }
}
