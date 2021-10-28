import styles from "./DefaultList.module.css";
import { createElement } from "@actions/ElementHandler";
import { MovieItemInt } from "@tmdb/Types";
import DefaultListItem from "./DefaultListItem/DefaultListItem";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import { transformList } from "./DefaultListActions";

export default class DefaultLists {
  root: HTMLElement;
  data: MovieItemInt["movieItem"][];
  title: string;
  constructor(
    root: HTMLElement,
    data: MovieItemInt["movieItem"][],
    title: string
  ) {
    this.root = root;
    this.data = data;
    this.title = title;
    this.render();
  }
  renderNavigation(parent: HTMLElement, list: HTMLElement) {
    new NavigationPanel(parent, this.title, list);
  }
  renderContent() {
    const container = createElement("div", styles["container"]);
    this.data.forEach((item) => new DefaultListItem(container, item));
    transformList(container, this.title);
    return container;
  }
  render() {
    const div = createElement("div", styles["default-list-wrapper"]);
    const title = createElement("h3", styles["title"]);
    title.textContent = this.title.replace(/[_-]/, " ").toUpperCase();
    const container = this.renderContent();
    this.renderNavigation(div, container);
    div.append(title, container);
    this.root.append(div);
  }
}
