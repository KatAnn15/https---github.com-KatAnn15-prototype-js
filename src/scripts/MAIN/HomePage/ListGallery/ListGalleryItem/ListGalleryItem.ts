import { createElement } from "@actions/ElementHandler.ts";
import styles from "./ListGalleryItem.module.css";
import { renderMedia, renderInfo } from "./ListGalleryItemActions";

export default class ListGalleryItem {
  root: HTMLElement;
  data: any;
  constructor(root: HTMLElement, data: any) {
    this.root = root;
    this.data = data;
    this.render();
  }

  renderData(parent: HTMLElement) {
    const infoDiv = createElement("div", styles["item_info-data"]);
    const mediaDiv = createElement("div", styles["item_media-data"]);
    renderMedia(mediaDiv, this.data);
    renderInfo(infoDiv, this.data);
    parent.append(mediaDiv, infoDiv);
  }
  render() {
    const div = createElement("div", styles["list-gallery-item-wrapper"]);
    this.renderData(div);
    this.root.append(div);
  }
}
