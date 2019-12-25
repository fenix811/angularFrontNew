import Order from "../../core/interfaces/order";
import { EOrdersActionTypes, OrderActions } from "./ordersTabState.action";

export interface OrdersTabState {
  orders: Order[];
}

export const initialState: OrdersTabState = {
  orders: [],
}

export const ordersTabReducer = (
  state = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case EOrdersActionTypes.LoadOrdersSuccess:{
      return {
        ...state,
        orders: action.payload,
      };
    }

  default:
    return state;
}
}

