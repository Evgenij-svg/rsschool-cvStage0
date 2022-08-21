const audio = document.querySelector('.audio');
const titles = document.querySelector('.titlesSong');
const PlayPause = document.querySelector('.Play');
const NextSong = document.querySelector('.NextSong');
const PrevSong = document.querySelector('.PrevSong');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progressBar');
const jcpvolume = document.querySelector('.jcpvolume');
const img_volume = document.querySelector('.img_volume');
const TitleSong = document.querySelector('.TitleSong');
const CurentTime = document.querySelector('.CurentTime');
const Duration = document.querySelector('.Duration');

let BoolPlayPause = false;

const song = ['song1', 'song2', 'song3'];
let songindex = 0;
let title = '';
song.forEach((elem) => {
    title =
        title +
        `<div><span class="${elem}">${elem}</span><img class="PlaySong" src="svg/play.svg" height="30" /></div>`;
});
titles.innerHTML = title;
const PlaySong = document.querySelectorAll('.PlaySong');

function loadSong() {
    audio.pause();
    audio.src = `../audio/${song[songindex]}.mp3`;
    song.forEach((elem) => {
        const offSong = document.querySelector(`.${elem}`);
        offSong.classList.remove('titleSongNow');
    });
    const songNow = document.querySelector(`.${song[songindex]}`);
    songNow.classList.add('titleSongNow');
    TitleSong.innerHTML = song[songindex];
    

}
loadSong();

PlayPause.onclick = function () {
    BoolPlayPause = !BoolPlayPause;
    if (BoolPlayPause) {
        audio.play();
        PlaySong.forEach((elem) => {
            elem.src = '../svg/play.svg';
        });
        PlaySong[songindex].src = '../svg/pause.svg';
        PlayPause.src = '../svg/pause.svg';
    } else {
        audio.pause();
        PlaySong[songindex].src = '../svg/play.svg';
        PlayPause.src = '../svg/play.svg';
    }
};

function NextSongHandler() {
    songindex++;
    if (songindex >= song.length) {
        songindex = 0;
    }
    console.log(songindex);
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

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    CurentTime.innerHTML = Math.floor(currentTime) + '/';
    Duration.innerHTML = Math.floor(duration);
    if (!audio.paused) {
        PlaySong.forEach((elem) => {
            elem.src = '../svg/play.svg';
        });
        PlaySong[songindex].src = '../svg/pause.svg';
    }else{
        PlaySong.forEach((elem) => {
            elem.src = '../svg/play.svg';
        });
    }
}

function SetProgress(e) {
    const widthProgressBar = this.clientWidth;
    const click = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (click / widthProgressBar) * duration;
}
jcpvolume.oninput = function () {
    audio.volume = jcpvolume.value / 10;
};
img_volume.onclick = function () {
    audio.volume = 0;
    jcpvolume.value = 0;
};

NextSong.addEventListener('click', NextSongHandler);
PrevSong.addEventListener('click', PrevSongHandler);
audio.addEventListener('ended', NextSongHandler);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', SetProgress);


PlaySong.forEach((btn,ind)=>{
    btn.onclick=function(){
        if(songindex==ind){
            BoolPlayPause = !BoolPlayPause;
        }else{
            songindex=ind;
            BoolPlayPause=true;
            loadSong();
        }
        
        if (BoolPlayPause) {
            audio.play();
            PlaySong.forEach((elem) => {
                elem.src = '../svg/play.svg';
            });
            PlaySong[songindex].src = '../svg/pause.svg';
            PlayPause.src = '../svg/pause.svg';
        } else {
            audio.pause();
            PlaySong[songindex].src = '../svg/play.svg';
            PlayPause.src = '../svg/play.svg';
        }
    }
})