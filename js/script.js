let changeTheme = document.querySelector(".js-changeTheme");
let changeThemeEducation = document.querySelector(".section--education");

console.log(changeTheme);
console.log(changeThemeEducation);

changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("nightMode");
    changeThemeEducation.classList.toggle("nightModeEducation");
 });