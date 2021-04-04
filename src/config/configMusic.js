const configMusic = {
  scales: {
    default: ['B#', 'D', 'F', 'G', 'A'],
    classic: ['B', 'C#', 'F#', 'G#', 'D#', 'E'],
    pentatonic: ['C', 'D', 'E', 'G', 'A'],
    chromatic: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'],
    major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    harmonic_minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G#']
  },
  startingOctave: 3,
  howManyOctaves: 2,
  howManyLines: 11,
  loopTime: '1m',
  scale: 'classic',
  instrument: null,
  bpm: 120
}

export default configMusic;