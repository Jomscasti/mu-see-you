function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  function renderNarrative() {
    const index = getQueryParam("index");
    const card = loveCardsData.cards[index];
    if (!card) return;
  
    document.title = card.title;
    document.getElementById("storyTitle").innerText = card.title;
    document.getElementById("storySubtitle").innerText = `${card.part} — ${card.text}`;
    document.getElementById("storyImage").src = card.image;
    document.getElementById("storyNarrative").innerText = card.narrative;
  
    if (card.folder) {
      loadTimelineImages(card.folder, 20); // adjusting total images
    }
  }
  
  function loadTimelineImages(monthFolder, totalImages = 9) {
    const gallery = document.getElementById("timelineGallery");
    gallery.innerHTML = "";
  
    for (let i = 1; i <= totalImages; i++) {
      const padded = i.toString().padStart(2, "0");
      const src = `assets/images/timeline/${monthFolder}/${padded}.jpg`;
  
      const col = document.createElement("div");
      col.className = "col-4";
      col.className = "col-6 col-md-4 col-lg-3 d-flex justify-content-center";
col.innerHTML = `
  <div class="card border-0 shadow-sm" style="width: 100%; max-width: 200px;">
    <img src="${src}" class="card-img-top rounded" style="aspect-ratio: 3/4; object-fit: cover;" alt="Highlight ${padded}">
  </div>
`;

  
      gallery.appendChild(col);
    }
  }
  
  renderNarrative();
  