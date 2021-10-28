import { createElement } from "@actions/ElementHandler.ts";
import { signInEmailPassword } from "@fire/firebase_actions.ts";
import { closeLoginPage } from "../../LoginPageActions";
import styles from "./LoginForm.module.css";
import { Login_Form_Inputs } from "./LoginFormInputs";

export default class LogInForm {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }

  renderInputs(parent: HTMLElement) {
    return Login_Form_Inputs.map((input) => {
      const inputEl = createElement(
        "input",
        "login-form_input"
      ) as HTMLInputElement;
      inputEl.type = input.type;
      inputEl.name = input.name;
      inputEl.placeholder = input.placeholder;
      parent.append(inputEl);
    });
  }
  renderButton() {
    const button = createElement(
      "button",
      styles["login-form_btn"]
    ) as HTMLButtonElement;
    button.textContent = "Log In";
    button.type = "button";
    return button;
  }
  handleSubmit(button: HTMLButtonElement, form: HTMLFormElement) {
    button.addEventListener("click", () => {
      const formData = new FormData(form);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      signInEmailPassword(email, password)
        .then((response: any) => {
          console.log(response);
          closeLoginPage();
        })
        .catch((err: any) => console.log(err));
    });
  }
  render() {
    const form = createElement(
      "form",
      styles["login-form-wrapper"]
    ) as HTMLFormElement;
    const button = this.renderButton();
    this.renderInputs(form);
    this.handleSubmit(button, form);
    form.append(button);
    this.root.append(form);
  }
}
