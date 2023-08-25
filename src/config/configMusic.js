const configMusic = {
  scales: {
    default: ['B#', 'D', 'F', 'G', 'A'],
    classic: ['B', 'C#', 'F#', 'G#', 'D#', 'E'],
    pentatonic: ['C', 'D', 'E', 'G', 'A'],
    chromatic: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'],
    major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    harmonic_minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G#']
  },
  instruments: ['clap-1.ogg', 'closed-hh-1.ogg', 'kick-1.ogg'],
  startingOctave: 3,
  howManyOctaves: 2,
  howManyLines: 11,
  loopTime: '1m',
  scale: 'default',
  bpm: 90
}

export default configMusic;