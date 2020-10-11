document.addEventListener("DOMContentLoaded", sidenVises)

function sidenVises() {
    //popupvinduer
    document.querySelector(".info_klikmig_menu").addEventListener("click", () => popup_info.style.display = "block");
    document.querySelector(".info_klikmig").addEventListener("click", () => popup_info.style.display = "block");
    document.querySelector("#luk_info").addEventListener("click", () => popup_info.style.display = "none");

    document.querySelector(".quiz_klikmig_menu").addEventListener("click", () => popup_quiz.style.display = "block");
    document.querySelector(".quiz_klikmig").addEventListener("click", () => popup_quiz.style.display = "block");
    document.querySelector("#luk_quiz").addEventListener("click", () => popup_quiz.style.display = "none");

    document.querySelector(".infografik_klikmig_menu").addEventListener("click", () => popup_infografik.style.display = "block");
    document.querySelector(".infografik_klikmig").addEventListener("click", () => popup_infografik.style.display = "block");
    document.querySelector("#luk_infografik").addEventListener("click", () => popup_infografik.style.display = "none");

    //menuknap
    document.querySelector("#menuknap").innerHTML = "<img src='/pics/burgermenu.svg' alt='burgermenu'/>";
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


//basic burgermenu
function toggleMenu() {
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").innerHTML = "<img src='/pics/burgermenu.svg' alt='burgermenu'/>";
    } else {
        document.querySelector("#menuknap").innerHTML = "<img src='/pics/burgermenuLuk.svg' alt='burgermenu'/>";
    }

}
