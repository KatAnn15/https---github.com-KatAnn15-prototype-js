import Logo from "../../Logo/Logo";
import MembersBar from "../../MembersBar/MembersBar";
import styles from "./Header_Global.module.css";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
import { createElement } from "../../../Actions/ElementHandler";
import { GLOBAL } from "./Tags";
import SearchBar from "../../SearchBar/SearchBar";

export default class Header_Global {
  root: HTMLElement;
  tag: string;
  constructor(root: HTMLElement, tag: string) {
    this.root = root;
    this.tag = tag;
    this.render();
  }
  renderMembersBar(parent: HTMLElement) {
    new MembersBar(parent);
  }
  renderLogo(parent: HTMLElement) {
    new Logo(parent);
  }
  renderThemeSwitch(parent: HTMLElement) {
    new ThemeSwitch(parent);
  }
  renderSearch(parent: HTMLElement) {
    if (this.tag === GLOBAL) {
      new SearchBar(parent);
    }
  }
  render() {
    const div: HTMLElement = createElement(
      "div",
      styles["header_home-wrapper"]
    );
    this.renderLogo(div);
    this.renderSearch(div);
    this.renderMembersBar(div);
    this.renderThemeSwitch(div);
    this.root.append(div);
  }
}
