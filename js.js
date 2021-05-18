//Zmienne dotyczące menu startowego
const startbutton = document.getElementById("buttonstartgame");
const startmenu = document.querySelector(".start");
let category = document.querySelector(".category");

//Zmienne dotyczące rozgrywki
const ingamemenu = document.querySelector(".ingame");
const enterthepasswordinput = document.querySelector(".enter-the-password-input"); //Pobiera inputa z hasłem
const passwordcontainer = document.querySelector(".password-container"); //Pobiera całą sekcje password-container która przechowuje hasło
const keyboard = document.querySelectorAll(".button");
const image = document.querySelector(".photo");
let selectcategory;
let div;
let divy;
let pointlose = 1;
let pointwin = 0;
let password;

//Zmienne dotyczące popup menu
const backtogamepopup = document.querySelector(".popup");
const headerpopup = document.querySelector(".header");
const infopopup = document.querySelector(".info");
const backtogame = document.getElementById("backtogame");


//Zaczęcie gry
startbutton.addEventListener("click", () => {
selectcategory = document.getElementById("select").value;
if(selectcategory == "Wybierz kategorie" || enterthepasswordinput.value == "" || enterthepasswordinput.value == " ") {
    alert("Prosze wybrać kategorie lub wprowadzić hasło!");
} else {
    startmenu.style.display = "none";
    ingamemenu.style.display = "grid";
    category.innerText = selectcategory;
    password = [...enterthepasswordinput.value];
    for (i=0;i <= password.length-1;i++) {
    creatediv(password[i]);
    divy = document.querySelectorAll(".password");
    }
}
});

//Tworzenie divów dla liter hasła
const creatediv = (passwordvalue) => {
    div = document.createElement("div");
    div.classList.add("password");
    div.innerText = passwordvalue.toUpperCase();
    if (passwordvalue == " ") {
        pointwin++;
        div.innerText = "-";
        div.style.fontSize = "40px";
    }
    passwordcontainer.appendChild(div);
};
//Pobieranie z klawiatury liter + rozstrzyganie rozgrywki
keyboard.forEach(item => {
    item.addEventListener("click", () => {
        let clickkey = item.value;
        if(enterthepasswordinput.value.toUpperCase().includes(clickkey)) {
            for (i=0;i <= password.length-1;i++) {
                if(divy[i].innerText.toUpperCase() == clickkey) {
                  divy[i].style.fontSize = "40px";
                  pointwin++;
                }
            }
            if(pointwin == password.length) {
                ingamemenu.style.display = "none";
                backtogamepopup.style.display = "grid";
                headerpopup.innerText = "Gratuluje!";
                infopopup.innerText = "Hasło to: " + enterthepasswordinput.value.toUpperCase();;
            }
        } else {
            pointlose++;
            if(pointlose == 8) {
                ingamemenu.style.display = "none";
                backtogamepopup.style.display = "grid";
                headerpopup.innerText = "Niestety!";
                infopopup.innerText = "Hasło to: " + enterthepasswordinput.value.toUpperCase();
                
            }  else {
                image.style.backgroundImage = "url('img/wis"+[pointlose]+".png')";
            }
        }   
            item.disabled = "true";
        
})
});

//Przycisk resetujący grę
backtogame.addEventListener("click", () => {
window.location.reload();
})