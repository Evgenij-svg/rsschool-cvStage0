const language = document.querySelector(".language");
let languageRUEN='en';
function changeLanguage(){
    languageRUEN=language.value;
}
language.addEventListener('change',changeLanguage)