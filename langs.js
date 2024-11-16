let translations = {};
function loadTranslations() {
    fetch('data/translations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            translations = data;
        })
        .catch(error => {
            alert('Error loading translations:', error);
        });
}
function toggleLMenu() {
    const menu = document.getElementById("lang_menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function changeL(language) {
    if (!translations[language]) {
        alert("Error getting language");
        return;
    }
    document.documentElement.lang = language;

    //document.body.classList.remove('en', 'uk');

    let flagIcon = document.getElementById("l_toggle");
    switch (language) {
        case "en":
            flagIcon.src = "images/gb.gif";
            alert("Switched to English");
            //document.body.classList.add('en');
            break;
        case "uk":
            flagIcon.src = "images/uk.gif";
            alert("Мову змінено на українську");
            //document.body.classList.add('uk');
            break;
        default:
            alert("Impossible error(with flags)");
            break;
    }
    updateContent(language);
    toggleLMenu();
}

function updateContent(language) {
    const translation = translations[language];
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
}
function setLanguage(language) {
    updateContent(language);
}
window.onload = loadTranslations;