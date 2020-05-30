export interface ListItemProps {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface ListProps {
  list: ListItemProps[];
}

export type TypeIdNumber = (id: number) => void;

export type TypeAddForm = (text: string) => void;

export type TypeSaveListItem = (id: number, text: string) => void;

export interface TypeFilterMode {
  id: string;
  title: string;
  isActive: boolean;
}
