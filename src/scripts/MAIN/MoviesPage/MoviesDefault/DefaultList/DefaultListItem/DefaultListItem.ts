import styles from "./DefaultListItem.module.css";
import { createElement } from "@actions/ElementHandler";
import { POSTER_BASE } from "@tmdb/Consts";
import { MovieItemInt } from "@tmdb/Types";

export default class DefaultListItem {
  root: HTMLElement;
  data: MovieItemInt["movieItem"];
  constructor(root: HTMLElement, data: MovieItemInt["movieItem"]) {
    this.root = root;
    this.data = data;
    this.render();
  }
  renderContent(parent: HTMLElement) {
    const title = createElement("h3", styles["title"]);
  }

  render() {
    const div = createElement("div", styles["default-list-item-wrapper"]);
    div.style.background = `url(${POSTER_BASE + this.data.poster_path})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPositionY = "15%";
    this.renderContent(div);
    this.root.append(div);
  }
}
