import styles from "./SearchBar.module.css";
import { createElement } from "@actions/ElementHandler";
import { searchMovies } from "@actions/ElementHandler";
import SearchResults from "./SearchResults/SearchResults";
import { store } from "@redux/CommonReducer";
import { setSearchData } from "@redux/Actions";
import { MovieItemInt } from "@tmdb/Types";

export default class SearchBar {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  setValue(input: HTMLInputElement, div: HTMLElement) {
    input.addEventListener("input", (event: InputEvent) => {
      const value = input.value;
      if (value) {
        this.renderMoviesList(div, value);
      } else {
        store.dispatch(setSearchData([]));
      }
    });
  }
  async renderMoviesList(parent: HTMLElement, value: string) {
    const list: { results: MovieItemInt["movieItem"][] } = await searchMovies(
      "search/" + value,
      null
    );
    store.dispatch(setSearchData(list.results));
  }
  render() {
    const div = createElement("div", styles["search-bar-wrapper"]);
    const input = createElement(
      "input",
      styles["search_input"]
    ) as HTMLInputElement;
    new SearchResults(div);
    this.setValue(input, div);
    div.append(input);
    this.root.append(div);
  }
}
