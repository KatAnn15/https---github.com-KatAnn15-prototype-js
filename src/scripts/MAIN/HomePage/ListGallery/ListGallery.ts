import { createElement } from "@actions/ElementHandler.ts";
import { getFirestoreData } from "@fire/firebase_actions.ts";
import styles from "./ListGallery.module.css";
import ListGalleryItem from "./ListGalleryItem/ListGalleryItem";

export default class ListGallery {
  root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }

  async getData(parent: HTMLElement) {
    const data: any[] = await getFirestoreData("HomeListGallery");
    data.forEach((item) => new ListGalleryItem(parent, item));
  }
  render() {
    const div = createElement("div", styles["list-gallery-wrapper"]);
    this.getData(div);
    this.root.append(div);
  }
}
