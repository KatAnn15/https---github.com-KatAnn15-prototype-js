import { store } from "@redux/CommonReducer";

export function transformList(list: HTMLElement, title: string) {
  store.subscribe(() => {
    const state = store.getState().listTransform;
    if (state.title == title) {
      handleTransform(list, state.value);
    }
  });
}

function handleTransform(list: HTMLElement, value: number) {
  list.style.transform = `translateX(${value}px)`;
}
