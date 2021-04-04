import config from "./config/config.js";
import Util from "./Util.js";

import Music from "./Music.js";
import HandDetection from "./hands/HandDetection.js";
import RightHand from "./hands/RightHand.js";
import LeftHand from "./hands/LeftHand.js";
import Grid from "./Grid.js";
import Gestures from "./Gestures.js";

export default class App {
  constructor() {
    this.leftHand = null;
    this.rightHand = null;
    this.music = null;
    this.gestures = null;
    
    this.videoDiv = null;
    this.gridDiv = null;

    this.canvasVideo = null;
    this.ctxVideo = null;
    this.canvasGrid = null;
    this.ctxGrid = null;
    this.canvasGesture = null;
    this.ctxGesture = null;

    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.originX = 0;
    this.originY = 0;
    this.init();
  }

  async init() {
    this.initializeHTMLElements();
    await this.initializeVideo();
    this.initializeCanvas();
    this.initializeMusic();
    this.initializeHandDetection();
    this.initializeGrid();
    this.initializeHands();
    this.initializeGestures();
  }

  initializeHTMLElements() {
    this.videoDiv = document.getElementById('video');
    this.gridDiv = document.getElementById('grid');
    this.canvasVideo = document.getElementById('canvasVideo');
    this.ctxVideo = canvasVideo.getContext('2d');
    this.canvasGrid = document.getElementById('canvasGrid');
    this.ctxGrid = canvasGrid.getContext('2d');
    this.canvasGesture = document.getElementById('canvasGesture');;
    this.ctxGesture = canvasGesture.getContext('2d');
  }

  async initializeVideo() {
    navigator.getUserMedia({
        audio: false,
        video: {
          width: config.videoWidth,
          height: config.videoHeight
        }
      },
      stream => this.videoDiv.srcObject = stream,
      err => console.error(err)
    );
    return this.videoDiv.play();
  }

  initializeCanvas() {
    this.canvasWidth = this.videoDiv.offsetWidth;
    this.canvasHeight = this.videoDiv.offsetHeight;
    this.canvasVideo.width = this.canvasWidth;
    this.canvasVideo.height = this.canvasHeight;
    this.originX = this.canvasVideo.getBoundingClientRect().x;
    this.originY = this.canvasVideo.getBoundingClientRect().y;
  }

  initializeMusic() {
    this.music = new Music();
  }

  initializeHandDetection() {
    this.handDetection = new HandDetection();
    this.handDetection.detect(this.videoDiv);
    this.handDetection.holistic.onResults(this.drawHands.bind(this));
  }

  initializeGrid() {
    this.canvasGrid.width = this.canvasWidth;
    this.canvasGrid.height = this.canvasHeight;
    this.gridDiv.style.width = `${this.canvasWidth}px`;
    this.gridDiv.style.height = `${this.canvasHeight}px`;
    this.grid = new Grid(this.gridDiv, this.music.scale);
    this.grid.draw();
  }

  initializeHands() {
    this.canvasGesture.width = this.canvasWidth;
    this.canvasGesture.height = this.canvasHeight;
    this.leftHand = new LeftHand(this.ctxGesture, this.canvasWidth, this.canvasHeight);
    this.rightHand = new RightHand(this.ctxGrid, this.canvasWidth, this.canvasHeight);
  }

  initializeGestures() {
    this.gestures = new Gestures(this.canvasWidth, this.canvasHeight);
  }

  drawHands(results) {
    this.ctxVideo.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctxGrid.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctxGesture.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  
    this.ctxVideo.drawImage(results.image, 0, 0, this.canvasWidth, this.canvasHeight);
    const rightHandPoints = results?.rightHandLandmarks || [];
    const leftHandPoints = results?.leftHandLandmarks || [];
    
    if (rightHandPoints.length) {
      this.rightHand.draw(rightHandPoints);
      this.checkRightHandTouch();
    }

    if (leftHandPoints.length) {
      this.leftHand.draw(leftHandPoints);
      this.gestures.getGesture('bpm', [leftHandPoints[4], leftHandPoints[8]]);
    }
  }

  checkRightHandTouch() {
    const touchedElements = Util.checkGridTouch(
      this.grid.elements,
      this.grid.gridNotes,
      this.rightHand.activePoints,
      { 
        x: this.originX,
        y: this.originY
      }
    );
    touchedElements.forEach(element => this.music.startPlayer(element));
  }
}