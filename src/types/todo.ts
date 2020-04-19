export interface ListItemProps {
  text?: string;
  isComplete: boolean;
}

export interface ListProps {
  list: Array<ListItemProps>;
}
