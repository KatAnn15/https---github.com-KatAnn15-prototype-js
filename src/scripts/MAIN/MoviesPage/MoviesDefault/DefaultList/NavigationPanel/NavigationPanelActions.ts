import { setListTranslateValue } from "@redux/Actions";
import { store } from "@redux/CommonReducer";
import styles from "./NavigationPanel.module.css";

export const limit = 200;

export function handleClick(operator: string | null, title: string) {
  if (operator) {
    const state = store.getState().listTransform;
    switch (operator) {
      case "add":
        store.dispatch(
          setListTranslateValue({ title: title, value: state.value + limit })
        );
        break;
      case "remove":
        store.dispatch(
          setListTranslateValue({ title: title, value: state.value - limit })
        );
        break;
    }
  }
}

export function handleButtonRender(
  title: string,
  button: HTMLElement,
  list: HTMLElement
) {
  store.subscribe(() => {
    const state = store.getState().listTransform;
    const rect = list.lastElementChild.getBoundingClientRect();
    const listWidth = list.offsetWidth;
    console.log(state.title, title);
    if (state.title === title) {
      if (state.value == 0) {
        if (button.classList.contains(styles["nav-button-back"]))
          button.style.display = "none";
      } else if (rect.right < listWidth) {
        if (button.classList.contains(styles["nav-button-forth"]))
          button.style.display = "none";
      }
    } else if (state.title === title) {
      button.style.display = "block";
    }
  });
}
