import { store } from "@redux/CommonReducer.ts";
import { MEMBERS_BAR_BUTTONS } from "./Buttons";
import styles from "./MembersBar.module.css";
import {
  changeButtonsLabels,
  changeButtonsStyle,
  manageBtnClick,
} from "./MembersBarActions";

export default class MembersBar {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }

  renderButtons(container: HTMLDivElement) {
    MEMBERS_BAR_BUTTONS.forEach((button) => {
      const btn = document.createElement("button");
      btn.className = styles["member-btn"];
      btn.textContent = button.defaultLabel;
      const theme = store.getState().theme;
      changeButtonsStyle(theme, btn, button.id);
      this.manageButtonStyle(btn, button.id);
      btn.addEventListener("click", () => {
        console.log("click!", button.id);
        manageBtnClick(button.id, document.querySelector("main"));
      });
      container.append(btn);
    });
  }

  manageButtonStyle(button: HTMLButtonElement, id: string) {
    store.subscribe(() => {
      const newTheme: string = store.getState().theme;
      changeButtonsStyle(newTheme, button, id);
      const newMember = store.getState().member;
      changeButtonsLabels(button, newMember.loggedIn, newMember.email, id);
    });
  }

  render() {
    const div = document.createElement("div");
    div.className = styles["members-bar-wrapper"];
    this.renderButtons(div);
    this.root.append(div);
  }
}
