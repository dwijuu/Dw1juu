/**
 * App Component
 * 탭 상태 관리 및 프로그램 윈도우 마운트
 */

import { siteData } from "../data/siteData.js";
import { createProgramWindow } from "./ProgramWindow.js";

export function initApp(rootElement) {
  let activeTabId = "main";

  function render() {
    rootElement.innerHTML = "";

    const windowEl = createProgramWindow(siteData, activeTabId, (newTabId) => {
      activeTabId = newTabId;
      render();
    });

    rootElement.appendChild(windowEl);
  }

  render();
}
