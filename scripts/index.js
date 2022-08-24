const btn = document.getElementById('BurgerID');
const Brightness = document.querySelector('.Brightness');
const CloseBurgers = document.querySelectorAll('#CloseBurger');

const SPAIN = document.querySelector('.SPAIN');
const JAPAN = document.querySelector('.JAPAN');
const USA = document.querySelector('.USA');
const Images_destinations = document.querySelector('.Images_destinations');

const eclipses1 = document.querySelector('.eclipses1');
const eclipses2 = document.querySelector('.eclipses2');
const eclipses3 = document.querySelector('.eclipses3');

const ArrowSlide1 = document.querySelector('.ArrowSlide1');
const ArrowSlide2 = document.querySelector('.ArrowSlide2');

const Registor = document.querySelector('.Registor');
const Btn_Login = document.querySelectorAll('#Login');

const PopUp = document.querySelector('.PoPupRegandLogin');
const btnSign = document.querySelector('.sign');
let slides = 1;
let flag = false;
console.log(150);
btn.onclick = function () {
    document.getElementById('BurgerMenuId').style.top = '0px';
    Brightness.style.display = 'block';
    document.querySelector('body').style.overflow = "hidden"
};
CloseBurgers.forEach((CloseBurger) => {
    CloseBurger.onclick = function () {
        document.getElementById('BurgerMenuId').style.top = '-300px';
        Brightness.style.display = 'none';
        PopUp.style.top = '-800px';
        document.querySelector('body').style.overflow = "scroll"
    };
});

USA.onclick = function () {
    if (screen.width > 390) {
        Images_destinations.style.marginLeft = '-1540px';
        eclipses2.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses3.style.background = '#F2785C';
    }
};
JAPAN.onclick = function () {
    if (screen.width > 390) {
        Images_destinations.style.marginLeft = '0px';
        eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses2.style.background = '#F2785C';
        eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
    }
};
SPAIN.onclick = function () {
    if (screen.width > 390) {
        Images_destinations.style.marginLeft = '1540px';
        eclipses1.style.background = '#F2785C';
        eclipses2.style.background = 'rgba(242, 120, 92, 0.5)';
    }
};
let timerId = setInterval(() => {
    if (screen.width <= 390) {
        Images_destinations.style.marginLeft = '0px';
        if ((getComputedStyle(Images_destinations).justifyContent == 'center')) {
            eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
            eclipses2.style.background = '#F2785C';
            eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
            ArrowSlide1.style.filter = 'opacity(100%)';
            ArrowSlide2.style.filter = 'opacity(100%)';
        }
    }
    if (screen.width > 390) {
        Images_destinations.style.justifyContent = 'center';
        if (getComputedStyle(Images_destinations).marginLeft == '0px') {
            eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
            eclipses2.style.background = '#F2785C';
            eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
        }
    }

}, 100);
ArrowSlide1.onclick = function () {
    if (slides == 1) {
        Images_destinations.style.justifyContent = 'start';
        ArrowSlide1.style.filter = 'opacity(50%)';
        ArrowSlide2.style.filter = 'opacity(100%)';
        eclipses1.style.background = '#F2785C';
        eclipses2.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
        slides = 0;
    }
    if (slides == 2) {
        Images_destinations.style.justifyContent = 'center';
        ArrowSlide1.style.filter = 'opacity(100%)';
        ArrowSlide2.style.filter = 'opacity(100%)';
        eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses2.style.background = '#F2785C';
        eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
        slides = 1;
    }
    console.log(slides);
};

ArrowSlide2.onclick = function () {
    if (slides == 1) {
        Images_destinations.style.justifyContent = 'end';
        ArrowSlide1.style.filter = 'opacity(100%)';
        ArrowSlide2.style.filter = 'opacity(50%)';
        eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses2.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses3.style.background = '#F2785C';
        slides = 2;
    }
    if (slides == 0) {
        Images_destinations.style.justifyContent = 'center';
        ArrowSlide1.style.filter = 'opacity(100%)';
        ArrowSlide2.style.filter = 'opacity(100%)';
        eclipses1.style.background = 'rgba(242, 120, 92, 0.5)';
        eclipses2.style.background = '#F2785C';
        eclipses3.style.background = 'rgba(242, 120, 92, 0.5)';
        slides = 1;
    }
    console.log(slides);
};
Btn_Login.forEach((Login) => {
    Login.onclick = function () {
        PopUp.style.top = '0';
        Brightness.style.display = 'block';
        flag = false;
        PopUp.childNodes[1].innerHTML = 'Log in to your account';
        PopUp.childNodes[3].style.display = 'block';
        PopUp.childNodes[5].style.display = 'block';
        PopUp.childNodes[7].style.display = 'flex';
        PopUp.childNodes[9].childNodes[7].style.display = 'block';
        PopUp.childNodes[9].childNodes[5].childNodes[0].innerHTML = 'Sign In';
        PopUp.childNodes[11].childNodes[1].innerHTML = 'Don’t have an account?';
        PopUp.childNodes[11].childNodes[3].innerHTML = 'Register';
        PopUp.style.height = '660px';
        document.querySelector('body').style.overflow = "hidden"
        flag = false;
    };
});

Registor.onclick = function () {
    console.log(flag);
    if (!flag) {
        PopUp.childNodes[1].innerHTML = 'Create account';
        PopUp.childNodes[1].style.marginBottom = '20px';
        PopUp.childNodes[3].style.display = 'none';
        PopUp.childNodes[5].style.display = 'none';
        PopUp.childNodes[7].style.display = 'none';
        PopUp.childNodes[9].childNodes[7].style.display = 'none';
        PopUp.childNodes[9].childNodes[5].childNodes[0].innerHTML = 'Sign Up';
        PopUp.childNodes[9].childNodes[5].style.marginBottom = '25px';
        PopUp.childNodes[11].childNodes[1].innerHTML = 'Already have an account?';
        PopUp.childNodes[11].childNodes[3].innerHTML = 'Log in';

        PopUp.style.height = '436px';
        flag = true;
        console.log(flag);
    } else {
        PopUp.childNodes[1].innerHTML = 'Log in to your account';
        PopUp.childNodes[1].style.marginBottom = '0px';
        PopUp.childNodes[3].style.display = 'block';
        PopUp.childNodes[5].style.display = 'block';
        PopUp.childNodes[7].style.display = 'flex';
        PopUp.childNodes[9].childNodes[7].style.display = 'block';
        PopUp.childNodes[9].childNodes[5].childNodes[0].innerHTML = 'Sign In';
        PopUp.childNodes[9].childNodes[5].style.marginBottom = '0px';
        PopUp.childNodes[11].childNodes[1].innerHTML = 'Don’t have an account?';
        PopUp.childNodes[11].childNodes[3].innerHTML = 'Register';
        PopUp.style.height = '660px';
        flag = false;
    }
};
btnSign.onclick = function () {
    console.log('click')
    alert(document.getElementById('inputEmail').value);
    alert(document.getElementById('inputPassword').value);
}