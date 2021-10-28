import styles from "./ThemeSwitch.module.css";
import { store } from "@redux/CommonReducer.ts";
import { setTheme } from "@redux/Actions.ts";
import { changeStyle } from "./ThemeSwitchActions";

const body = document.querySelector("body");

export default class ThemeSwitch {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderSwitch(parent: HTMLDivElement) {
    const div = document.createElement("div");
    div.className = styles["theme-switch-element"];
    const span = document.createElement("span");
    span.className = styles["span"];
    this.renderTheme(span);
    div.addEventListener("click", () => {
      this.changeTheme();
    });
    div.append(span);
    parent.append(div);
  }
  renderTheme(span: HTMLSpanElement) {
    store.subscribe(() => {
      const currentTheme = store.getState().theme;
      changeStyle(currentTheme, body, span);
    });
  }
  changeTheme() {
    const theme = store.getState().theme;
    const newTheme = theme === "dark" ? "light" : "dark";
    store.dispatch(setTheme(newTheme));
  }
  render() {
    const divContainer = document.createElement("div");
    divContainer.className = styles["theme-switch-container"];
    const div = document.createElement("div");
    div.className = styles["theme-switch-wrapper"];
    this.renderSwitch(div);
    divContainer.append(div);
    this.root.append(divContainer);
    this.changeTheme();
  }
}
