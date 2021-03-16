// Points for fingers
const points = [4, 8, 12, 16, 20, 2, 6, 10, 14, 18];

// Drawing function
export const drawHand = (results, ctx, w, h) => {
  // Loop through each prediction
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(results.image, 0, 0, w, h);

  const rH = results?.rightHandLandmarks || [];
  const lH = results?.leftHandLandmarks || [];
  const hands = [rH, lH];

  hands.forEach((hand) => {
    // Loop through fingers
    if (hand.length) {
      points.forEach((point) => {
        const x = hand[point].x * w;
        // Get y point
        const y = hand[point].y * h;
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 3 * Math.PI);
        // Set line color
        ctx.fillStyle = "gold";
        ctx.fill();
      });
    }
  });
  ctx.restore();
};

export const thumbFinger = (results) => {
  let thumbIsOpen = false;
  const lH = results?.leftHandLandmarks || [];
  if (lH.length > 2) {
    let pseudoFixKeyPoint = results?.leftHandLandmarks[2].x;
    if (
      results?.leftHandLandmarks[3].x < pseudoFixKeyPoint &&
      results?.leftHandLandmarks[4].x < pseudoFixKeyPoint
    ) {
      thumbIsOpen = true;
    }

    return thumbIsOpen;
  }
};

export const firstFinger = (results) => {
  let firstFingerIsOpen = false;
  const lH = results?.leftHandLandmarks || [];
  if (lH.length > 2) {
    let pseudoFixKeyPoint = results?.leftHandLandmarks[6].y;
    if (
      results?.leftHandLandmarks[7].y < pseudoFixKeyPoint &&
      results?.leftHandLandmarks[8].y < pseudoFixKeyPoint
    ) {
      firstFingerIsOpen = true;
    }

    return firstFingerIsOpen;
  }
};

export const secondFinger = (results) => {
  let secondFingerIsOpen = false;
  const lH = results?.leftHandLandmarks || [];
  if (lH.length > 2) {
    let pseudoFixKeyPoint = results?.leftHandLandmarks[10].y;
    if (
      results?.leftHandLandmarks[11].y < pseudoFixKeyPoint &&
      results?.leftHandLandmarks[12].y < pseudoFixKeyPoint
    ) {
      secondFingerIsOpen = true;
    }
    return secondFingerIsOpen;
  }
};

export const thirdFinger = (results) => {
  let thirdFingerIsOpen = false;
  const lH = results?.leftHandLandmarks || [];
  if (lH.length > 2) {
    let pseudoFixKeyPoint = results?.leftHandLandmarks[14].y;
    if (
      results?.leftHandLandmarks[15].y < pseudoFixKeyPoint &&
      results?.leftHandLandmarks[16].y < pseudoFixKeyPoint
    ) {
      thirdFingerIsOpen = true;
    }
    return thirdFingerIsOpen;
  }
};
export const fourthFinger = (results) => {
  let fourthFingerIsOpen = false;
  const lH = results?.leftHandLandmarks || [];
  if (lH.length > 2) {
    let pseudoFixKeyPoint = results?.leftHandLandmarks[18].y;
    if (
      results?.leftHandLandmarks[19].y < pseudoFixKeyPoint &&
      results?.leftHandLandmarks[20].y < pseudoFixKeyPoint
    ) {
      fourthFingerIsOpen = true;
    }
    return fourthFingerIsOpen;
  }
};

export const isHandOpen = (results) => {
  if (
    thumbFinger(results) &&
    firstFinger(results) &&
    secondFinger(results) &&
    thirdFinger(results) &&
    fourthFinger(results)
  ) {
    return true;
  }
  return false;
};
