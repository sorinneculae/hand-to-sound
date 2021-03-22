// Points for fingers
const gridContainer = document.getElementById('grid');
let gridCell;
const points = [4, 8, 12, 16, 20];
// const points = [8];
let allCells = [];
const origins = {};

// Drawing function
export const drawHand = (results, ctx, ctxVideo, w, h) => {
  // Loop through each prediction
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  ctxVideo.clearRect(0, 0, w, h);
  ctxVideo.drawImage(results.image, 0, 0, w, h);
  const rH = results?.rightHandLandmarks || [];
  const lH = results?.leftHandLandmarks || [];
  const hands = [rH, lH];
  let allPoints = {};
  hands.forEach((hand, i) => {
    // Loop through fingers
    if (hand.length) {
      points.forEach(point => {
        allPoints[`${i}_${point}`] = {};

        const x = hand[point].x * w;
        // Get y point
        const y = hand[point].y * h;
        // Start drawing

        ctx.beginPath();
        const radius = (Math.abs(hand[point].z.toFixed(2) * w))/12;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        // Set line color
        ctx.fillStyle = radius > 7 ? 'red' : 'gold';
        if (radius > 7.5) {
          allPoints[`${i}_${point}`] = { x, y, i, point };
        }
        ctx.fill();
      });
    }
  });
  if (Object.values(allPoints).length) {
    checkTouch(allPoints);
  }
  ctx.restore();
};

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

export const checkTouch = (allPoints) =>  {
allCells.forEach(cell => {
    let activate = false;
    Object.values(allPoints).forEach(point => {
      const bBox = cell.getBoundingClientRect();
      if (point.x > bBox.x - origins.x && point.x < bBox.x - origins.x + bBox.width &&
          point.y > bBox.y - origins.y && point.y < bBox.y - origins.y + bBox.height) {
        activate = true;
        if (point.y < bBox.y - origins.y + 100) {
          activate = false;
        }
      }
    })
    if (activate) {
        cell.setAttribute('data-selected', true);
    } else {
        cell.setAttribute('data-selected', false);
    }
  });
}

export const drawGrid = (originX, originY) => {
  origins.x = originX;
  origins.y = originY;

    for (let i = 0; i < 35; i++) {
        gridCell = document.createElement('div');
        gridCell.setAttribute('data-selected', 'false');
        gridContainer.appendChild(gridCell);
        allCells.push(gridCell);
    }
}

function toggleColor(event) {
    let gridCellElement = event.currentTarget,
        isCellSelected = gridCellElement.getAttribute('data-selected'),
        randomColor;

    if (isCellSelected == 'false') {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        gridCellElement.style.backgroundColor = '#' + randomColor;
    } else {
        gridCellElement.style.backgroundColor = 'transparent';
    }

    gridCellElement.setAttribute('data-selected', isCellSelected == 'false' ? 'true' : 'false');
}