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


    document.querySelector("#rigtigt1").addEventListener("click", klikRigtigt);
    document.querySelector("#rigtigt2").addEventListener("click", klikRigtigt);
    document.querySelector("#rigtigt3").addEventListener("click", klikRigtigt);
    document.querySelector("#rigtigt4").addEventListener("click", klikRigtigt);
    document.querySelector("#rigtigt5").addEventListener("click", klikRigtigt);

    document.querySelector("#forkert1").addEventListener("click", klikForkert);
    document.querySelector("#forkert2").addEventListener("click", klikForkert);
    document.querySelector("#forkert3").addEventListener("click", klikForkert);
    document.querySelector("#forkert4").addEventListener("click", klikForkert);
    document.querySelector("#forkert5").addEventListener("click", klikForkert);
    document.querySelector("#forkert6").addEventListener("click", klikForkert);
    document.querySelector("#forkert7").addEventListener("click", klikForkert);
    document.querySelector("#forkert8").addEventListener("click", klikForkert);
    document.querySelector("#forkert9").addEventListener("click", klikForkert);
    document.querySelector("#forkert10").addEventListener("click", klikForkert);
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


function klikRigtigt() {
    this.style.backgroundColor = '#6ac16a';
}

function klikForkert() {
    console.log("klikForkert");
    this.style.backgroundColor = '#d12727';
    this.classList.add("ryst");
}
