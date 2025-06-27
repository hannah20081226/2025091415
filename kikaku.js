console.log("✅ JavaScript 読み込まれた！");


function changeImage(index) {
    // 画像の切り替え
    let images = document.querySelectorAll(".ichiran img");
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });

    // ボタンのスタイル変更
    // let buttons = document.querySelectorAll(".tab-button");
    // buttons.forEach((btn, i) => {
    //     btn.classList.toggle("active", i === index);
    // });
}

const imageSets = {
    1: ["img/kangen.png", "img/dance.png", "img/eigoengeki.png", "img/gakubu.png", "img/engeki.png"],
    2: ["img/basket.png", "img/volley.png","img/magic.png","img/sign.png","img/k-on.png","img/seika.png","img/gaxtushou.png"],
    3: ["img/manken.png", "img/engei.png", "img/huwa.png", "img/shugei.png","img/borabora.png","img/huruhon.png","img/diner.png"],
    4: ["img/tennis.png","img/futarbucks.png","img/cook.png"],
    5: ["img/tenyaku.png", "img/movie.png","img/art.png","img/news.png","img/photo.png","mg/shodo.png","img/waraukai.png","img/aaf.png"],
    6: ["img/kagaku.png", "img/science.png", "img/astronomy.png","img/bio.png","img/suken.png"],
    7: ["img/game.png", "img/karuta.png", "img/english.png","img/run.png","img/quiz.png","img/anime.png"]
  };
  
  const buttons = document.querySelectorAll(".button-group button");
  const imageContainer = document.getElementById("image-container");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // ボタンのスタイル変更
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
  
      const id = button.getAttribute("data-id");
      const images = imageSets[id];
  
      // 画像を表示
      imageContainer.innerHTML = ""; // 一旦クリア
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        imageContainer.appendChild(img);
      });
    });
  });
  
  

