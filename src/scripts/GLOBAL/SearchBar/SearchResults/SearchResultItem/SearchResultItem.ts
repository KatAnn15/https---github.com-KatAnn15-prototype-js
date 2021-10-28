import styles from "./SearchResultItem.module.css";
import { createElement } from "@actions/ElementHandler";
import { POSTER_BASE } from "@tmdb/Consts";
import { MovieItemInt } from "@tmdb/Types";

export default class SearchResultItem {
  root: HTMLElement;
  data: MovieItemInt["movieItem"];
  constructor(root: HTMLElement, data: MovieItemInt["movieItem"]) {
    this.root = root;
    this.data = data;
    this.render();
  }
  renderData() {
    const div = createElement("div", styles["search-result-item-wrapper"]);
    if (this.data.poster_path)
      div.style.background = `url(${POSTER_BASE + this.data.poster_path})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPositionY = "25%";
    const title = createElement("h3", styles["title"]);
    title.textContent = this.data.title.slice(0, 15) + "...";
    div.append(title);
    return div;
  }
  render() {
    const div = this.renderData();
    this.root.append(div);
  }
}
