import config from "../config/config.js";

export default class HandDetection {

  constructor() {
    this.holistic = new Holistic({ locateFile: (file) => `${config.handDetection.url}${file}` });
    this.holistic.setOptions(config.handDetection.options);
  }

  async detect(videoDiv) {
    await this.holistic.send({ image: videoDiv });
    requestAnimationFrame(this.detect.bind(this, videoDiv));
  }
}