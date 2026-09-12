/**
 * TitleBar Component
 * 상단 검은색 타이틀바 (재생 아이콘 ▶ + 타이틀 텍스트)
 */

export function createTitleBar(data) {
  const container = document.createElement("div");
  container.className = "window-titlebar";

  const playIcon = document.createElement("span");
  playIcon.className = "titlebar-play-icon";
  playIcon.setAttribute("aria-hidden", "true");

  const titleText = document.createElement("span");
  titleText.className = "titlebar-text";
  titleText.textContent = data.windowTitle;

  container.appendChild(playIcon);
  container.appendChild(titleText);

  return container;
}
