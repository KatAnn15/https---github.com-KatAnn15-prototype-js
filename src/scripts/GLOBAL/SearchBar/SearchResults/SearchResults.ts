import styles from "./SearchResults.module.css";
import { createElement } from "@actions/ElementHandler";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import { store } from "@redux/CommonReducer";

export default class SearchResults {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderData(parent: HTMLElement) {
    store.subscribe(() => {
      const data = store.getState().search;
      while (parent.lastChild) {
        parent.lastChild.remove();
      }
      if (data.length > 0) {
        data.forEach((item) => new SearchResultItem(parent, item));
      }
    });
  }
  render() {
    const div = createElement("div", styles["search-results-wrapper"]);
    this.renderData(div);
    this.root.append(div);
  }
}
