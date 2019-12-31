import Order from "../../core/interfaces/order";
import { EOrdersActionTypes, OrderActions } from "./ordersTabState.action";

export interface OrdersTabState {
  orders: Order[];
  dates: string[]
}

export const initialState: OrdersTabState = {
  orders: [],
  dates: []
}

export const ordersTabReducer = (
  state = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case EOrdersActionTypes.LoadOrdersSuccess:{
      return {
        ...state,
        orders: action.payload.orders,
        dates: [...action.payload.dates]
      };
    }

  default:
    return state;
}
}

