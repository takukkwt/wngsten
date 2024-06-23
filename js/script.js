// JavaScriptでスライドショーの制御を行う場合の例
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const slideCount = slides.length;

function showSlides() {
    // すべてのスライドを非表示にする
    for (let i = 0; i < slideCount; i++) {
        slides[i].style.display = 'none';
    }
    // 次のスライドを表示する
    slideIndex++;
    if (slideIndex > slideCount) {
        slideIndex = 1; // 最初のスライドに戻る
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // 2秒ごとにスライドを切り替える
}

showSlides(); // 最初のスライド表示を開始する
