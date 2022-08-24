import React, { Component } from "react";

/**
 * Page State
 */
export interface PageState<E extends Object> {
  /** Element to create or edit */
  element: E;
}

/**
 * Crud State
 */
export interface CrudState<E extends Object> extends PageState<E> {
  /** Launch form dialog */
  openForm: boolean;

  /** Index of the item being edited */
  elementIndex: number;

  /** List of elements */
  list: Array<E>;
}

/**
 *
 */
export class PageHelper<
  E extends Object, // Element
  S extends PageState<E>, // State
  P extends Object = {} // Props
> extends Component<P, S> {}

/**
 *
 */

export class CrudHelper<
  E extends Object, // Element
  S extends CrudState<E>, // State
  P extends Object = {} // Props
> extends PageHelper<E, S, P> {
  /**
   * Prepare state to load list data
   * @param event
   */
  async load(event: Function): Promise<void> {
    return new Promise<void>(async (resolve) => {
      this.setState({ list: [] });
      this.setState({ list: await event() }, () => resolve());
    });
  }

  /**
   *
   * @param eventCreate
   * @param eventLoad
   */
  async create(eventCreate: Function, eventLoad: Function): Promise<void> {
    try {
      const data = await eventCreate(this.state.element);
      if (data) {
        this.load(eventLoad);
        this.setState({ openForm: false });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  /**
   *
   */
  async toEdit(model: E, eventGetById: Function): Promise<void> {
    try {
      const { id } = model as any;
      const elementIndex = this.state.list.findIndex((p: any) => p.id === id);
      const data = await eventGetById(id);
      this.setState({ element: data, openForm: true, elementIndex });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  /**
   *
   * @param eventEdit
   */
  async edit(eventEdit: Function): Promise<void> {
    try {
      const data = await eventEdit(this.state.element);
      if (data) {
        const list = [...this.state.list];
        Object.assign(list[this.state.elementIndex], data);
        this.setState({ list, openForm: false });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  /**
   *
   * @param eventDelete
   * @param eventLoad
   */
  async remove(eventDelete: Function, eventLoad: Function): Promise<void> {
    try {
      const result = await eventDelete();
      if (result) {
        this.load(eventLoad);
      } else {
        console.log("No se puedo eliminar en el servidor");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns
   */
  elementProp(key: keyof E, value: any): Promise<void> {
    return new Promise<void>((resolve) => {
      this.setState({ element: { ...this.state.element, [key]: value } }, () =>
        resolve()
      );
    });
  }
}
