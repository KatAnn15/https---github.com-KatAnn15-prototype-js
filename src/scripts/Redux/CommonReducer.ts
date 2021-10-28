import { combineReducers, createStore } from "redux";
import {
  ListTranslateReducer,
  LogoReducer,
  MemberReducer,
  MoviesPageDataReducer,
  SearchDataReducer,
  ThemeReducer,
} from "./Reducers";

export const RootReducer = combineReducers({
  logo: LogoReducer,
  theme: ThemeReducer,
  member: MemberReducer,
  search: SearchDataReducer,
  moviesPage: MoviesPageDataReducer,
  listTransform: ListTranslateReducer,
});
export const store = createStore(RootReducer);
