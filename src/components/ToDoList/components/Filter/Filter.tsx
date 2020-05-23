import React from "react";
import { Button, Input } from "sancho";
import type { TypeAddForm, TypeFilterMode } from "types/todo";

interface FilterProps {
  filterList: TypeAddForm;
}

interface FilterState {
  mode: TypeFilterMode[];
}

const modeFilter = [
  { id: "all", title: "Все", isActive: true },
  { id: "active", title: "Активные", isActive: false },
  { id: "done", title: "Завершенные", isActive: false },
];

Button.displayName = "Button";

export class Filter extends React.Component<FilterProps, FilterState> {
  state = {
    mode: modeFilter,
  };

  clickHandler = (id: string) => {
    this.props.filterList(id);
    const updBtns = this.state.mode.map((row) => {
      if (row.id === id) {
        return { ...row, isActive: true };
      }
      return { ...row, isActive: false };
    });

    this.setState({
      mode: updBtns,
    });
  };

  render() {
    return (
      <>
        {this.state.mode.map((row) =>
          row.isActive === true ? (
            <Button key={"btn_" + row.id} intent="primary">
              {row.title}
            </Button>
          ) : (
            <Button
              key={"btn_" + row.id}
              onClick={() => this.clickHandler(row.id)}
            >
              {row.title}
            </Button>
          )
        )}
      </>
    );
  }
}
