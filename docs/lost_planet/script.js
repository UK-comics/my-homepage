const images = [
    "images/lost planet_001.png",
    "images/lost planet_002.png",
    "images/lost planet_003.png",
    "images/lost planet_004.png",
    "images/lost planet_005.png",
    "images/lost planet_006.png",
    "images/lost planet_007.png",
    "images/lost planet_008.png",
    "images/lost planet_009.png",
    "images/lost planet_010.png",
    "images/lost planet_011.png",
    "images/lost planet_012.png",
    "images/lost planet_013.png",
    "images/lost planet_014.png",
    "images/lost planet_015.png",
    "images/lost planet_016.png",
    "images/lost planet_017.png",
    "images/lost planet_018.png",
    "images/lost planet_019.png",
    "images/lost planet_020.png",
    "images/lost planet_021.png",
    "images/lost planet_022.png",
    "images/lost planet_023.png",
    "images/lost planet_024.png",
    "images/lost planet_025.png",
    "images/lost planet_026.png",
    "images/lost planet_027.png",
    "images/lost planet_028.png",
    "images/lost planet_029.png",
    "images/lost planet_030_031.png",
    "images/lost planet_032.png",
    "images/lost planet_033.png",
    "images/lost planet_034.png",
    "images/lost planet_035.png",
    "images/lost planet_036.png",
    "images/lost planet_037.png",
    "images/lost planet_038.png",
    "images/lost planet_039.png",
    "images/lost planet_040.png",
    "images/lost planet_041.png",

];

let currentIndex = 0;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function displayImage() {
    imageElement.src = images[currentIndex];
    imageElement.alt = "画像" + (currentIndex + 1);
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // 前に戻る
    displayImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // 次の画像に進む
    displayImage();
});

// 初期画像の表示
displayImage();
