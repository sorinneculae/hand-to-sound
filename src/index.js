import './style.css';
import PianoPNG from './piano.png';
import aModule from './a-module';

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

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
}

function startDetection() {
  const runHandpose = async () => {
    const net = await handpose.load();
    detect(net);
  };

  const detect = async (net) => {
    requestAnimationFrame(() => detect(net));
    // Check data is available
    if (video.readyState === 4) {
      // Set canvas height and width
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      const ctx = canvas.getContext("2d");
      if (hand.length) {
        drawHand(hand, ctx);
      }
    }
  };
  runHandpose();
}

startVideo();
startDetection();