import { createElement } from "@actions/ElementHandler.ts";
import { closeLoginPage, setThisMemberStatus } from "../../../LoginPageActions";
import styles from "./SocialButton.module.css";
import { SocialButtonTypes } from "./SocialButtonTypes";

export default class SocialButton {
  root: HTMLElement;
  data: SocialButtonTypes["button"];
  constructor(root: HTMLElement, data: SocialButtonTypes["button"]) {
    this.root = root;
    this.data = data;
    this.render();
  }
  renderButton(parent: HTMLElement) {
    const button = createElement(
      "button",
      styles["social-button"]
    ) as HTMLButtonElement;
    button.type = "button";
    button.textContent = this.data.textContent;
    button.style.backgroundColor = this.data.backgroundColor;
    button.style.color = this.data.color;
    button.addEventListener("click", () => {
      this.data.callback().then((response) => {
        closeLoginPage();
        setThisMemberStatus(true, response.user.email);
      });
    });
    parent.append(button);
  }
  render() {
    const div = createElement("div", styles["social-button-wrapper"]);
    this.renderButton(div);
    this.root.append(div);
  }
}
