document.addEventListener("DOMContentLoaded", function () {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const headerList = document.querySelector(".header__list");
    const headerMenu = document.querySelector(".header__menu");

    headerMenu.addEventListener("click", function () {
        header.classList.toggle("active");
        body.classList.toggle("header-lock");
        headerList.classList.toggle("active");
        headerMenu.classList.toggle("active");
    });
});

if (document.querySelector(".product-page .product__image")) {
    const productImages = document.querySelectorAll(".product-images__item");
    const productImage = document.querySelector(".product__image");

    for (let i = 0; i < productImages.length; i++) {
        productImages[i].addEventListener("click", function () {
            productImage.querySelector("source").srcset = productImages[i].querySelector("source").srcset;
            productImage.querySelector("img").src = productImages[i].querySelector("img").src;
            productImage.querySelector("img").alt = productImages[i].querySelector("img").alt;
        });
    }

    productImage.addEventListener("click", function () {
        const img = productImage.querySelector("img");
    
        img.classList.toggle("active");
    
        if (img.classList.contains("active")) {
            productImage.addEventListener("mousemove", moveImage);
        } else {
            productImage.removeEventListener("mousemove", moveImage);
            img.style.transform = "scale(1)";
            img.style.transformOrigin = "center center";
        }
    });
    
    function moveImage(e) {
        const img = productImage.querySelector("img");
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
    
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)";
    }
}