const colors = {
  light: {
    color: "black",
    backgroundColor: "#e6e2dc",
    spanColor: "#41354d",
    right: "2px",
    left: "auto",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
    spanColor: "white",
    right: "auto",
    left: "2px",
  },
};

export function changeStyle(
  theme: string,
  body: HTMLBodyElement,
  span: HTMLSpanElement
) {
  let style: {
    color: string;
    backgroundColor: string;
    spanColor: string;
    right: string;
    left: string;
  } = colors.light;
  switch (theme) {
    case "dark":
      style = colors.dark;
      break;
    case "light":
      style = colors.light;
      break;
  }
  body.style.backgroundColor = style.backgroundColor;
  body.style.color = style.color;
  span.style.right = style.right;
  span.style.left = style.left;
  span.style.backgroundColor = style.spanColor;
}
