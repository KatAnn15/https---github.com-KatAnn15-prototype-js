import ModeController from "../ModeController/ModeController";
import SocialAuth from "./SocialAuth/SocialAuth";

export default class MemberForm {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  renderModeController(parent: HTMLDivElement) {
    new ModeController(parent);
  }
  renderSocialAuth(parent: HTMLElement) {
    new SocialAuth(parent);
  }
  render() {
    const div = document.createElement("div");
    div.className = "login-from-wrapper";
    this.renderModeController(div);
    this.renderSocialAuth(div);
    this.root.append(div);
  }
}
