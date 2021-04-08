
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import configMusic from "../config/configMusic.js";

export default class GestureClassifier {

  instruments = [0, ...configMusic.instruments];
  // K value for KNN
  TOPK = 10;
  IMAGE_SIZE_W = 780;
  IMAGE_SIZE_H = 439;

  timer = 0;
  infoTexts = [];
  buttons = [];
  training = false;
  handInImage = false;

  lastInstrument = 1;

  allGestures = {};

  knn = null;
  mobilenet = null;

  constructor(callbackTriggerInstrument) {
    this.callbackTriggerInstrument = callbackTriggerInstrument;
    this.createButtons();
    // Initiate deeplearn.js math and knn classifier objects
    this.initClassifier();
  }

  createButtons() {
    const container = document.createElement('div');
    container.style.display = 'inline-block';
    container.style.paddingLeft = '20px';
    container.style.position = 'absolute';
    container.style.top = '10px';
    document.body.appendChild(container);
    
    // Create training buttons  
    for (let i = 1; i < this.instruments.length; i++) {
      const div = document.createElement('div');
      container.appendChild(div);
      div.style.marginBottom = '10px';

      // Create training button
      const button = document.createElement('button')
      button.classList.add('instrument-button');
      button.innerText = this.instruments[i];
      div.appendChild(button);

      // Listen for mouse events when clicking the button
      button.addEventListener('mousedown', () => this.training = i);
      button.addEventListener('mouseup', () => this.training = false);

      // Create info text
      const infoText = document.createElement('span');
      div.appendChild(infoText);
      this.infoTexts[i] = infoText;
      this.buttons[i] = button;
    }
  }

  async initClassifier() {
    this.knn = knnClassifier.create();
    this.mobilenet = await mobilenet.load();
  }

  async animate(imageData) {
    // Get image data from canvas
    const image = tf.browser.fromPixels(imageData);

    let logits;
    // 'conv_preds' is the logits activation of MobileNet.
    const infer = () => this.mobilenet.infer(image, 'conv_preds');
    const allGesturesAreTrained = Object.keys(this.allGestures).length === (this.instruments.length - 1);

    // Train class if one of the buttons is held down
    if (this.training !== false) {
      this.allGestures[this.training] = true;
      logits = infer();
      // Add current image to classifier
      this.knn.addExample(logits, this.training);
    }

    const numClasses = this.knn.getNumClasses();
    if (numClasses > 0 && this.handInImage) {

      // If classes have been added run predict
      logits = infer();
      const res = await this.knn.predictClass(logits, this.TOPK);
      this.buttons[this.lastInstrument].classList.remove('active-instrument');

      for (let i = 1; i < this.instruments.length; i++) {

        // The number of examples for each class
        const exampleCount = this.knn.getClassExampleCount();

        // Update info text
        if (exampleCount[i] > 0) {
          this.infoTexts[i].innerText = ` : ${exampleCount[i]}`;

          if (res.confidences[i] === 1 && this.lastInstrument !== i && allGesturesAreTrained) {
            this.lastInstrument = i;
            this.callbackTriggerInstrument(this.lastInstrument - 1);
          }
        }
      }
      if (allGesturesAreTrained) {
        this.buttons[this.lastInstrument || 1].classList.add('active-instrument');
      }
    }

    // Dispose image when done
    image.dispose();
    if (logits != null) {
      logits.dispose();
    }
  }
}