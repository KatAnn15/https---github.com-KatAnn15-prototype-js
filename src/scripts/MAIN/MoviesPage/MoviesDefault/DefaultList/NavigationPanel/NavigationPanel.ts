import { createElement } from "@actions/ElementHandler";
import styles from "./NavigationPanel.module.css";
import { handleClick, handleButtonRender } from "./NavigationPanelActions";

export default class NavigationPanel {
  root: HTMLElement;
  title: string;
  list: HTMLElement;
  constructor(root: HTMLElement, title: string, list: HTMLElement) {
    this.root = root;
    this.title = title;
    this.list = list;
    this.render();
  }
  renderContent(parent: HTMLElement) {
    const buttons = [
      { name: "back", code: "&lang;", operator: "add" },
      { name: "forth", code: "&rang;", operator: "remove" },
    ];
    buttons.forEach((item) => {
      const button = createElement("button", styles["nav-button-" + item.name]);
      button.innerHTML = item.code;
      button.addEventListener("click", () =>
        handleClick(item.operator, this.title)
      );
      parent.append(button);
      handleButtonRender(this.title, button, this.list);
    });
  }
  render() {
    this.renderContent(this.root);
  }
}
