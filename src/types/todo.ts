export interface ListItemProps {
  id?: number;
  text?: string;
  isComplete: boolean;
}

export interface ListProps {
  list: ListItemProps[];
}

export interface ToggleCompleteProps {
  toggleComplete: (id: number) => void;
}
