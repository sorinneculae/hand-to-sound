import './style.css';

import { drawHand, drawOctaves } from "./utilities";

const video = document.getElementById('video');
const piano = document.getElementById('piano');

const canvasVideo = document.getElementById('canvasVideo');
const canvasGrid = document.getElementById('canvasGrid');
const canvasGesture = document.getElementById('canvasGesture');;
const ctxVideo = canvasVideo.getContext('2d');
const ctxGrid = canvasGrid.getContext('2d');
const ctxGesture = canvasGesture.getContext('2d');

let canvasWidth;
let canvasHeight;

function startVideo() {
  navigator.getUserMedia(
    { 
      audio: false,
      video: {
        width: { min: 780, ideal: 780, max: 1024 },
        height: { min: 438, ideal: 438, max: 576 }
      }
    },
    stream => video.srcObject = stream,
    err => console.error(err)
  );
  const playPromise = document.querySelector('video').play();
  if (playPromise) {
    playPromise.then(response => {
      const videoRatio = video.offsetWidth / video.offsetHeight;
      canvasGrid.width = canvasGesture.width = canvasVideo.width = 780;
      canvasGrid.height = canvasGesture.height = canvasVideo.height = canvasVideo.width / videoRatio;
      canvasWidth = canvasVideo.width;
      canvasHeight = canvasVideo.height;
      detect();
      piano.style.width = `${ canvasWidth }px`;
      piano.style.height = `${ canvasHeight }px`;

      const originX = piano.getBoundingClientRect().x;
      const originY = piano.getBoundingClientRect().y;

      drawOctaves(originX, originY);

    })
    .catch(error => { console.error(error) });
  }
}

startVideo();

function onResults(results) {
  drawHand(results, ctxVideo, ctxGrid, ctxGesture, canvasWidth, canvasHeight);
}

const holistic = new Holistic({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/${file}`;
}});
holistic.setOptions({
  selfieMode: true,
  upperBodyOnly: true,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
holistic.onResults(onResults);

// const hands = new Hands({
//   locateFile: (file) => {
//       return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
//   }
// });
// hands.setOptions({
//   maxNumHands: 2,
//   selfieMode: true,
//   minDetectionConfidence: 0.8,
//   minTrackingConfidence: 0.5
// });
// hands.onResults(onResults);

const detect = async () => {
  await holistic.send({ image: video });
  // await hands.send({ image: video });
  requestAnimationFrame(detect);
};