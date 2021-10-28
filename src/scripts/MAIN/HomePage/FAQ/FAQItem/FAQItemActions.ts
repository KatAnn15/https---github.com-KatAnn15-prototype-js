import { createElement } from "@actions/ElementHandler.ts";
import styles from "./FAQItem.module.css";

export function renderQuestion(
  data: { question: string },
  answer: HTMLElement
) {
  const qDiv = createElement("div", styles["question-container"]);
  const qText = createElement("h3", styles["question_text"]);
  qText.textContent = data.question;
  qDiv.append(qText);
  qDiv.addEventListener("click", () => {
    answer.classList.toggle(styles["toggle"]);
  });
  qDiv;
  return qDiv;
}

export function renderAnswer(data: { answer: string }) {
  const aDiv = createElement("div", styles["answer-container"]);
  const aText = createElement("p", styles["answer"]);
  aText.textContent = data.answer;
  aDiv.append(aText);
  return aDiv;
}
