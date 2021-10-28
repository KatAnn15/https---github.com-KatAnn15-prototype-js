import { createElement } from "@actions/ElementHandler";
import { MOVIES_PAGE_URL } from "@tmdb/Consts";
import styles from "./AboveTheFoldInfo.module.css";

export default class AboveTheFoldInfo {
  root: HTMLElement;
  data: any;
  constructor(root: HTMLElement, data: any) {
    this.root = root;
    this.data = data;
    this.render();
  }
  renderInfo() {
    const div = createElement("div", styles["above-the-fold_info-wrapper"]);
    const title = createElement("h2", styles["title"]);
    title.innerText = this.data.title;
    title.className = styles["title"];
    const subtitle = createElement("h3", styles["subtitle"]);
    subtitle.innerText = this.data.subtitle;
    const actionNote = createElement(
      "h3",
      styles["above-the-fold_action-note"]
    );
    actionNote.innerText = this.data.actionNote;
    actionNote.className = styles["action-note"];
    const button = createElement(
      "button",
      styles["action-btn"]
    ) as HTMLButtonElement;
    button.innerText = "Watch Now";
    button.addEventListener(
      "click",
      () => (window.location.href = MOVIES_PAGE_URL)
    );
    div.append(title, subtitle, actionNote, button);
    this.root.append(div);
  }
  render() {
    this.renderInfo();
  }
}
