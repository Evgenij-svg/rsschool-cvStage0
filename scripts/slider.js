const body = document.querySelector('body');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let randomSlide = getRandomArbitrary(1, 21);
let PrevRandomSlide;
let url = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(
    randomSlide
)}.jpg)`;
let url2;
body.style.backgroundImage = url;

const ArrowPrev = document.querySelector('.SliderPrev');
const ArrowNext = document.querySelector('.SliderNext');
const opaciySlider = document.querySelector('.opaciySlider');

let flagSlider = true;
ArrowPrev.onclick = function () {
    PrevRandomSlide = randomSlide;
    if (flagSlider) {
        randomSlide--;
        flagSlider=false;
    }

    if (randomSlide < 1) {
        randomSlide = 20;
    }
    // body.style.opacity='0.5';
    url = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(randomSlide)}.jpg)`;
    //     url2=`url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(PrevRandomSlide)}.jpg)`
    //    body.style.background=` center / contain no-repeat url(${url}),#eee 35% url(${url2})`
    //
    body.style.backgroundImage = url;
};
ArrowNext.onclick = function () {
    PrevRandomSlide = randomSlide;
    if (flagSlider) {
        randomSlide++;
        flagSlider=false;
    }

    if (randomSlide > 20) {
        randomSlide = 1;
    }
    // body.style.opacity='0.5';
    url = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeWord}/${addZero(randomSlide)}.jpg)`;
    body.style.backgroundImage = url;
};

body.addEventListener('transitionend', function () {
    console.log(1);
    flagSlider=true;
});
