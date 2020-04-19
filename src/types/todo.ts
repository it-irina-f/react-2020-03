export interface ListItemProps {
  id?: number;
  text?: string;
  isComplete: boolean;
}

export interface ListProps {
  list: Array<ListItemProps>;
}

export interface ToggleCompleteProps {
  // toggleComplete: (checkedListItem: ListItemProps) => void;
  toggleComplete: (id: number) => void;
}
