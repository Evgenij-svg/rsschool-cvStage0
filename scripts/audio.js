const audio = document.querySelector(".audio");
const titles = document.querySelector(".titlesSong");
const PlayPause = document.querySelector(".Play");
const NextSong = document.querySelector(".NextSong");
const PrevSong = document.querySelector(".PrevSong");


let BoolPlayPause = false;

const song = ['song1', 'song2', 'song3']
let songindex = 0;
let title = '';
song.forEach((elem) => {
    title = title + `<span class="${elem}">${elem}</span>`

})
titles.innerHTML = title;


function loadSong() {
    audio.pause();
    audio.src = `../audio/${song[songindex]}.mp3`;
    song.forEach((elem) => {
        const offSong = document.querySelector(`.${elem}`);
        offSong.classList.remove('titleSongNow')
    })
    const songNow = document.querySelector(`.${song[songindex]}`);
    songNow.classList.add('titleSongNow');
}
loadSong();


PlayPause.onclick = function () {
    BoolPlayPause = !BoolPlayPause;
    if (BoolPlayPause) {

        audio.play();
        PlayPause.src = "../svg/pause.svg"
    } else {
        audio.pause();
        PlayPause.src = "../svg/play.svg"
    }

}

function NextSongHandler() {
    songindex++;
    if (songindex >= song.length) {
        songindex = 0;
    }
    console.log(songindex)
    loadSong();
    if (BoolPlayPause) {
        audio.play();
    }
}
function PrevSongHandler() {
    songindex--;
    if (songindex < 0) {
        songindex = song.length - 1;
    }
    
    loadSong();
    if (BoolPlayPause) {
        audio.play();
    }
}

NextSong.addEventListener('click', NextSongHandler);

PrevSong.addEventListener('click', PrevSongHandler);

audio.addEventListener('ended', NextSongHandler);