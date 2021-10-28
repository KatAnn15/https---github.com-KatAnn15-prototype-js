import { createElement } from "@actions/ElementHandler.ts";
import { getFirestoreData } from "@fire/firebase_actions.ts";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem/FAQItem";

export default class FAQ {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  async getData(parent: HTMLElement) {
    const div = createElement("div", styles["faq-container"]);
    const data = await getFirestoreData("FAQ");
    const sorted = data.sort(
      (a: { sort: number }, b: { sort: number }) => a.sort - b.sort
    );
    sorted.forEach((item: any) => new FAQItem(div, item));
    parent.append(div);
  }
  render() {
    const div = createElement("div", styles["faq-wrapper"]);
    const title = createElement("h2", styles["faq_title"]);
    title.textContent = "Frequently Asked Questions";
    div.append(title);
    this.getData(div);
    this.root.append(div);
  }
}
