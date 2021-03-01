// Points for fingers
const points = [4, 8, 12, 16, 20];

// Drawing function
export const drawHand = (results, ctx, w, h) => {
  // Loop through each prediction
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(results.image, 0, 0, w, h);

  const rH = results?.rightHandLandmarks || [];
  const lH = results?.leftHandLandmarks || [];
  const hands = [rH, lH];

  hands.forEach(hand => {
    // Loop through fingers
    if (hand.length) {
      points.forEach(point => {
        const x = hand[point].x * w;
        // Get y point
        const y = hand[point].y * h;
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 3 * Math.PI);
        // Set line color
        ctx.fillStyle = 'gold';
        ctx.fill();
      });
    }
  });
  ctx.restore();
};