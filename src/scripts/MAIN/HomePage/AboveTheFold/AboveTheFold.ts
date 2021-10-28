import { createElement } from "@actions/ElementHandler.ts";
import styles from "./AboveTheFold.module.css";
import { getFirestoreData } from "@fire/firebase_actions.ts";
import AboveTheFoldInfo from "./AboveTheFoldInfo/AboveTheFoldInfo";

export default class AboveTheFold {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  async renderContent(parent: HTMLElement) {
    const dataArray: any = await getFirestoreData("ATF");
    const data = dataArray[0];
    const url = data.imageURL;
    parent.style.background = `URL(${url})`;
    parent.style.backgroundSize = "120%";
    parent.style.backgroundPosition = "50%";
    new AboveTheFoldInfo(parent, data);
  }

  render() {
    const div = createElement("div", styles["above-the-fold-wrapper"]);
    const overlay = createElement("div", styles["overlay"]);
    div.append(overlay);
    this.renderContent(div);
    this.root.append(div);
  }
}
