/**
 * MainPanel Component (CENTER COLUMN)
 * - Notes.txt 에디터 박스
 * - [ link 1 ] [ link 2 ] [ link 3 ] 레트로 버튼들
 * - Interests.txt 에디터 박스
 * - [ by xiu.carrd.co (¯¬¯) ] 와이드 푸터 버튼
 */

export function createMainPanel(centerData) {
  const panel = document.createElement("main");
  panel.className = "panel-center";

  // 1. Notes.txt section
  const notesSection = document.createElement("section");
  notesSection.className = "text-box-section";

  const notesTitle = document.createElement("div");
  notesTitle.className = "text-box-title";
  notesTitle.textContent = centerData.notes.fileName || "Notes.txt";

  const notesBox = document.createElement("div");
  notesBox.className = "retro-editor-box";

  if (centerData.notes.headlineLink) {
    const link = document.createElement("a");
    link.className = "headline-link";
    link.href = centerData.notes.headlineLink.url;
    link.textContent = centerData.notes.headlineLink.text;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    notesBox.appendChild(link);
  }

  const notesText = document.createElement("div");
  notesText.className = "editor-body-text";
  notesText.textContent = centerData.notes.content;
  notesBox.appendChild(notesText);

  // Link buttons [ link 1 ] [ link 2 ] [ link 3 ]
  const buttonRow = document.createElement("div");
  buttonRow.className = "link-button-row";

  (centerData.notes.links || []).forEach((btnInfo) => {
    const btn = document.createElement("a");
    btn.className = "retro-btn";
    btn.href = btnInfo.url;
    btn.textContent = btnInfo.label;
    buttonRow.appendChild(btn);
  });

  notesSection.appendChild(notesTitle);
  notesSection.appendChild(notesBox);
  notesSection.appendChild(buttonRow);

  // Divider
  const divider = document.createElement("div");
  divider.className = "section-divider-line";

  // 2. Interests.txt section
  const interestsSection = document.createElement("section");
  interestsSection.className = "text-box-section";

  const interestsTitle = document.createElement("div");
  interestsTitle.className = "text-box-title";
  interestsTitle.textContent = centerData.interests.fileName || "Interests.txt";

  const interestsBox = document.createElement("div");
  interestsBox.className = "retro-editor-box";

  const interestsText = document.createElement("div");
  interestsText.className = "editor-body-text";
  interestsText.textContent = centerData.interests.content;
  interestsBox.appendChild(interestsText);

  // Footer wide button [ by xiu.carrd.co (¯¬¯) ]
  let footerBtn = null;
  if (centerData.interests.footerButton) {
    footerBtn = document.createElement("a");
    footerBtn.className = "retro-btn-wide";
    footerBtn.href = centerData.interests.footerButton.url;
    footerBtn.textContent = centerData.interests.footerButton.label;
    footerBtn.target = "_blank";
    footerBtn.rel = "noopener noreferrer";
  }

  interestsSection.appendChild(interestsTitle);
  interestsSection.appendChild(interestsBox);
  if (footerBtn) {
    interestsSection.appendChild(footerBtn);
  }

  panel.appendChild(notesSection);
  panel.appendChild(divider);
  panel.appendChild(interestsSection);

  return panel;
}
