import menu from "./menu.json";
import menuTemplate from "./templates/menu-array-template.hbs";
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');

const checkboxRef = document.querySelector('.theme-switch__toggle');

const menuCardsMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML("beforeend", menuCardsMarkup);


function onChangeMode() {
    const darkMode = checkboxRef.checked;
    if (darkMode) {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);

    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);

    }
};

checkboxRef.addEventListener('change', onChangeMode);
checkboxChecked();

function checkboxChecked() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        document.body.classList.add(Theme.DARK);
        checkboxRef.checked = true;
    }
}