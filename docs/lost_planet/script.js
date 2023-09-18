// const images = [
//     "images/lost planet_001.png",
//     "images/lost planet_002.png",
//     "images/lost planet_003.png",
//     "images/lost planet_004.png",
//     "images/lost planet_005.png",
//     "images/lost planet_006.png",
//     "images/lost planet_007.png",
//     "images/lost planet_008.png",
//     "images/lost planet_009.png",
//     "images/lost planet_010.png",
//     "images/lost planet_011.png",
//     "images/lost planet_012.png",
//     "images/lost planet_013.png",
//     "images/lost planet_014.png",
//     "images/lost planet_015.png",
//     "images/lost planet_016.png",
//     "images/lost planet_017.png",
//     "images/lost planet_018.png",
//     "images/lost planet_019.png",
//     "images/lost planet_020.png",
//     "images/lost planet_021.png",
//     "images/lost planet_022.png",
//     "images/lost planet_023.png",
//     "images/lost planet_024.png",
//     "images/lost planet_025.png",
//     "images/lost planet_026.png",
//     "images/lost planet_027.png",
//     "images/lost planet_028.png",
//     "images/lost planet_029.png",
//     "images/lost planet_030_031.png",
//     "images/lost planet_032.png",
//     "images/lost planet_033.png",
//     "images/lost planet_034.png",
//     "images/lost planet_035.png",
//     "images/lost planet_036.png",
//     "images/lost planet_037.png",
//     "images/lost planet_038.png",
//     "images/lost planet_039.png",
//     "images/lost planet_040.png",
//     "images/lost planet_0.png",

// ];

// let currentIndex = 0;
// const imageElement = document.getElementById("image");
// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");

// function displayImage() {
//     imageElement.src = images[currentIndex];
//     imageElement.alt = "画像" + (currentIndex + 1);
// }

// prevButton.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // 前に戻る
//     displayImage();
// });

// nextButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length; // 次の画像に進む
//     displayImage();
// });

// // 初期画像の表示
// displayImage();


// script.js
document.addEventListener("DOMContentLoaded", function () {
    // 画像を追加する関数
    function addImage(src) {
        const imageContainer = document.getElementById("imageContainer");
        const img = document.createElement("img");
        img.src = src;
        img.className = "image"; // CSSクラスを追加
        imageContainer.appendChild(img);
    }

    // 画像を追加
    addImage("images/lost planet_001.png",);
    addImage("images/lost planet_002.png",);
    addImage("images/lost planet_003.png",);
    addImage("images/lost planet_004.png",);
    addImage("images/lost planet_005.png",);
    addImage("images/lost planet_006.png",);
    addImage("images/lost planet_007.png",);
    addImage("images/lost planet_008.png",);
    addImage("images/lost planet_009.png",);
    addImage("images/lost planet_010.png",);
    addImage("images/lost planet_011.png",);
    addImage("images/lost planet_012.png",);
    addImage("images/lost planet_013.png",);
    addImage("images/lost planet_014.png",);
    addImage("images/lost planet_015.png",);
    addImage("images/lost planet_016.png",);
    addImage("images/lost planet_017.png",);
    addImage("images/lost planet_018.png",);
    addImage("images/lost planet_019.png",);
    addImage("images/lost planet_020.png",);
    addImage("images/lost planet_021.png",);
    addImage("images/lost planet_022.png",);
    addImage("images/lost planet_023.png",);
    addImage("images/lost planet_024.png",);
    addImage("images/lost planet_025.png",);
    addImage("images/lost planet_026.png",);
    addImage("images/lost planet_027.png",);
    addImage("images/lost planet_028.png",);
    addImage("images/lost planet_029.png",);
    addImage("images/lost planet_030_031.png",);
    addImage("images/lost planet_032.png",);
    addImage("images/lost planet_033.png",);
    addImage("images/lost planet_034.png",);
    addImage("images/lost planet_035.png",);
    addImage("images/lost planet_036.png",);
    addImage("images/lost planet_037.png",);
    addImage("images/lost planet_038.png",);
    addImage("images/lost planet_039.png",);
    addImage("images/lost planet_040.png",);
    addImage("images/lost planet_041.png",);

    // 他の画像を追加する場合は、addImage関数を呼び出して画像ファイルのパスを指定
});