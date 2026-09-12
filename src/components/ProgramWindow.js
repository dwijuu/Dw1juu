/**
 * ProgramWindow Component
 * 메인 윈도우 프레임 및 탭 전환 콘텐츠 레이아웃
 */

import { createTitleBar } from "./TitleBar.js";
import { createNavigationTabs } from "./NavigationTabs.js";
import { createTimelineToolbar } from "./TimelineToolbar.js";
import { createProfilePanel } from "./ProfilePanel.js";
import { createMainPanel } from "./MainPanel.js";
import { createSidePanel } from "./SidePanel.js";
import { createStatusBar } from "./StatusBar.js";

export function createProgramWindow(data, activeTabId, onTabChange) {
  const windowEl = document.createElement("div");
  windowEl.className = "program-window";

  // 1. TitleBar
  const titleBar = createTitleBar(data);
  windowEl.appendChild(titleBar);

  // 2. Navigation Tabs
  const navTabs = createNavigationTabs(data.tabs, activeTabId, onTabChange);
  windowEl.appendChild(navTabs);

  // 3. Timeline Toolbar (Macromedia Flash MX Style)
  const timelineToolbar = createTimelineToolbar(data.timeline);
  windowEl.appendChild(timelineToolbar);

  // 4. Content Viewport
  const contentViewport = document.createElement("div");
  contentViewport.className = "window-content-viewport";

  if (activeTabId === "main") {
    // 3-Column Retro Layout (Reference Replica)
    const layout3Col = document.createElement("div");
    layout3Col.className = "content-layout-3col";

    const leftPanel = createProfilePanel(data.profile, data.images);
    const centerPanel = createMainPanel(data.center);
    const rightPanel = createSidePanel(data.right, data.images);

    layout3Col.appendChild(leftPanel);
    layout3Col.appendChild(centerPanel);
    layout3Col.appendChild(rightPanel);

    contentViewport.appendChild(layout3Col);
  } else if (activeTabId === "works") {
    // Works / Gallery view using 06.png, 07.png, 08.png
    const galleryView = document.createElement("div");
    galleryView.className = "gallery-grid";

    data.worksTab.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "gallery-card";

      const img = document.createElement("img");
      img.className = "gallery-card-img";
      img.src = data.images[item.imageKey] || data.images.fallback;
      img.alt = item.title;
      img.onerror = () => {
        img.src = data.images.fallback;
      };

      const title = document.createElement("div");
      title.className = "gallery-card-title";
      title.textContent = item.title;

      const desc = document.createElement("div");
      desc.className = "gallery-card-desc";
      desc.textContent = item.desc;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      galleryView.appendChild(card);
    });

    contentViewport.appendChild(galleryView);
  } else if (activeTabId === "archive") {
    // System Log / Archive View
    const archiveView = document.createElement("div");
    archiveView.className = "system-log-box";

    data.archiveTab.lines.forEach((line) => {
      const p = document.createElement("p");
      p.textContent = `> ${line}`;
      archiveView.appendChild(p);
    });

    contentViewport.appendChild(archiveView);
  }

  windowEl.appendChild(contentViewport);

  // 5. Status Bar
  const statusBar = createStatusBar();
  windowEl.appendChild(statusBar);

  return windowEl;
}
