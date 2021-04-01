// Points for fingers
// const points = [4, 8, 12, 16, 20];
const points = [8];
let grid = [];
const origins = {};
const noteToPlay = {};
// const notes = ['C', 'D', 'E', 'G', 'A'];
// const notes = ['B#','A', 'G', 'F', 'D'];
const notes = ['B#', 'D', 'F', 'G', 'A'];
const allPoints = {};
const startingOctave = 4;
const howManyOctaves = 2;
const howManyLines = 11;
const loopTime = '1m';
const scale = [];
const players = [];
const noteOffset = (Tone.Time(loopTime) / howManyLines) * 6; 
let currentPlayer = 0;
let lastBpm = Tone.Transport.bpm.value;
let lastBpmYpos = 0;
let newBpm = Tone.Transport.bpm.value;

export const drawHand = (results, ctxVideo, ctxGrid, ctxGesture, w, h) => {
  
  ctxGrid.save();
  ctxGrid.clearRect(0, 0, w, h);
  
  ctxGesture.save();
  ctxGesture.clearRect(0, 0, w, h);
  
  ctxVideo.clearRect(0, 0, w, h);
  ctxVideo.drawImage(results.image, 0, 0, w, h);
  
  const rightHand = results?.rightHandLandmarks || [];
  const leftHand = results?.leftHandLandmarks || [];
  
  drawRightHand(rightHand, ctxGrid, w, h);
  drawLeftHand(leftHand, ctxGesture, w, h);
};

const drawRightHand = (rightHand, ctx, w, h) => {
  if (rightHand.length) {
    points.forEach(point => {
      const pressed = rightHand[point].z < -0.1;
      allPoints[`r_${point}`] = {};
      const x = rightHand[point].x * w;
      const y = rightHand[point].y * h;
      const r = (Math.abs(rightHand[point].z * 70));
      // const r = 8;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = pressed ? 'red' : 'gold';
      if (pressed) {
        allPoints[`r_${point}`] = { x, y, r };
      }
      ctx.fill();
    });
    ctx.restore();
    if (Object.values(allPoints).length) {
      checkTouch();
    }
  }
}

const drawLeftHand = (leftHand, ctx, w, h) => {
  if (leftHand.length) {
    leftHand.forEach((point, index) => {
      const x = point.x * w;
      const y = point.y * h;
      const r = 6;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = 'CornflowerBlue';
      ctx.font = "13px Verdana";
      ctx.fillText(index, x - 8, y - 9);
      ctx.fill();
    });
    if (bpmGesture([leftHand[4], leftHand[8]], w, h)) {
      ctx.fillText(`bpm -> ${newBpm}`, leftHand[4].x * w - 100, leftHand[4].y * h);
    }
    ctx.restore();
  }
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

export const checkTouch = () =>  {
  grid.forEach(elem => {
    const { id } = elem;
    const bBox = elem.getBoundingClientRect();
    let touched = false;
    Object.values(allPoints).forEach(p => {
      if (p.x > bBox.x - origins.x && p.x < bBox.x - origins.x + bBox.width &&
        p.y > bBox.y - origins.y && p.y < bBox.y - origins.y + bBox.height) {
        touched = true;
      }
    })

    if (touched) {
      if (!noteToPlay[id].active) {
        noteToPlay[id].active = true;
        elem.classList.toggle('key-active');
        scheduleNote(elem);
      }
    } else {
      noteToPlay[id].active = false;
    }
  });
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

export const drawOctaves = (originX, originY) => {
  createScale();
  origins.x = originX;
  origins.y = originY;
  const piano = document.getElementById('piano');
  for (let y=0; y < howManyLines; y++) {
    const octave = document.createElement('div');
    octave.classList.add('octave');
    piano.appendChild(octave);

    for (let x=0; x < scale.length; x++) {
      const toneDiv = document.createElement('div');
      const currentNote = scale[x];
      toneDiv.id = `${currentNote}-${y}`;
      toneDiv.setAttribute('x', x);
      toneDiv.setAttribute('y', y);
      toneDiv.setAttribute('note', currentNote);

      toneDiv.addEventListener('click', () => {
        toneDiv.classList.toggle('key-active');
        scheduleNote(toneDiv);
      });

      toneDiv.classList.add('tone');
      octave.appendChild(toneDiv);
      
      grid.push(toneDiv);
      noteToPlay[toneDiv.id] = { currentNote };
    }
  }
  initializeTone();
  playSequence();
}

const createScale = () => {
  for (let i=0; i < howManyOctaves; i++) {
    for (let j=0; j < notes.length; j++) {
      scale.push(`${ notes[j] }${ i + startingOctave }`);
    }
  }
}

const initializeTone = () => {
  Tone.Offline( async () => {
    const synth = await getSynth(5);
    for (let i = 0; i < scale.length; i++) {
      synth.triggerAttackRelease(scale[i], Tone.Time(loopTime) / howManyLines, i * noteOffset);
    };
  }, noteOffset * howManyLines).then(buffer => {
    for (let i = 0; i < scale.length; i++) {
      Tone.setContext(Tone.context);
      const player = new Tone.Player(buffer);
      player.volume.value = -20;
      Tone.connect(player, Tone.Destination);
      players.push(player);
    }
  });
}

const getSynth = async nr => {
  let synth;
  const filter = new Tone.Filter({ frequency: 1100, rolloff: -12 }).toDestination();
  switch (nr) {
    case 1:
      synth = await new Tone.Sampler({
        urls: {
            A0: "A0.mp3",
            C1: "C1.mp3",
            "D#1": "Ds1.mp3",
            "F#1": "Fs1.mp3",
            A1: "A1.mp3",
            C2: "C2.mp3",
            "D#2": "Ds2.mp3",
            "F#2": "Fs2.mp3",
            A2: "A2.mp3",
            C3: "C3.mp3",
            "D#3": "Ds3.mp3",
            "F#3": "Fs3.mp3",
            A3: "A3.mp3",
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            "D#5": "Ds5.mp3",
            "F#5": "Fs5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            "D#6": "Ds6.mp3",
            "F#6": "Fs6.mp3",
            A6: "A6.mp3",
            C7: "C7.mp3",
            "D#7": "Ds7.mp3",
            "F#7": "Fs7.mp3",
            A7: "A7.mp3",
            C8: "C8.mp3"
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/"
      }).toDestination();
      break;
    
    case 2:
      synth = new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",
      }).toDestination();
      break;
    
    case 3:
      synth = new Tone.Synth().toDestination();
      break;

    case 4:
      synth = new Tone.MembraneSynth().toDestination();
      break;
    
    case 5:
      synth = new Tone.MonoSynth({
        oscillator: {
          type: "square"
        },
        envelope: {
          attack: 0.1
        }
      }).toDestination();
      break;
    
    case 6:
      synth = new Tone.Synth({
      oscillator: {
        type: 'sawtooth',
      },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 2,
      },
    }).connect(filter);
    break;

    default: 
      synth = new Tone.Synth({
        oscillator: {
          type: 'sine',
        },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1,
        },
      }).connect(filter);
  }
  return synth;
}

const scheduleNote = elem => {
  const { id } = elem;
  const x = parseInt(elem.getAttribute('x'));
  const y = parseInt(elem.getAttribute('y'));
  if (elem.classList.contains('key-active')) {
    const scheduleId = Tone.Transport.schedule(time => {
      players[currentPlayer].start(time, x * noteOffset, noteOffset);
      currentPlayer = (currentPlayer + 1) % players.length;
      elem.classList.add('animate-key');
      setTimeout(() => elem.classList.remove('animate-key'), 400);
    }, y * (Tone.Time(loopTime) / howManyLines));
    noteToPlay[id].scheduleId = scheduleId;
  } else {
    Tone.Transport.clear(noteToPlay[id].scheduleId);
  }
}

const playSequence = () => {
  Tone.Transport.loopEnd = loopTime; // loop at one measure
  Tone.Transport.loop = true;
  Tone.Transport.start();
}

// gestures

const bpmGesture = (points, w, h) => {
  const threshold = 25;
  const x1 = points[0].x * w;
  const y1 = points[0].y * h;
  const x2 = points[1].x * w;
  const y2 = points[1].y * h;
  const distance =  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow((y1 - y2), 2));
  if (distance < threshold) {
    newBpm = Math.abs(lastBpm + Math.round(lastBpmYpos - y1));
    Tone.Transport.bpm.value = newBpm;
  } else {
    lastBpm = newBpm;
    lastBpmYpos = y1;
  }
  return distance < threshold;
};
