import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import stocksReducer from "./stocks_reducer";
import newsReducer from "./news_reducer";
import ordersReducer from "./orders_reducer";
import watchReducer from "./watches_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  orders: ordersReducer,
  watches: watchReducer,
  news: newsReducer
});

export default entitiesReducer;