const loveCardsData = {
    cards: [
        {
            part: "Part 1",
            title: "A Shared Exhibit",
            text: "Love is art, made with passion.",
            narrative: "In every brushstroke of affection and every hue of emotion, love reveals itself — not as perfection, but as expression. Just like an exhibit, our relationship is a curated journey of moments, flaws, and beauty displayed side by side. Together, we don’t just admire the art — we become it. Each shared experience, each discovery, adds another piece to our gallery — a living collection that only we truly understand.",
            image: "assets/images/january.jpg",
            folder: "january"
        },
        {
            part: "Part 2",
            title: "Unscripted Strokes",
            text: "In simplicity, beauty lives.",
            narrative: "Not every masterpiece is planned. The most moving works are often born from spontaneity — just like us. It’s in the quiet moments, the unplanned laughter, and the small, sincere gestures where love truly thrives. We embrace the unpredictability, finding meaning in what others overlook. And in valuing what we love — the raw, the real, the imperfect — we find our truest form of connection.",
            image: "assets/images/february.jpg",
            folder: "february"
        },
        {
            part: "Part 3",
            title: "Endless Preservation",
            text: "To care is to promise time.",
            narrative: "Like restoring a cherished piece of art, love grows through kindness and thoughtful presence. It's found in the calm moments, the shared quiet, and the simple wish for more time together. Real love inspires a deeper appreciation for life — not just for your own sake, but because someone has made it feel more meaningful. Every small gesture says: I care about where your story goes next.",
            image: "assets/images/march.jpg",
            folder: "march"
        },
        {
            part: "Part 4",
            title: "True Colors",
            text: "Love embraces every shade of us.",
            narrative: "As time passes, we begin to show more — not just smiles, but fears, flaws, and quiet hopes. And instead of hiding, we feel safe enough to be seen. Because in love, every emotion is valid. We listen without judgment and love without conditions. With each shared day, we grow more comfortable in our own skin — knowing that who we truly are is not just accepted, but cherished.",
            image: "assets/images/april.jpg",
            folder: "april"
        }
    ]
};

function loadLoveCards() {
    const container = document.getElementById("loveCardContainer");
    loveCardsData.cards.forEach((card, index) => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-3 mt-0";

        col.innerHTML = `
        <div class="card text-white border-0 position-relative overflow-hidden mb-5"
             style="height: 400px; background-size: cover; background-position: center; background-image: url('${card.image}');">
          <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center"
               style="background: rgba(0, 0, 0, 0.4);">
            <div class="mb-2 fs-6">${card.part}</div>
            <h5 class="card-title fw-bold">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <a href="view.html?index=${index}" class="btn btn-outline-light mt-2 px-4">Explore</a>
          </div>
        </div>
      `;

        container.appendChild(col);
    });
}

if (document.getElementById("loveCardContainer")) loadLoveCards();
