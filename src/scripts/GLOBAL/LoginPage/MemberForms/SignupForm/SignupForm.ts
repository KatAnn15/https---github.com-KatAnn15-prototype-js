import { createElement } from "@actions/ElementHandler.ts";
import { registerEmailPassword } from "@fire/firebase_actions.ts";
import { closeLoginPage } from "../../LoginPageActions";
import styles from "./SignupForm.module.css";
import { Signup_Form_Inputs } from "./SignupFormInputs";

export default class SignUpForm {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }

  renderInputs(parent: HTMLFormElement) {
    return Signup_Form_Inputs.map((input) => {
      const inputEl = createElement(
        "input",
        "signup-form_input"
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
      styles["signup-form_btn"]
    ) as HTMLButtonElement;
    button.textContent = "Sign Up";
    button.type = "button";
    return button;
  }

  handleSubmit(button: HTMLButtonElement, form: HTMLFormElement) {
    button.addEventListener("click", () => {
      const formData = new FormData(form);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      registerEmailPassword(email, password)
        .then((response: any) => {
          closeLoginPage();
        })
        .catch((err: any) => console.log(err));
    });
  }
  render() {
    const form = createElement(
      "form",
      styles["signup-form-wrapper"]
    ) as HTMLFormElement;
    const button = this.renderButton();
    this.handleSubmit(button, form);
    this.renderInputs(form);
    form.append(button);
    this.root.append(form);
  }
}
