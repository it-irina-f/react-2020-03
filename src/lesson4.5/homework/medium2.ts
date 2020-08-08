// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

type DefaultProps<T> = React.ComponentType<T>["defaultProps"];

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): DefaultProps<T> => {
  return component.defaultProps;
};
