export default class Voice {
  constructor(ctx, frequency, output) {
    //things that need happen on initiialization
    this.audio = ctx;
    this.frequency = frequency;
    this.output = output;
  }
  start() {
    //things that need to happen to play a new note
    let now = this.audio.currentTime;

    //create osc
    this.myOsc = this.audio.createOscillator();
    this.myOsc.frequency.setValueAtTime(this.frequency, now);
    this.myOsc.connect(this.output);
    this.myOsc.start();
  }
  stop() {
    this.myOsc.stop();
  } //things to stop the note
  dispose() {} //what should happen after we are down with a note
}
