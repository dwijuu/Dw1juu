/**
 * ProfilePanel Component (LEFT COLUMN)
 * - 프로필 이미지 (01.png)
 * - About Me 드롭다운 / 콤보박스
 * - Type / Info 속성 테이블
 * - 썸네일 2개 (02.png, 03.png)
 */

export function createProfilePanel(profileData, images) {
  const panel = document.createElement("aside");
  panel.className = "panel-left";

  // 1. Profile image container
  const imgContainer = document.createElement("div");
  imgContainer.className = "profile-image-container";

  const profileImg = document.createElement("img");
  profileImg.className = "profile-img";
  profileImg.src = images.profile;
  profileImg.alt = "Profile avatar";
  profileImg.onerror = () => {
    profileImg.src = images.fallback;
  };
  imgContainer.appendChild(profileImg);

  // 2. About Me combobox
  const comboboxWrapper = document.createElement("div");
  comboboxWrapper.className = "retro-combobox-wrapper";

  const comboboxBtn = document.createElement("button");
  comboboxBtn.type = "button";
  comboboxBtn.className = "retro-combobox";
  comboboxBtn.setAttribute("aria-expanded", "false");
  comboboxBtn.innerHTML = `
    <span>${profileData.dropdownLabel || "About Me"}</span>
    <span class="combobox-arrow">▼</span>
  `;

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.className = "retro-dropdown-menu";
  dropdownMenu.style.display = "none";

  (profileData.dropdownItems || []).forEach((itemText) => {
    const item = document.createElement("li");
    item.className = "retro-dropdown-item";
    item.textContent = itemText;
    dropdownMenu.appendChild(item);
  });

  comboboxBtn.addEventListener("click", () => {
    const isExpanded = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isExpanded ? "none" : "block";
    comboboxBtn.setAttribute("aria-expanded", String(!isExpanded));
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!comboboxWrapper.contains(e.target)) {
      dropdownMenu.style.display = "none";
      comboboxBtn.setAttribute("aria-expanded", "false");
    }
  });

  comboboxWrapper.appendChild(comboboxBtn);
  comboboxWrapper.appendChild(dropdownMenu);

  // 3. Info table (Type / Info)
  const tableContainer = document.createElement("div");
  tableContainer.className = "retro-info-table-container";

  const table = document.createElement("table");
  table.className = "retro-info-table";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Type</th>
      <th>Info</th>
    </tr>
  `;

  const tbody = document.createElement("tbody");
  (profileData.infoTable || []).forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="cell-type">${row.type}</td>
      <td class="cell-info">${row.info}</td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);

  // 4. Thumbnails row
  const thumbsRow = document.createElement("div");
  thumbsRow.className = "thumbnails-row";

  (profileData.thumbnails || []).forEach((thumb) => {
    const thumbBox = document.createElement("div");
    thumbBox.className = "thumb-box";

    const thumbImg = document.createElement("img");
    thumbImg.className = "thumb-img";
    thumbImg.src = images[thumb.imageKey] || images.fallback;
    thumbImg.alt = thumb.alt || "Thumbnail";
    thumbImg.onerror = () => {
      thumbImg.src = images.fallback;
    };

    thumbBox.appendChild(thumbImg);
    thumbsRow.appendChild(thumbBox);
  });

  panel.appendChild(imgContainer);
  panel.appendChild(comboboxWrapper);
  panel.appendChild(tableContainer);
  panel.appendChild(thumbsRow);

  return panel;
}
