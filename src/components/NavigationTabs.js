/**
 * NavigationTabs Component
 * 상단 탭 바 ("Button", "Button", "Button")
 */

export function createNavigationTabs(tabs, activeTabId, onTabChange) {
  const container = document.createElement("div");
  container.className = "window-tabs-bar";
  container.setAttribute("role", "tablist");

  tabs.forEach((tab) => {
    const tabButton = document.createElement("button");
    tabButton.type = "button";
    tabButton.className = `retro-tab ${tab.id === activeTabId ? "active" : ""}`;
    tabButton.setAttribute("role", "tab");
    tabButton.setAttribute("aria-selected", tab.id === activeTabId ? "true" : "false");
    tabButton.textContent = tab.label;

    tabButton.addEventListener("click", () => {
      onTabChange(tab.id);
    });

    container.appendChild(tabButton);
  });

  return container;
}
