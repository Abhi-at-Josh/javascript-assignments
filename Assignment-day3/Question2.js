// Go to youtube. Open any video. Add a button to the page using JS. On click of the button,
// the video playback speed should change to 10x

const button = document.createElement('button');
button.innertext = 'speed up video';
document.body.appendChild(button);
button.onclick = () => {
   document.querySelector('video').playbackRate = 10; 
};


