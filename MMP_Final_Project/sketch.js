let forAI = 0;
let againstAI = 0;
let hasVoted = false;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent('canvasContainer');
  noLoop();

  document.getElementById('forButton').addEventListener('click', voteForAI);
  document.getElementById('againstButton').addEventListener('click', voteAgainstAI);

  drawCanvas();
}

function drawCanvas() {
  background(240, 240, 240);
  fill(255);
  stroke(200);
  strokeWeight(4);
  rect(20, 20, 360, 160, 20);

  textSize(24);
  textAlign(CENTER, CENTER);
  fill(100);
  noStroke();
  if (!hasVoted) {
    text('Are you for or against AI?', width / 2, 60);
  } else {
    text('Thank you for your vote!', width / 2, 60);
  }

  // Display vote counts
  textSize(18);
  fill(50);
  text('Votes for AI: ' + forAI, width / 2, 110);
  text('Votes against AI: ' + againstAI, width / 2, 140);
}

function voteForAI() {
  if (!hasVoted) {
    forAI++;
    hasVoted = true;
    updateButtons();
    drawCanvas();
  }
}

function voteAgainstAI() {
  if (!hasVoted) {
    againstAI++;
    hasVoted = true;
    updateButtons();
    drawCanvas();
  }
}

function updateButtons() {
  document.getElementById('forButton').classList.add('disabled');
  document.getElementById('againstButton').classList.add('disabled');
  document.getElementById('forButton').disabled = true;
  document.getElementById('againstButton').disabled = true;
}
