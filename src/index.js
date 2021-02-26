import _ from 'lodash';
import './style.css';
import PianoPNG from './piano.png';
import aModule from './a-module';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function startVideo() {
  navigator.getUserMedia(
    { video:  { 
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    } },
    stream => video.srcObject = stream,
    err => console.error(err)
  )

  const playPromise = document.querySelector('video').play();
  if (playPromise) {
    playPromise.then(response => {
      const videoRatio = video.offsetWidth / video.offsetHeight;
      canvas.width = 780;
      canvas.height = canvas.width / videoRatio;
    })
      .catch(error => { console.error(error) });
  }
  renderFrame();
}

function calculateSize(srcSize, dstSize) {
  const srcRatio = srcSize.width / srcSize.height;
  const dstRatio = dstSize.width / dstSize.height;
  if (dstRatio > srcRatio) {
    return {
      width:  dstSize.height * srcRatio,
      height: dstSize.height
    };
  } else {
    return {
      width:  dstSize.width,
      height: dstSize.width / srcRatio
    };
  }
}


function renderFrame() {
  requestAnimationFrame(renderFrame);
  // set internal canvas size to match HTML element size
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    // scale and horizontally center the camera image
    const videoSize = { width: video.videoWidth, height: video.videoHeight };
    const canvasSize = { width: canvas.width, height: canvas.height };
    const renderSize = calculateSize(videoSize, canvasSize);
    context.drawImage(video, 0, 0, renderSize.width, renderSize.height);
  }
}

// function addPianoToCanvas() {
//   const context = canvas.getContext('2d');
//   const pianoImage = new Image();
//   pianoImage.src = PianoPNG;
//   console.log(pianoImage);
//   pianoImage.onload = function(){
//     context.drawImage(pianoImage, 0, 0);
//   }
// }

startVideo();
// addPianoToCanvas();