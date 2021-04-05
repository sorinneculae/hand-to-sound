export default class Gestures {
  
  lastBpm = Tone.Transport.bpm.value;
  newBpm = Tone.Transport.bpm.value;
  lastBpmYpos = 0;

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  getGesture(type, points) {
    switch(type) {
      case 'bpm':
        return this.bpmGesture(points);
    }
  }
  
  bpmGesture(points) {
    const threshold = 25;
    const x1 = points[0].x * this.w;
    const y1 = points[0].y * this.h;
    const x2 = points[1].x * this.w;
    const y2 = points[1].y * this.h;
    const distance =  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow((y1 - y2), 2));
    if (distance < threshold) {
      this.newBpm = Math.round(Math.abs(this.lastBpm + Math.round(this.lastBpmYpos - y1)));
      Tone.Transport.bpm.value = this.newBpm;
    } else {
      this.lastBpm = this.newBpm;
      this.lastBpmYpos = y1;
    }
    return distance < threshold;
  };
}