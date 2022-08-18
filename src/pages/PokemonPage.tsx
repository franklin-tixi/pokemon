import { PokemonModel, PokemonService } from "@pages";
import {
  AppCrudBar,
  AppFormDialog,
  AppTable,
  AppTextField,
  AppSliderBar,
} from "@component";
import { CrudHelper, CrudState } from "@helpers/crud";

interface State extends CrudState<PokemonModel> {
  search: string;
}

/**
 * Class Page para Crud
 */
export class PokemonPage extends CrudHelper<PokemonModel, State> {
  /**
   * State of Pokemon
   */
  public state: State = {
    search: "",
    openForm: false,
    elementIndex: -1,
    element: new PokemonModel({}),
    list: [],
  };

  /********************************************************
   *                         METHODS                      *
   ********************************************************/
  //#region METHODS
  /**
   * Load pokemon data
   */
  async loadPokemons() {
    this.load(PokemonService.getAll);
  }

  /**
   * Submit in dialog
   */
  async submit() {
    if (this.state.element.id > 0) {
      this.editPokemon();
    } else {
      this.createPokemon();
    }
  }
  /**
   * Create pokemon
   */
  async createPokemon() {
    this.create(PokemonService.create, PokemonService.getAll);
  }

  /**
   * Edit pokemon
   */
  async editPokemon() {
    this.edit(PokemonService.edit);
  }

  /**
   * Delete pokemon
   */
  async deletePokemon(pokemon: PokemonModel): Promise<void> {
    this.remove(() => PokemonService.remove(pokemon), PokemonService.getAll);
  }

  /**
   * Mount component
   */
  public async componentDidMount(): Promise<void> {
    await this.loadPokemons();
  }
  //#endregion

  render() {
    // SETEAR DATA IN LIST
    const list = this.state.list
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      .filter((p) =>
        this.state.search
          ? Object.values({ ...p, image: undefined, type: undefined })
              .join()
              .toLowerCase()
              .indexOf(this.state.search.toLowerCase()) > -1
          : true
      );
    return (
      <>
        {/* CRUD BAR */}
        <AppCrudBar
          title="Listado de Pokemon"
          onClickAdd={() =>
            this.setState({ openForm: true, element: new PokemonModel({}) })
          }
          onSearch={(search) => this.setState({ search })}
        />

        {/* TABLE */}
        <AppTable>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Imagen</td>
              <td>Ataque</td>
              <td>Defensa</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {list.map((row, index) => (
              <tr key={row.id}>
                <td style={{ textAlign: "left" }}>{row.name}</td>
                <td>
                  <img src={row.image} height="50"></img>
                </td>
                <td style={{ textAlign: "left" }}>{row.attack}</td>
                <td style={{ textAlign: "left" }}>{row.defense}</td>
                <td style={{ textAlign: "center" }}>
                  <i
                    className="edit"
                    onClick={() => this.toEdit(row, PokemonService.getByID)}
                  ></i>
                  <i
                    className="delete"
                    onClick={() => this.deletePokemon(row)}
                  ></i>
                </td>
              </tr>
            ))}
            {list.length === 0 && this.state.search && (
              <tr>
                <td colSpan={5}>Busqueda sin resultados</td>
              </tr>
            )}
          </tbody>
        </AppTable>

        {/* DIALOG */}
        <AppFormDialog
          open={this.state.openForm}
          title="Nuevo Pokemon"
          onClose={() => {
            this.setState({ openForm: false });
          }}
          onSubmit={() => {
            this.submit();
          }}
          disabled={
            !(
              this.state.element.name.length > 0 &&
              this.state.element.image.length > 0
            )
          }
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <AppTextField
                    className="text-field"
                    label="Nombre:"
                    name="name"
                    value={this.state.element.name}
                    onChange={(v) => this.elementProp("name", v)}
                    required
                  />
                </td>
                <td>
                  <AppSliderBar
                    label="Ataque:"
                    valueMinimum={0}
                    valueMaximum={100}
                    name="attack"
                    value={this.state.element.attack}
                    onChange={(v) => this.elementProp("attack", v)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <AppTextField
                    className="text-field"
                    label="Imagen:"
                    placeholder="url"
                    name="image"
                    value={this.state.element.image}
                    onChange={(v) => this.elementProp("image", v)}
                    required
                    type="url"
                  />
                </td>
                <td>
                  <AppSliderBar
                    label="Defensa:"
                    valueMinimum={0}
                    valueMaximum={100}
                    name="defense"
                    value={this.state.element.defense}
                    onChange={(v) => this.elementProp("defense", v)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </AppFormDialog>
      </>
    );
  }
}
