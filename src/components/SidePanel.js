/**
 * SidePanel Component (RIGHT COLUMN)
 * - docomo 피처폰 & 고양이 캐릭터 ASCII Art
 * - 하단 이미지 (05.png)
 */

export function createSidePanel(rightData, images) {
  const panel = document.createElement("aside");
  panel.className = "panel-right";

  // 1. ASCII Art container
  const asciiContainer = document.createElement("div");
  asciiContainer.className = "ascii-art-container";

  const pre = document.createElement("pre");
  pre.className = "ascii-art-pre";
  pre.textContent = rightData.asciiArt;

  asciiContainer.appendChild(pre);

  // 2. Bottom photo container (05.png)
  const photoContainer = document.createElement("div");
  photoContainer.className = "right-photo-container";

  const photoImg = document.createElement("img");
  photoImg.className = "right-photo-img";
  photoImg.src = images[rightData.bottomImageKey] || images.fallback;
  photoImg.alt = rightData.bottomImageCaption || "Side photo";
  photoImg.onerror = () => {
    photoImg.src = images.fallback;
  };

  photoContainer.appendChild(photoImg);

  panel.appendChild(asciiContainer);
  panel.appendChild(photoContainer);

  return panel;
}
