import configMusic from "./config/configMusic.js";

export default class Music {
  constructor() {
    this.scale = [];
    this.players = [];
    this.noteOffset = (Tone.Time(configMusic.loopTime) / configMusic.howManyLines) * 6; 
    this.scheduledNotes = {};
    this.currentPlayer = 0;
    this.setScale();
    this.setPlayers();
    this.initializeLoop();
  }

  setScale() {
    for (let i = 0; i < configMusic.howManyOctaves; i++) {
      const notes = configMusic.scales.default;
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
        this.players.push(player);
      }
    });
  }

  startPlayer(elem) {
    const { id } = elem;
    const x = parseInt(elem.getAttribute('x'));
    const y = parseInt(elem.getAttribute('y'));
    if (!this.scheduledNotes[id]) {
      this.scheduledNotes[id] = {};
    }
    if (elem.classList.contains('note-active')) {
      const scheduleId = Tone.Transport.schedule((time) => {
        this.players[this.currentPlayer].start(time, x * this.noteOffset, this.noteOffset);
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        elem.classList.add('animate-key');
        setTimeout(() => elem.classList.remove('animate-key'), 400);
      }, y * (Tone.Time(configMusic.loopTime) / configMusic.howManyLines));
      this.scheduledNotes[id].scheduleId = scheduleId;
    } else {
      Tone.Transport.clear(this.scheduledNotes[id].scheduleId);
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