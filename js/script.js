console.log("Witam na mojej pierwszej stronie!")
let changeTheme = document.querySelector(".js-changeTheme");
let changeThemeEducation = document.querySelector(".section--education");

changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("nightMode");
    changeThemeEducation.classList.toggle("nightModeEducation");
});