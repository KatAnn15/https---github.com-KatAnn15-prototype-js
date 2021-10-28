import { createElement } from "@actions/ElementHandler.ts";
import styles from "./ListGalleryItem.module.css";

export function renderMedia(parent: HTMLElement, data: any) {
  const mainImg = renderMainImg(data);
  parent.append(mainImg);
  if (data.videoCover) {
    const videoCover = renderVideoCover(data.videoCover);
    parent.append(videoCover);
  }
  if (data.additionalBox) {
    const box = renderBox(data);
    parent.append(box);
  }
}

function renderVideoCover(video: string) {
  const videoCover = createElement(
    "video",
    styles["item_video-cover"]
  ) as HTMLVideoElement;
  videoCover.src = video;
  videoCover.autoplay = true;
  return videoCover;
}

function renderMainImg(data: { mediaURL: string; mediaAlt: string }) {
  const mainImg = createElement(
    "img",
    styles["item_main-media"]
  ) as HTMLImageElement;
  mainImg.src = data.mediaURL;
  mainImg.alt = data.mediaAlt;
  return mainImg;
}

function renderBox(data: {
  imageURL: string;
  name: string;
  downloadGif: string;
}) {
  const box = createElement("div", styles["item_add-box"]);
  const image = createElement("img", styles["box_img"]) as HTMLImageElement;
  image.src = data.imageURL;
  const name = createElement("h4", styles["box_name"]);
  name.textContent = data.name;
  const gif = createElement("img", styles["box_gif"]) as HTMLImageElement;
  gif.src = data.downloadGif;
  box.append(image, name, gif);
  return box;
}

export function renderInfo(
  parent: HTMLElement,
  data: { title: string; subtitle: string }
) {
  const title = createElement("h3", styles["item_title"]);
  title.textContent = data.title;
  const subtitle = createElement("h4", styles["item_subtitle"]);
  subtitle.textContent = data.subtitle;
  parent.append(title, subtitle);
}
