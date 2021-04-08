import configMusic from "./config/configMusic.js";

export default class Grid {

  elements = [];
  gridNotes = {};
  clickCallback;

  constructor(container, scale, clickCallback) {
    this.container = container;
    this.scale = scale;
    this.clickCallback = clickCallback;
  }
  draw() {
    const gridElem = document.getElementById('grid');
    for (let y = 0; y < configMusic.howManyLines; y++) {
      const octave = document.createElement('div');
      octave.classList.add('octave');
      gridElem.appendChild(octave);
  
      for (let x = 0; x < this.scale.length; x++) {
        const toneDiv = document.createElement('div');
        const currentNote = this.scale[x];
        toneDiv.id = `${currentNote}-${y}`;
        toneDiv.setAttribute('x', x);
        toneDiv.setAttribute('y', y);
        toneDiv.setAttribute('note', currentNote);
  
        toneDiv.addEventListener('click', () => {
          toneDiv.classList.toggle('note-active');
          this.clickCallback(toneDiv);
        });
  
        toneDiv.classList.add('tone');
        octave.appendChild(toneDiv);
        
        this.elements.push(toneDiv);
        this.gridNotes[toneDiv.id] = { currentNote };
      }
    }
  }
}