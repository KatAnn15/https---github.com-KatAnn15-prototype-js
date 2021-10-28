import axios from "axios";
import { BASE_URL } from "@tmdb/Consts";

export function createElement(tag: string, className: string) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

export async function searchMovies(value: string, page: number | null) {
  const info = await axios(
    BASE_URL + "/exp/" + value + "/" + (page ? page : "")
  );
  return info.data;
}
