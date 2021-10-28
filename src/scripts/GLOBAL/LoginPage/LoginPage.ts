import { stylePage } from "./LoginPageActions";
import { createElement } from "@actions/ElementHandler";
import MemberForm from "./MemberForms/MemberForms";

export default class LoginPage {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderLoginForm(parent: HTMLElement) {
    new MemberForm(parent);
  }
  render() {
    const div = createElement("div", "login-page-wrapper");
    this.renderLoginForm(div);
    stylePage(div);
    div.style.zIndex = "5";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    this.root.append(div);
  }
}
