const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

// setiap 1 detik, icon berubah
setInterval(() => {
    i++;

    const icon = document.querySelector(".section-1-icons .change");

    icon.classList.remove("change");

    assignToDefaultCounter();

    icon.nextElementSibling.classList.add("change");

    // memeriksa apakah i lebih besar dari icons, kalau lebih, i dikembalikan ke 1
    function assignToDefaultCounter() {
        if (i > icons.length) {
            icons[0].classList.add("change");
            i = 1;
        } else {
            icon.nextElementSibling.classList.add("change");
        }
    }
}, 4000)