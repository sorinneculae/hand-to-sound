import './style.css';

import { drawHand } from "./utilities";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
let canvasWidth;
let canvasHeight;

function startVideo() {
  navigator.getUserMedia(
    { 
      audio: true,
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
      canvas.width = 780;
      canvas.height = canvas.width / videoRatio;
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
      detect();
    })
    .catch(error => { console.error(error) });
  }
}

startVideo();

function onResults(results) {
  drawHand(results, ctx, canvasWidth, canvasHeight);
}

const holistic = new Holistic({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/${file}`;
}});
holistic.setOptions({
  selfieMode: false,
  upperBodyOnly: true,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
holistic.onResults(onResults);

const detect = async () => {
  await holistic.send({ image: video });
  requestAnimationFrame(detect);
};