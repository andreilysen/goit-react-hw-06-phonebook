import { createStore, combineReducers } from "redux";
import { contactsReducer, filterReducer } from "./reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  //   filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;
