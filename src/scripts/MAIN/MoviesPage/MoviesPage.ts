import { createElement } from "@actions/ElementHandler.ts";
import Header_Global from "../../GLOBAL/Header/Header_Global/Header_Global";
import { GLOBAL } from "../../GLOBAL/Header/Header_Global/Tags";
import "../../index.css";
import MoviesDefault from "./MoviesDefault/MoviesDefault";

export default class MoviesPage {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderHeader(parent: HTMLElement) {
    new Header_Global(parent, GLOBAL);
  }
  renderContent(parent: HTMLElement) {
    new MoviesDefault(parent);
  }
  render() {
    const div = createElement("div", "movies-page-wrapper");
    this.renderHeader(div);
    this.renderContent(div);
    this.root.append(div);
  }
}

const root = document.getElementById("root");
new MoviesPage(root);
