/**
 * TimelineToolbar Component
 * Macromedia Flash MX 스타일 타임라인 & 서브 툴바
 */

export function createTimelineToolbar(timelineData) {
  const container = document.createElement("div");
  container.className = "flash-timeline-container";

  // Row 1: Sub toolbar
  const subToolbar = document.createElement("div");
  subToolbar.className = "timeline-sub-toolbar";

  // Left tools
  const leftTools = document.createElement("div");
  leftTools.className = "sub-toolbar-left";

  const btnTimeline = document.createElement("button");
  btnTimeline.type = "button";
  btnTimeline.className = "btn-timeline-capsule";
  btnTimeline.textContent = timelineData.label || "Timeline";

  const sceneInfo = document.createElement("div");
  sceneInfo.className = "scene-indicator";

  const filmIcon = document.createElement("span");
  filmIcon.className = "scene-film-icon";
  filmIcon.setAttribute("aria-hidden", "true");

  const sceneText = document.createElement("span");
  sceneText.textContent = timelineData.sceneName || "Scene 1";

  sceneInfo.appendChild(filmIcon);
  sceneInfo.appendChild(sceneText);

  leftTools.appendChild(btnTimeline);
  leftTools.appendChild(sceneInfo);

  // Right tools
  const rightTools = document.createElement("div");
  rightTools.className = "sub-toolbar-right";

  const filmClapper = document.createElement("span");
  filmClapper.className = "tool-icon-film";
  filmClapper.textContent = "🎬";

  const paletteIcon = document.createElement("span");
  paletteIcon.className = "tool-icon-palette";
  paletteIcon.setAttribute("title", "Color Palette");

  const zoomBox = document.createElement("div");
  zoomBox.className = "zoom-dropdown";
  zoomBox.innerHTML = `<span>${timelineData.zoomLevel || "449%"}</span><span style="font-size: 8px;">▼</span>`;

  rightTools.appendChild(filmClapper);
  rightTools.appendChild(paletteIcon);
  rightTools.appendChild(zoomBox);

  subToolbar.appendChild(leftTools);
  subToolbar.appendChild(rightTools);

  // Row 2: Ruler & Keyframes
  const rulerRow = document.createElement("div");
  rulerRow.className = "timeline-ruler-row";

  // Layer control icons
  const layerControls = document.createElement("div");
  layerControls.className = "timeline-layer-controls";
  layerControls.innerHTML = `
    <span class="layer-icon-eye" title="Show/Hide Layers">👁</span>
    <span class="layer-icon-lock" title="Lock Layers">🔒</span>
    <span class="layer-icon-box" title="Outline Mode"></span>
  `;

  // Red playhead start marker (frame 1)
  const playheadStart = document.createElement("div");
  playheadStart.className = "timeline-playhead-start";
  playheadStart.innerHTML = `<span class="playhead-marker-red"></span>`;

  // Frames track
  const framesTrack = document.createElement("div");
  framesTrack.className = "timeline-frames-track";

  // Frame numbers (5, 10, 15, ..., 80)
  const frameNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
  frameNumbers.forEach((num) => {
    const label = document.createElement("span");
    label.className = "timeline-frame-label";
    label.style.left = `${num * 10}px`;
    label.textContent = num;
    framesTrack.appendChild(label);
  });

  // Diamond keyframes
  [12, 35, 70].forEach((pos) => {
    const diamond = document.createElement("span");
    diamond.className = "timeline-keyframe-diamond";
    diamond.style.left = `${pos * 10}px`;
    framesTrack.appendChild(diamond);
  });

  rulerRow.appendChild(layerControls);
  rulerRow.appendChild(playheadStart);
  rulerRow.appendChild(framesTrack);

  container.appendChild(subToolbar);
  container.appendChild(rulerRow);

  return container;
}
