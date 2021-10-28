import { createElement } from "@actions/ElementHandler";
import { store } from "@redux/CommonReducer";
import { searchMovies } from "@actions/ElementHandler";
import styles from "./MoviesDefault.module.css";
import DefaultList from "./DefaultList/DefaultList";
import { MovieItemInt } from "@tmdb/Types";

export default class MoviesDefault {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderLists(parent: HTMLElement) {
    const lists = ["upcoming", "top-rated"];
    lists.forEach(async (listName) => {
      const data: { results: MovieItemInt["movieItem"][] } = await searchMovies(
        listName,
        1
      );
      const itemData = data.results;
      new DefaultList(parent, itemData, listName);
    });
  }
  renderContent(parent: HTMLElement) {
    const title = createElement("h2", styles["title"]);
    title.textContent = "NETFLIX choice";
    parent.append(title);
    this.renderLists(parent);
  }
  render() {
    const div = createElement("div", styles["movies-default-wrapper"]);
    this.renderContent(div);
    store.subscribe(() => {
      const mode = store.getState().moviesPage;
      if (mode === "default") {
        this.root.append(div);
      } else {
        div.remove();
      }
    });
  }
}
