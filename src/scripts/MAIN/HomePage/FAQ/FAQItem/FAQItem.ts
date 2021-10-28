import { createElement } from "@actions/ElementHandler.ts";
import styles from "./FAQItem.module.css";
import { renderAnswer, renderQuestion } from "./FAQItemActions";

export default class FAQItem {
  root: HTMLElement;
  data: { question: string; answer: string; sort: number };
  constructor(
    root: HTMLElement,
    data: { question: string; answer: string; sort: number }
  ) {
    this.root = root;
    this.data = data;
    this.render();
  }
  renderItem(parent: HTMLElement) {
    const answer = renderAnswer(this.data);
    const question = renderQuestion(this.data, answer);
    parent.append(question, answer);
  }
  render() {
    const div = createElement("div", styles["faq-item-wrapper"]);
    this.renderItem(div);
    this.root.append(div);
  }
}
