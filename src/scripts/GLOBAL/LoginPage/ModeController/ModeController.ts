import { createElement } from "@actions/ElementHandler.ts";
import LoginForm from "../MemberForms/LoginForm/LoginForm";
import SignUpForm from "../MemberForms/SignupForm/SignupForm";
import styles from "./ModeController.module.css";
let mode = "signup";

export default class ModeController {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  setContext(parent: HTMLElement) {
    const h3 = createElement("h3", "");
    const formsDiv = createElement("div", "controller-forms");
    this.handleModes(h3, parent, formsDiv);
    parent.append(h3, formsDiv);
  }
  renderLoginMode(h3: HTMLElement, parent: HTMLElement, formsDiv: HTMLElement) {
    h3.textContent = "Click here to Sign Up";
    h3.className = styles["mode-controller_login"];
    h3.addEventListener("click", () => {
      mode = "signup";
      this.handleModes(h3, parent, formsDiv);
      this.renderForms;
    });
  }
  renderSignUpMode(
    h3: HTMLElement,
    parent: HTMLElement,
    formsDiv: HTMLElement
  ) {
    h3.textContent = "Click here to Log In";
    h3.className = styles["mode-controller_signup"];
    h3.addEventListener("click", () => {
      mode = "login";
      this.handleModes(h3, parent, formsDiv);
    });
  }
  handleModes(h3: HTMLElement, parent: HTMLElement, formsDiv: HTMLElement) {
    if (mode === "login") {
      this.renderLoginMode(h3, parent, formsDiv);
    } else {
      this.renderSignUpMode(h3, parent, formsDiv);
    }
    this.renderForms(formsDiv);
  }
  renderForms(parent: HTMLElement) {
    if (mode === "login") {
      parent.innerHTML = "";
      new LoginForm(parent);
    } else {
      parent.innerHTML = "";
      new SignUpForm(parent);
    }
  }
  render() {
    const div = createElement("div", styles["mode-controller-wrapper"]);
    this.setContext(div);
    this.root.append(div);
  }
}
