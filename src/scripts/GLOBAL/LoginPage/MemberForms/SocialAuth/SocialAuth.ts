import { createElement } from "@actions/ElementHandler.ts";
import SocialButton from "./SocialButton/SocialButton";
import { Social_Buttons_List } from "./SocialButtonsList";
import styles from "./SocialAuth.module.css";

export default class SocialAuth {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderGooleButton(parent: HTMLElement) {
    Social_Buttons_List.forEach((buttonInfo) => {
      new SocialButton(parent, buttonInfo);
    });
  }
  render() {
    const div = createElement("div", styles["social-auth-wrapper"]);
    this.renderGooleButton(div);
    this.root.append(div);
  }
}
