{
    const welcome = () => {
        console.log("Witam na mojej stronie!")
    }

    const onChangeBackgroundClick = () => {
        const changeThemeEducation = document.querySelector(".section--education");

        document.body.classList.toggle("nightMode");
        changeThemeEducation.classList.toggle("nightModeEducation");
    }

    const init = () => {
        const changeTheme = document.querySelector(".js-changeTheme");
        changeTheme.addEventListener("click", onChangeBackgroundClick);

        welcome();
    }

    init();
    
}
