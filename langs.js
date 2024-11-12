let translations = {};
async function loadTranslations() {
    try {
        const response = await fetch('languages/languages.json');
        if (!response.ok) {
            throw new Error("Failed to load languages.json");
        }
        translations = await response.json();
        updateContent('en');
    } catch (error) {
        alert("Error loading languages.json: " + error.message);
    }
}
 translations = {
    en: {
        welcome: "Welcome to ic3dust's page!",
        langy:"English"
    },
    uk: {
    welcome: "Ласкаво прошу!",
    langy:"Українська"
    }
}

function toggleLMenu() {
    const menu = document.getElementById("lang_menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function changeL(language) {
    if (!translations[language]) {
        alert("We don't support this language");
        return;
    }
    document.documentElement.lang = language;

    //document.body.classList.remove('en', 'uk');

    let flagIcon = document.getElementById("l_toggle");
    switch (language) {
        case "en":
            flagIcon.src = "images/gb.gif";
            //document.body.classList.add('en');
            break;
        case "uk":
            flagIcon.src = "images/uk.gif";
            //document.body.classList.add('uk');
            break;
        default:
            alert("We can not find this specific icon");
            break;
    }
    alert(language === "en" ? "Switched to English" : "Мову змінено на українську");
    updateContent(language);
    toggleLMenu();
}

function updateContent(language) {
    const translation = translations[language];

    document.getElementById("welcome").textContent = translation.welcome;
    document.getElementById("langy").textContent = translation.langy;
}
window.onload = loadTranslations;