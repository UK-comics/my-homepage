// 漫画画像のURLリスト
const mangaImages = [
    "manga1.jpg",
    "manga2.jpg",
    "manga3.jpg",
    // 他の漫画画像
];

let currentIndex = 0;

const mangaContainer = document.getElementById("manga-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function displayManga() {
    mangaContainer.innerHTML = `<img src="${mangaImages[currentIndex]}" alt="漫画">`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayManga();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < mangaImages.length - 1) {
        currentIndex++;
        displayManga();
    }
});

displayManga();
