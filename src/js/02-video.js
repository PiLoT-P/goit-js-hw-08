import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let timeSet = localStorage.getItem('videoplayer-current-time');

const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
    // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timeSet || 0);

