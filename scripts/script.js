const body = document.querySelector('body')
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const randomBackGround =  getRandomInt(21);
const url= 'url('+ 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/'+ randomBackGround + '.jpg' + ')'

body.style.backgroundImage=url