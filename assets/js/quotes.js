const quotes = [
    { text: "Art enables us to find ourselves and lose ourselves at the same time.", author: "Thomas Merton" },
    { text: "The aim of art is to represent not the outward appearance of things, but their inward significance.", author: "Aristotle" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Art is the lie that enables us to realize the truth.", author: "Pablo Picasso" },
    { text: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
    { text: "The more I see, the less I know for sure.", author: "John Lennon" },
    { text: "Art washes away from the soul the dust of everyday life.", author: "Pablo Picasso" },
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "We are shaped and fashioned by what we love.", author: "Johann Wolfgang von Goethe" },
    { text: "Art must be an expression of love or it is nothing.", author: "Marc Chagall" },
    { text: "A work of art which did not begin in emotion is not art.", author: "Paul Cézanne" },
    { text: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
    { text: "Every artist dips his brush in his own soul, and paints his own nature into his pictures.", author: "Henry Ward Beecher" },
    { text: "Love is an endless act of forgiveness. Forgiveness is the key to action and freedom.", author: "Maya Angelou" },
    { text: "Painting is just another way of keeping a diary.", author: "Pablo Picasso" },
    { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { text: "Art is not freedom from discipline, but disciplined freedom.", author: "John F. Kennedy" },
    { text: "Love doesn’t just sit there, like a stone. It has to be made, like bread; remade all the time, made new.", author: "Ursula K. Le Guin" },
    { text: "A memory is what is left when something happens and does not completely unhappen.", author: "Edward de Bono" },
    { text: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.", author: "Antoine de Saint-Exupéry" }
];

function generateQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = `"${random.text}"`;
    document.getElementById("quoteAuthor").textContent = `"${random.author}"`
}
