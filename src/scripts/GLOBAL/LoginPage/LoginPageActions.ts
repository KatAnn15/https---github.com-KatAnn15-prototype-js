import { store } from "@redux/CommonReducer";
import { setMemberStatus } from "@redux/Actions";

export function stylePage(div: HTMLElement) {
  div.style.width = "100vw";
  div.style.height = "100vh";
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  div.style.backgroundColor = "white";
}
export function closeLoginPage() {
  const page = document.querySelector(".login-page-wrapper");
  page.remove();
}

export function setThisMemberStatus(status: Boolean, email: string) {
  store.dispatch(setMemberStatus({ loggedIn: status, email: email }));
}
