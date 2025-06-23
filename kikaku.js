        function changeImage(index) {
            // 画像の切り替え
            let images = document.querySelectorAll(".ichiran img");
            images.forEach((img, i) => {
                img.classList.toggle("active", i === index);
            });

            // ボタンのスタイル変更
            let buttons = document.querySelectorAll(".tab-button");
            buttons.forEach((btn, i) => {
                btn.classList.toggle("active", i === index);
            });
        }

        
