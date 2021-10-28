import {
  reducerActionArrInt,
  reducerActionInt,
  reducerActionMemberInt,
  reducerActionObjInt,
} from "./Interfaces";
import {
  RENDER_LOGO,
  RENDER_THEME,
  SET_LIST_TRANSFORM,
  SET_MEMBER_STATUS,
  SET_MOVIES_PAGE_CONTENT,
  SET_SEARCH_DATA,
} from "./Types";

export function setLogoType(value: string) {
  return { type: RENDER_LOGO, value: value };
}
export function setTheme(value: string) {
  return { type: RENDER_THEME, value: value };
}

export function setMemberStatus(
  value: reducerActionMemberInt["action"]["value"]
) {
  return { type: SET_MEMBER_STATUS, value: value };
}

export function setSearchData(value: reducerActionArrInt["action"]["value"]) {
  return { type: SET_SEARCH_DATA, value: value };
}

export function setMoviesPageState(value: reducerActionInt["action"]["value"]) {
  return { type: SET_MOVIES_PAGE_CONTENT, value: value };
}

export function setListTranslateValue(
  value: reducerActionObjInt["action"]["value"]
) {
  return { type: SET_LIST_TRANSFORM, value: value };
}
