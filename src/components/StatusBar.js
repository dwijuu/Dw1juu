/**
 * StatusBar Component
 * 윈도우 하단 상태 표시줄
 * - 중앙 스플릿 핸들러 [ ||| ]
 * - 우측 클래식 윈도우 리사이즈 그립
 */

export function createStatusBar() {
  const statusBar = document.createElement("footer");
  statusBar.className = "window-status-bar";

  const gripCenter = document.createElement("div");
  gripCenter.className = "status-grip-center";
  gripCenter.setAttribute("title", "Window Splitter");
  gripCenter.innerHTML = `
    <span class="grip-line"></span>
    <span class="grip-line"></span>
    <span class="grip-line"></span>
  `;

  const resizeGrip = document.createElement("div");
  resizeGrip.className = "status-resize-grip";
  resizeGrip.setAttribute("aria-hidden", "true");

  statusBar.appendChild(gripCenter);
  statusBar.appendChild(resizeGrip);

  return statusBar;
}
