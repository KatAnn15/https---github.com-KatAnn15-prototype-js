import Header_Global from "../../GLOBAL/Header/Header_Global/Header_Global";
import AboveTheFold from "./AboveTheFold/AboveTheFold";
import FAQ from "./FAQ/FAQ";
import ListGallery from "./ListGallery/ListGallery";
import "../../../scripts/index.css";
import { HOME } from "../../GLOBAL/Header/Header_Global/Tags";

export default class HomePage {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderHeader(parent: HTMLElement) {
    new Header_Global(parent, HOME);
  }
  renderAboveTheFold(parent: HTMLElement) {
    new AboveTheFold(parent);
  }
  renderListGallery(parent: HTMLElement) {
    new ListGallery(parent);
  }
  renderFAQ(parent: HTMLElement) {
    new FAQ(parent);
  }
  renderStructure() {
    const header = document.createElement("header");
    this.renderHeader(header);
    const main = document.createElement("main");
    this.renderAboveTheFold(main);
    this.renderListGallery(main);
    this.renderFAQ(main);
    const footer = document.createElement("footer");
    this.root.append(header, main, footer);
  }
  render() {
    this.renderStructure();
  }
}

const root = document.getElementById("root");
new HomePage(root);
