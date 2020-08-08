const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
type UserOrderState = Exclude<OrderState, "buyingSupplies" | "producing">;

// Hint: type guards
export const getUserOrderStates = (
  orderStates: OrderState[]
): UserOrderState[] =>
  orderStates.filter(
    (state): state is UserOrderState =>
      state !== "buyingSupplies" && state !== "producing"
  );
