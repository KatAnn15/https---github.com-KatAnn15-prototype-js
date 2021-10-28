import LoginPage from "../LoginPage/LoginPage";

const styles = {
  login: {
    dark: {
      color: "red",
      bgColor: "white",
    },
    light: {
      color: "white",
      bgColor: "red",
    },
  },
  subscribe: {
    dark: {
      color: "white",
      bgColor: "red",
    },
    light: {
      color: "red",
      bgColor: "white",
    },
  },
};

export function changeButtonsStyle(
  theme: string,
  element: HTMLButtonElement,
  name: string
) {
  if (
    (theme == "dark" || theme == "light") &&
    (name == "login" || name == "subscribe")
  ) {
    element.style.color = styles[name][theme].color;
    element.style.backgroundColor = styles[name][theme].bgColor;
  }
}

export function changeButtonsLabels(
  button: HTMLButtonElement,
  status: Boolean,
  email: null | string,
  id: string
) {
  if (id == "login") {
    button.textContent = status ? "Welcome, " + email.split("@")[0] : "Sign Up";
  }
}

export function manageBtnClick(id: string, root: HTMLElement) {
  switch (id) {
    case "login":
      new LoginPage(root);
      break;
    case "subscribe":
      console.log("subscribe!");
      break;
  }
}
