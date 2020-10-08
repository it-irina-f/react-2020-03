import { actions, reducer, initialState } from "./reducer";

describe("ToDoList reducer", () => {
  const list = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075828961, text: "убрать квартиру", isComplete: true },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const list2 = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075828961, text: "убрать квартиру", isComplete: true },
    { id: 1602075831860, text: "погулять с собакой", isComplete: true },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const list3 = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075828961, text: "убрать квартиру", isComplete: false },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const list4 = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const list5 = [
    { id: 1602075826692, text: "оплатить жкх и налоги", isComplete: false },
    { id: 1602075828961, text: "убрать квартиру", isComplete: true },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const appState = {
    list: list,
    isLoading: false,
    editId: -1,
    filter: "all",
    queryResult: [],
    textInput: "",
  };

  const appStateFilterActive = {
    ...appState,
    filter: "active",
  };

  const appStateEditItem = {
    ...appState,
    editId: 1602075826692,
    textInput: "оплатить жкх",
  };

  it("set list from Session", () => {
    expect(reducer(initialState, actions.setList(list))).toEqual({
      ...initialState,
      list: list,
    });
  });

  it("change Filter: check tab Active", () => {
    expect(reducer(appState, actions.changeFilter("active"))).toEqual({
      ...appState,
      filter: "active",
    });
  });

  it("change Filter: check tab Done", () => {
    expect(reducer(appState, actions.changeFilter("done"))).toEqual({
      ...appState,
      filter: "done",
    });
  });

  it("change Filter: check tab All", () => {
    expect(reducer(appStateFilterActive, actions.changeFilter("all"))).toEqual({
      ...appState,
    });
  });

  it("search in list", () => {
    expect(reducer(appState, actions.searchItem("погулять"))).toEqual({
      ...appState,
      queryResult: [
        { id: 1602075831860, text: "погулять с собакой", isComplete: false },
      ],
    });
  });

  it("check list item as done", () => {
    expect(reducer(appState, actions.toggleComplete(1602075831860))).toEqual({
      ...appState,
      list: list2,
    });
  });

  it("check list item as active", () => {
    expect(reducer(appState, actions.toggleComplete(1602075828961))).toEqual({
      ...appState,
      list: list3,
    });
  });

  it("delete item from list", () => {
    expect(reducer(appState, actions.deleteItem(1602075828961))).toEqual({
      ...appState,
      list: list4,
    });
  });

  it("click edit item", () => {
    expect(reducer(appState, actions.editItem(1602075828961))).toEqual({
      ...appState,
      editId: 1602075828961,
      textInput: "убрать квартиру",
    });
  });

  it("click save item", () => {
    expect(
      reducer(appStateEditItem, actions.saveItem("оплатить жкх и налоги"))
    ).toEqual({
      ...appState,
      list: list5,
    });
  });

  it("add item in empty list", () => {
    expect(
      reducer(initialState, actions.addListItem("купить продукты"))
    ).toEqual({
      ...appState,
      list: [
        {
          id: Date.now() - 1,
          text: "купить продукты",
          isComplete: false,
        },
      ],
    });
  });
});
