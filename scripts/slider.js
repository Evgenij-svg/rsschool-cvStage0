const bodyImage = document.querySelector('body');
bodyImage.style.backgroundImage = 'url(../img/bg.jpg)';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const img = new Image();

let randomSlide = getRandomArbitrary(1, 21);
let randomSlideUnsplash = getRandomArbitrary(0, 10);
let randomSlideFlickr = getRandomArbitrary(0, 100);

let url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(randomSlide)}.jpg`;
let urlUnsplash = `https://api.unsplash.com/photos/?orientation=landscape&query=${tag}&client_id=LZQkZRB5xA034UKf3cHYcg4NMPrrPKvrPclJTkXO79w`;

let urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed245f6d276a22a7bb89c819116468e7&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;

const ArrowPrev = document.querySelector('.SliderPrev');
const ArrowNext = document.querySelector('.SliderNext');
const opaciySlider = document.querySelector('.opaciySlider');

let flagSlider = true;

const ImageAPIUnsplash = new XMLHttpRequest();
ImageAPIUnsplash.open('GET', urlUnsplash);
ImageAPIUnsplash.send();
let ImageAPI_OBJ_Unsplash;

ImageAPIUnsplash.onload = function () {
    ImageAPI_OBJ_Unsplash = JSON.parse(ImageAPIUnsplash.response);
    if (apiSelection == 1) {
        img.src = ImageAPI_OBJ_Unsplash[randomSlideUnsplash].urls.full;
    }
};

img.onload = function () {
    bodyImage.style.backgroundImage = 'url(' + img.src + ')';
};

const ImageAPIFlickr = new XMLHttpRequest();
ImageAPIFlickr.open('GET', urlFlickr);
ImageAPIFlickr.send();
let ImageAPI_OBJ_Flickr;
ImageAPIFlickr.onload = function () {
    ImageAPI_OBJ_Flickr = JSON.parse(ImageAPIFlickr.response);
    if (apiSelection == 2) {
        while (ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l ==undefined) {
            randomSlideFlickr = getRandomArbitrary(0, 100);
        }
        img.src =ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l;
    }
};

if (apiSelection == 0) {
    img.src = url;
}
ArrowPrev.onclick = function () {
    if (apiSelection == 0) {
        if (flagSlider) {
            randomSlide--;
            flagSlider = false;
        }
        if (randomSlide < 1) {
            randomSlide = 20;
        }
        url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(randomSlide)}.jpg`;
        img.src = url;
    } else if (apiSelection == 1) {
        if (flagSlider) {
            randomSlideUnsplash--;
            flagSlider = false;
        }
        if (randomSlideUnsplash < 0) {
            randomSlideUnsplash = 9;
        }
        img.src =ImageAPI_OBJ_Unsplash[randomSlideUnsplash].urls.full ;
    } else if (apiSelection == 2) {
        if (flagSlider) {
            randomSlideFlickr--;
            if (randomSlideFlickr < 0) {
                randomSlideFlickr = 99;
            }
            while (ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l == undefined) {
                randomSlideFlickr--;
                if (randomSlideFlickr < 0) {
                    randomSlideFlickr = 99;
                }
            }
            flagSlider = false;
        }

        img.src= ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l;
    }
};
ArrowNext.onclick = function () {
    if (apiSelection == 0) {
        if (flagSlider) {
            randomSlide++;
            flagSlider = false;
        }
        if (randomSlide > 20) {
            randomSlide = 1;
        }
        url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(randomSlide)}.jpg`;
        img.src = url;
    } else if (apiSelection == 1) {
        if (flagSlider) {
            randomSlideUnsplash++;
            flagSlider = false;
        }
        if (randomSlideUnsplash > 9) {
            randomSlideUnsplash = 0;
        }
        img.src= ImageAPI_OBJ_Unsplash[randomSlideUnsplash].urls.full;
    } else if (apiSelection == 2) {
        if (flagSlider) {
            randomSlideFlickr++;
            if (randomSlideFlickr >= 99) {
                randomSlideFlickr = 0;
            }
            while (ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l ==undefined) {
                randomSlideFlickr++;
                if (randomSlideFlickr >= 99) {
                    randomSlideFlickr = 0;
                }
            }

            flagSlider = false;
        }

        img.src =ImageAPI_OBJ_Flickr.photos.photo[randomSlideFlickr].url_l;
    }
};

bodyImage.addEventListener('transitionend', function () {
    flagSlider = true;
});
