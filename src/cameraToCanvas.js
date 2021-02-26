const canvasVideo = document.getElementById('canvasVideo');

function startVideo() {
  navigator.getUserMedia(
    { 
      audio: true,
      video: {
        width: { min: 780, ideal: 780, max: 1024 },
        height: { min: 438, ideal: 438, max: 576 }
      }
    },
    stream => video.srcObject = stream,
    err => console.error(err)
  );
  const playPromise = document.querySelector('video').play();
  if (playPromise) {
    playPromise.then(response => {
      const videoRatio = video.offsetWidth / video.offsetHeight;
      canvasVideo.width = 780;
      canvasVideo.height = canvasVideo.width / videoRatio;
    })
      .catch(error => { console.error(error) });
  }
  renderFrame();
}

function renderFrame() {
  requestAnimationFrame(renderFrame);
  const ctx = canvasVideo.getContext("2d");
  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
