const language = document.querySelector(".language");
const optionLanguages = document.querySelectorAll('.optionLanguage');
let languageRUEN=localStorage.getItem(4);


if(languageRUEN==null){
    languageRUEN='en'
    localStorage.setItem(4,languageRUEN);
    for (let optionLanguage of optionLanguages) {
        if(optionLanguage.value==languageRUEN){
            optionLanguage.selected=true;
        }else{
            optionLanguage.selected=false;
        }
    }
}

for (let optionLanguage of optionLanguages) {
    if(optionLanguage.value==languageRUEN){
        optionLanguage.selected=true;
    }else{
        optionLanguage.selected=false;
    }
}

function changeLanguage(){
    languageRUEN=language.value;
    localStorage.setItem(4,languageRUEN);
    for (let optionLanguage of optionLanguages) {
        if(optionLanguage.value==languageRUEN){
            optionLanguage.selected=true;
        }else{
            optionLanguage.selected=false;
        }
    }
}
language.addEventListener('change',changeLanguage)
// LanguageParam.forEach((elem,indx)=>{
//     // elem.innerHTML=
// })