const radios = document.querySelectorAll('input[type="radio"]');
const checkboxs = document.querySelectorAll('.checkbox');
const tags = document.querySelector('.tags');
const parametrsImg=document.querySelector('.parametrsImg');
const LanguageParam= document.querySelectorAll('.LanguageParam');

let apiSelection = localStorage.getItem(2);
let tag = localStorage.getItem(3);
let arrCheck = JSON.parse(localStorage.getItem("checkbox"));
let flagParametrs=false;
let paramJsonLanguageOBj;

const paramJsonLanguage = new XMLHttpRequest();
paramJsonLanguage.open('GET', './translate/parametrs.json');
paramJsonLanguage.send();

function languageparamfunc(){
    LanguageParam.forEach((elem,indx)=>{
        elem.innerHTML=paramJsonLanguageOBj[indx][languageRUEN]
    })
}

paramJsonLanguage.onload=function(){
    paramJsonLanguageOBj = JSON.parse(paramJsonLanguage.response);
    LanguageParam.forEach((elem,indx)=>{
        elem.innerHTML=paramJsonLanguageOBj[indx][languageRUEN]
    })
}
language.addEventListener('change',languageparamfunc)


if(arrCheck==null){

    arrCheck=Array(6).fill(1);
    for(let i=0; i<6;i++){
        checkboxs[i].checked=true
    }
    localStorage.setItem("checkbox", JSON.stringify(arrCheck));
}
arrCheck.forEach(function(elem,indx) {
    checkboxs[indx].checked=elem
});
parametrsImg.onclick=function(){
   
    if(!flagParametrs){
        console.log("click")
        document.querySelector('.parametrs').style.left='0';
        flagParametrs=true;
    }else{
        document.querySelector('.parametrs').style.left='-800px';
        flagParametrs=false;
    }
}


for (let checkbox of checkboxs) {
    if(!checkbox.checked){
        document.querySelector(`.${checkbox.value}`).style.top='-800px';
    }
}
checkboxs.forEach((checkbox,indx)=>{
    checkbox.onchange = function () {
        if(!checkbox.checked){
            document.querySelector(`.${checkbox.value}`).style.top='-800px';
            arrCheck[indx]=false;
            localStorage.setItem("checkbox", JSON.stringify(arrCheck));
        }else{
            document.querySelector(`.${checkbox.value}`).style.top='0px';
            arrCheck[indx]=true;
            localStorage.setItem("checkbox", JSON.stringify(arrCheck));
        }
}
})




tags.value = tag;
if (tag == null) {
    tags.value = TimeWord;
    localStorage.setItem(3, TimeWord);
    tag = TimeWord;
}



if (apiSelection == null) {
    apiSelection = 0;
}
for (let radio of radios) {
    if (parseInt(radio.value) == apiSelection) {
        radio.checked = true;
    } else {
        radio.checked = false;
    }
}
tags.onblur = function () {
    tag = tags.value;
    localStorage.setItem(3, tag);
    urlUnsplash = `https://api.unsplash.com/photos/?orientation=landscape&query=${tag}&client_id=LZQkZRB5xA034UKf3cHYcg4NMPrrPKvrPclJTkXO79w`;
    urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed245f6d276a22a7bb89c819116468e7&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    ImageAPIUnsplash.open('GET', urlUnsplash);
    ImageAPIUnsplash.send();

    ImageAPIFlickr.open('GET', urlFlickr);
    ImageAPIFlickr.send();
};

for (let radio of radios) {
    radio.onchange = function () {
        if (radio.checked) {
            apiSelection = parseInt(radio.value);
            localStorage.setItem(2, apiSelection);
            if (apiSelection == 0) {
                img.src = url;
            }
            if (apiSelection == 1) {
                img.src =ImageAPI_OBJ_Unsplash[randomSlideUnsplash].urls.full;
            }
            if (apiSelection == 2) {
                img.src =ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l;
            }
        }
    };
}

