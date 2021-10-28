import {
  reducerActionInt,
  reducerActionArrInt,
  reducerActionMemberInt,
  reducerActionObjInt,
} from "./Interfaces.d";
import {
  RENDER_LOGO,
  RENDER_THEME,
  SET_LIST_TRANSFORM,
  SET_MEMBER_STATUS,
  SET_MOVIES_PAGE_CONTENT,
  SET_SEARCH_DATA,
} from "./Types";

export function LogoReducer(state = "", action: reducerActionInt["action"]) {
  return action.type === RENDER_LOGO ? (state = action.value) : state;
}

export function ThemeReducer(
  state = "light",
  action: reducerActionInt["action"]
) {
  return action.type === RENDER_THEME ? (state = action.value) : state;
}

export function MemberReducer(
  state: reducerActionMemberInt["action"]["value"] = {
    loggedIn: false,
    email: null,
  },
  action: reducerActionMemberInt["action"]
) {
  return action.type === SET_MEMBER_STATUS ? (state = action.value) : state;
}

export function SearchDataReducer(
  state: any[] = [],
  action: reducerActionArrInt["action"]
) {
  return action.type === SET_SEARCH_DATA ? (state = action.value) : state;
}

export function MoviesPageDataReducer(
  state: string = "default",
  action: reducerActionInt["action"]
) {
  return action.type === SET_MOVIES_PAGE_CONTENT
    ? (state = action.value)
    : state;
}

export function ListTranslateReducer(
  state: { title: string; value: number } = { title: "", value: 0 },
  action: reducerActionObjInt["action"]
) {
  return action.type === SET_LIST_TRANSFORM ? (state = action.value) : state;
}
