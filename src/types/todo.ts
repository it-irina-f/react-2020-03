export interface ListItemProps {
  id?: number;
  text?: string;
  isComplete: boolean;
}

export interface ListProps {
  list: ListItemProps[];
}

export type ToggleCompleteProps = (id: number) => void;

export type AddFormProps = (text: string) => void;
