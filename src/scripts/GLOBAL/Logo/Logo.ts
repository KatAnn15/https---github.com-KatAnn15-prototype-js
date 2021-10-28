import { getStorageItem } from "../../Firebase/firebase_actions";
import "./Logo.css";
import { store } from "@redux/CommonReducer.ts";
import { setLogoType } from "@redux/Actions.ts";
import { isMobile } from "mobile-device-detect";

export default class Logo {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  getLogo() {
    let imagePath = "";
    if (isMobile) {
      imagePath = "ATFImages/netflix-short.png";
    } else {
      imagePath = "ATFImages/netflix.png";
    }
    return getStorageItem(imagePath);
  }
  async renderLogo() {
    const logo = await this.getLogo();
    store.dispatch(setLogoType(logo));
  }
  manageLogo(img: HTMLImageElement) {
    store.subscribe(() => {
      img.src = store.getState().logo;
    });
  }
  render() {
    const img = document.createElement("img");
    img.className = "header_logo";
    this.manageLogo(img);
    this.renderLogo();
    this.root.append(img);
  }
}
