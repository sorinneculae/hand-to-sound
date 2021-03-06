import configMusic from "./config/configMusic.js";

export default class Music {

  scale = [];
  notePlayers = [];
  noteOffset = (Tone.Time(configMusic.loopTime) / configMusic.howManyLines) * 6; 
  scheduledNotes = {};
  currentPlayer = 0;
  instrumentFiles = [...configMusic.instruments];
  instrumentPlayers = [];
  instrumentOnGrid = {};
  noteY = 0;

  constructor() {
    Tone.Transport.bpm.value = configMusic.bpm;
    this.setScale();
    this.setPlayers();
    this.initializeLoop();
  }

  setScale() {
    for (let i = 0; i < configMusic.howManyOctaves; i++) {
      const notes = configMusic.scales[configMusic.scale];
      for (let j = 0; j < notes.length; j++) {
        this.scale.push(`${ notes[j] }${ i + configMusic.startingOctave }`);
      }
    }
  }

  setPlayers() {
    Tone.Offline(() => {
      const synth = this.getSynth();
      for (let i = 0; i < this.scale.length; i++) {
        synth.triggerAttackRelease(this.scale[i], Tone.Time(configMusic.loopTime) / configMusic.howManyLines, i * this.noteOffset);
      };
    }, this.noteOffset * configMusic.howManyLines).then(buffer => {
      for (let i = 0; i < this.scale.length; i++) {
        Tone.setContext(Tone.context);
        const player = new Tone.Player(buffer).toDestination();
        player.volume.value = -20;
        this.notePlayers.push(player);
      }
      for (let i = 0; i < this.instrumentFiles.length; i++) {
        const player = new Tone.Player('../sounds/' + this.instrumentFiles[i]).toDestination();
        this.instrumentOnGrid[i] = {};
        player.volume.value = -20;
        this.instrumentPlayers.push(player);
      }
    });
  }

  startPlayer(elem) {
    const { id } = elem;
    const x = parseInt(elem.getAttribute('x'));
    const y = parseInt(elem.getAttribute('y'));
    if (elem.classList.contains('note-active')) {
      const scheduleId = Tone.Transport.schedule((time) => {
        this.notePlayers[this.currentPlayer].start(time, x * this.noteOffset, this.noteOffset);
        this.currentPlayer = (this.currentPlayer + 1) % this.notePlayers.length;
        elem.classList.add('animate-key');
        setTimeout(() => elem.classList.remove('animate-key'), 400);
      }, y * (Tone.Time(configMusic.loopTime) / configMusic.howManyLines));
      this.scheduledNotes[id] = scheduleId;
    } else {
      Tone.Transport.clear(this.scheduledNotes[id]);
    }
  }

  startInstrumentPlayer(nr, scheduleInstrument, instrumentId) {
    if (scheduleInstrument) {
      this.noteY = Math.floor(Tone.Transport.getSecondsAtTime(Tone.now()) / (Tone.Time(configMusic.loopTime) / configMusic.howManyLines));
      if (this.noteY > configMusic.howManyLines) {
        this.noteY = configMusic.howManyLines;
      }
      const id = `instrument_${nr}_${this.noteY}`;
      if (!this.instrumentOnGrid[id]) {
        
        const octaveDiv = document.getElementsByClassName('octave')[this.noteY];
        const instrumentCell = document.createElement('div');
        instrumentCell.id = id;
        instrumentCell.innerText = nr;
        instrumentCell.classList.add('instrument-cell');

        instrumentCell.addEventListener('click', () => {
          octaveDiv.removeChild(instrumentCell);
          this.startInstrumentPlayer(nr, false, instrumentCell.id);
        });

        octaveDiv.appendChild(instrumentCell);
        
        const scheduleId = Tone.Transport.schedule((time) => {
          this.instrumentPlayers[nr].start(time);
          instrumentCell.classList.add('animate-key');
          setTimeout(() => instrumentCell.classList.remove('animate-key'), 400);
        }, this.noteY * (Tone.Time(configMusic.loopTime) / configMusic.howManyLines));
        this.instrumentOnGrid[id] = true;
        this.scheduledNotes[instrumentCell.id] = scheduleId;
      }    
    } else {
      this.instrumentOnGrid[instrumentId] = false;
      Tone.Transport.clear(this.scheduledNotes[instrumentId]);
    }
  }

  initializeLoop() {
    Tone.Transport.loopEnd = configMusic.loopTime;
    Tone.Transport.loop = true;
    this.startLoop();
    setTimeout(() => Tone.start(), 500);
  }
  
  startLoop() {
    Tone.Transport.start();
  }

  pauseLoop() {
    Tone.Transport.pause();
  }

  getSynth(nr) {
    let synth;
    const filter = new Tone.Filter({ frequency: 1100, rolloff: -12 }).toDestination();
    switch (nr) {
      case 1:
        synth = new Tone.Synth().toDestination();
        break;
  
      case 2:
        synth = new Tone.MembraneSynth().toDestination();
        break;
      
      case 3:
        synth = new Tone.MonoSynth({
          oscillator: {
            type: "square"
          },
          envelope: {
            attack: 0.1
          }
        }).toDestination();
        break;
      
      case 4:
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
}