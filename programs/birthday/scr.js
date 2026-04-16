/* ========================
   MOBILE NAV
   ======================== */
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

/* ========================
   CONFETTI
   ======================== */
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiPieces = [];
let confettiRunning = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const COLORS = ['#ffb3c6','#ff85a1','#ffd6c0','#e8d5f5','#c8f0e0','#fff0b3','#f4a0c0','#c0a8f0'];
const SHAPES = ['circle','rect','star'];

function createConfettiPiece() {
  return {
    x: Math.random() * canvas.width,
    y: -12,
    r: Math.random() * 7 + 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    vy: Math.random() * 3 + 2,
    vx: (Math.random() - 0.5) * 2,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
    opacity: 1,
  };
}
// Add this helper function for targeted bursts
function burstAt(x, y, amount = 15) {
  for (let i = 0; i < amount; i++) {
    const p = createConfettiPiece();
    p.x = x;
    p.y = y;
    p.vy = Math.random() * -5 - 2; // Shoot upwards
    p.vx = (Math.random() - 0.5) * 10;
    confettiPieces.push(p);
  }
  if (!confettiRunning) animateConfetti();
}

// Update your launchConfetti to be more dramatic
function launchConfetti() {
  confettiRunning = true;
  const colors = ['#ff85a1', '#ffd6c0', '#fff'];
  
  // Multiple bursts from different sides
  burstAt(window.innerWidth * 0.2, window.innerHeight);
  burstAt(window.innerWidth * 0.8, window.innerHeight);
  
  animateConfetti();
  let count = 0;
  const interval = setInterval(() => {
    burstAt(Math.random() * canvas.width, canvas.height);
    count++;
    if (count > 15) { 
      clearInterval(interval); 
      confettiRunning = false; 
    }
  }, 150);
}

function drawStar(cx, cy, r) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function animateConfetti() {
  if (!confettiRunning && confettiPieces.length === 0) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    if (p.shape === 'circle') {
      ctx.beginPath(); ctx.arc(0,0,p.r,0,Math.PI*2); ctx.fill();
    } else if (p.shape === 'rect') {
      ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);
    } else {
      drawStar(0,0,p.r); ctx.fill();
    }
    ctx.restore();
    p.y += p.vy; p.x += p.vx; p.angle += p.spin;
    if (p.y > canvas.height - 50) p.opacity -= 0.04;
  });
  confettiPieces = confettiPieces.filter((p) => p.opacity > 0);
  requestAnimationFrame(animateConfetti);
}

function launchConfetti() {
  confettiRunning = true;
  const burst = () => { for (let i = 0; i < 12; i++) confettiPieces.push(createConfettiPiece()); };
  burst();
  animateConfetti();
  let count = 0;
  const interval = setInterval(() => {
    burst(); count++;
    if (count > 20) { clearInterval(interval); confettiRunning = false; }
  }, 120);
}

window.addEventListener('load', () => { setTimeout(launchConfetti, 600); });

/* ========================
   CANDLE BLOW
   ======================== */
const flameIds  = ['flame-1','flame-2','flame-3'];
const candleIds = ['candle-1','candle-2','candle-3'];

function blowCandles() {
  const blowBtn    = document.getElementById('blow-btn');
  const relightBtn = document.getElementById('relight-btn');
  blowBtn.disabled = true;
  blowBtn.style.opacity = '0.6';
  flameIds.forEach((id, i) => {
    setTimeout(() => {
      const flame  = document.getElementById(id);
      const candle = document.getElementById(candleIds[i]);
      flame.classList.add('out');
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      candle.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1300);
      
      if (i === flameIds.length - 1) {
        setTimeout(() => {
          blowBtn.classList.add('hidden');
          relightBtn.classList.remove('hidden');
          
          showWish();
          launchConfetti();
        }, 500);
      }
    }, i * 380);
  });
}

function relightCandles() {
  const blowBtn    = document.getElementById('blow-btn');
  const relightBtn = document.getElementById('relight-btn');
  flameIds.forEach((id) => { document.getElementById(id).classList.remove('out'); });
  blowBtn.disabled = false;
  blowBtn.style.opacity = '1';
  blowBtn.classList.remove('hidden');
  relightBtn.classList.add('hidden');
}

function showWish() { document.getElementById('wish-overlay').classList.remove('hidden'); }
function closeWish() { document.getElementById('wish-overlay').classList.add('hidden'); }

/* ========================
   BALLOON GAME
   ======================== */
let balloonScore = 0;
let balloonBest = 0;
let balloonTimeLeft = 30;
let balloonInterval = null;
let balloonSpawnInterval = null;
let balloonGameActive = false;

const arena          = document.getElementById('balloon-arena');
const gameOverlay    = document.getElementById('game-overlay');
const scoreEl        = document.getElementById('score');
const timerEl        = document.getElementById('timer');
const bestEl         = document.getElementById('best');
const overlayTitle   = document.getElementById('overlay-title');
const overlayMsg     = document.getElementById('overlay-msg');

try { balloonBest = parseInt(localStorage.getItem('mimii_best') || '0'); } catch(e) {}
bestEl.textContent = balloonBest;

const BALLOON_EMOJIS = ['🎈','🎀','💖','🌸','✨','🎊','💕','🌷'];

function startBalloonGame() {
  balloonScore = 0; balloonTimeLeft = 30; balloonGameActive = true;
  scoreEl.textContent = 0; timerEl.textContent = 30;
  gameOverlay.style.display = 'none';
  arena.querySelectorAll('.balloon').forEach(b => b.remove());
  balloonInterval = setInterval(() => {
    balloonTimeLeft--;
    timerEl.textContent = balloonTimeLeft;
    if (balloonTimeLeft <= 0) endBalloonGame();
  }, 1000);
  balloonSpawnInterval = setInterval(spawnBalloon, 700);
  spawnBalloon(); spawnBalloon();
}

function spawnBalloon() {
  if (!balloonGameActive) return;
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.textContent = BALLOON_EMOJIS[Math.floor(Math.random() * BALLOON_EMOJIS.length)];
  const arenaWidth = arena.offsetWidth;
  const left = Math.random() * (arenaWidth - 70) + 10;
  const duration = Math.random() * 2.5 + 2.5;
  const size = Math.random() * 1.2 + 0.8;
  balloon.style.left = left + 'px';
  balloon.style.fontSize = (size * 2.8) + 'rem';
  balloon.style.animationDuration = duration + 's';
  balloon.addEventListener('click', () => {
    if (!balloonGameActive) return;
    balloon.classList.add('popped');
    balloon.textContent = '💥';
    balloonScore++; scoreEl.textContent = balloonScore;
    for (let i = 0; i < 5; i++) {
      const rect = balloon.getBoundingClientRect();
      const p = createConfettiPiece();
      p.x = rect.left + rect.width / 2; p.y = rect.top;
      p.vy = Math.random() * -3 - 1; p.vx = (Math.random() - 0.5) * 6;
      confettiPieces.push(p);
    }
    if (!confettiRunning) animateConfetti();
    setTimeout(() => balloon.remove(), 300);
  });
  balloon.addEventListener('animationend', () => balloon.remove());
  arena.appendChild(balloon);
  // Inside your spawnBalloon function, update the click listener:
balloon.addEventListener('click', (e) => {
    if (!balloonGameActive) return;
    
    // Visual pop feedback
    balloon.classList.add('popped');
    balloon.textContent = '✨'; 
    
    // Shake the score element
    scoreEl.style.transform = 'scale(1.3)';
    setTimeout(() => scoreEl.style.transform = 'scale(1)', 100);

    balloonScore++;
    scoreEl.textContent = balloonScore;
    
    // Burst confetti exactly where the balloon was
    burstAt(e.clientX, e.clientY, 8);
    
    setTimeout(() => balloon.remove(), 200);
});
}

function endBalloonGame() {
  balloonGameActive = false;
  clearInterval(balloonInterval); clearInterval(balloonSpawnInterval);
  arena.querySelectorAll('.balloon').forEach(b => b.remove());
  if (balloonScore > balloonBest) {
    balloonBest = balloonScore;
    try { localStorage.setItem('mimii_best', balloonBest); } catch(e) {}
    bestEl.textContent = balloonBest;
  }
  overlayTitle.textContent = '🎉 Time\'s Up!';
  overlayMsg.innerHTML = `You popped <strong>${balloonScore}</strong> balloons!${balloonScore > 10 ? ' Amazing! 🌟' : ' Keep trying! 💪'}`;
  document.getElementById('start-balloon-btn').textContent = '🔄 Play Again!';
  gameOverlay.style.display = 'flex';
  launchConfetti();
}

/* ========================
   JIGSAW PUZZLE
   ======================== */
let jigsawGrid = 3;
let jigsawOrder = [];   // current positions → which piece (correctIndex) lives there
let moveCount = 0;
let dragSrcIndex = null;
let touchSrcIndex = null;

const jigsawBoard    = document.getElementById('jigsaw-board');
const moveCountEl    = document.getElementById('move-count');
const puzzleWinEl    = document.getElementById('puzzle-win');
const jigsawPreview  = document.getElementById('jigsaw-preview');
const diffSelect     = document.getElementById('difficulty-select');

// Load image
const puzzleImg = new Image();
puzzleImg.src = PUZZLE_IMAGE;
puzzleImg.onload = () => {
  // Show preview
  const previewImg = document.createElement('img');
  previewImg.src = PUZZLE_IMAGE;
  previewImg.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
  jigsawPreview.appendChild(previewImg);
  initJigsaw();
};

function changeDifficulty() {
  jigsawGrid = parseInt(diffSelect.value);
  initJigsaw();
}

function initJigsaw() {
  const N = jigsawGrid;
  const total = N * N;
  jigsawOrder = Array.from({length: total}, (_, i) => i);
  moveCount = 0; moveCountEl.textContent = 0;
  puzzleWinEl.classList.add('hidden');
  updateBoardGrid(N);
  shuffleJigsaw();
}

function updateBoardGrid(N) {
  const pieceSize = getPieceSize(N);
  jigsawBoard.style.gridTemplateColumns = `repeat(${N}, ${pieceSize}px)`;
  jigsawBoard.style.gridTemplateRows    = `repeat(${N}, ${pieceSize}px)`;
  jigsawBoard.style.gap = '4px';
}

function getPieceSize(N) {
  const maxW = Math.min(window.innerWidth - 80, 420);
  const size = Math.floor((maxW - (N - 1) * 4 - 12) / N);
  return Math.max(64, Math.min(110, size));
}

function renderJigsaw() {
  const N = jigsawGrid;
  const pieceSize = getPieceSize(N);
  jigsawBoard.innerHTML = '';
  updateBoardGrid(N);

  const imgW = puzzleImg.naturalWidth  || puzzleImg.width  || 400;
  const imgH = puzzleImg.naturalHeight || puzzleImg.height || 400;
  const cellW = imgW / N;
  const cellH = imgH / N;

  jigsawOrder.forEach((correctIdx, slotIdx) => {
    const col = correctIdx % N;
    const row = Math.floor(correctIdx / N);
    const bgX = -(col * pieceSize);
    const bgY = -(row * pieceSize);
    const bgW = pieceSize * N;
    const bgH = pieceSize * N;

    const piece = document.createElement('div');
    piece.className = 'jigsaw-piece';
    piece.style.width  = pieceSize + 'px';
    piece.style.height = pieceSize + 'px';
    piece.style.backgroundImage = `url(${PUZZLE_IMAGE})`;
    piece.style.backgroundSize   = `${bgW}px ${bgH}px`;
    piece.style.backgroundPosition = `${bgX}px ${bgY}px`;
    piece.dataset.slot = slotIdx;

    // Check if in correct position
    if (correctIdx === slotIdx) piece.classList.add('correct');

    // Desktop drag
    piece.setAttribute('draggable', 'true');
    piece.addEventListener('dragstart', onDragStart);
    piece.addEventListener('dragover',  onDragOver);
    piece.addEventListener('drop',      onDrop);
    piece.addEventListener('dragend',   onDragEnd);
    piece.addEventListener('dragenter', onDragEnter);
    piece.addEventListener('dragleave', onDragLeave);

    // Touch support
    piece.addEventListener('touchstart', onTouchStart, {passive: false});
    piece.addEventListener('touchmove',  onTouchMove,  {passive: false});
    piece.addEventListener('touchend',   onTouchEnd,   {passive: false});

    jigsawBoard.appendChild(piece);
    // Add this to your renderJigsaw function inside the jigsawOrder.forEach loop:
if (correctIdx === slotIdx) {
    piece.classList.add('correct');
    piece.style.boxShadow = 'inset 0 0 10px rgba(100, 220, 140, 0.5)';
} else {
    piece.style.filter = 'grayscale(20%)'; // Dim incorrect pieces slightly
}

// Enhance swapPieces to be more rewarding
function swapPieces(a, b) {
    [jigsawOrder[a], jigsawOrder[b]] = [jigsawOrder[b], jigsawOrder[a]];
    moveCount++;
    moveCountEl.textContent = moveCount;
    
    renderJigsaw();
    
    // If the piece moved to the correct spot, trigger a tiny burst
    if (jigsawOrder[b] === b) {
        const rect = jigsawBoard.children[b].getBoundingClientRect();
        burstAt(rect.left + rect.width/2, rect.top + rect.height/2, 5);
    }
    
    checkJigsawWin();
}
  });
}

// === Drag & Drop ===
function onDragStart(e) {
  dragSrcIndex = parseInt(e.currentTarget.dataset.slot);
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function onDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.jigsaw-piece').forEach(p => p.classList.remove('drop-target'));
}
function onDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function onDragEnter(e) { e.currentTarget.classList.add('drop-target'); }
function onDragLeave(e) { e.currentTarget.classList.remove('drop-target'); }
function onDrop(e) {
  e.preventDefault();
  const dropIndex = parseInt(e.currentTarget.dataset.slot);
  if (dragSrcIndex !== null && dragSrcIndex !== dropIndex) {
    swapPieces(dragSrcIndex, dropIndex);
  }
  dragSrcIndex = null;
}

// === Touch Drag ===
let touchGhost = null;
let touchOffX = 0, touchOffY = 0;

function onTouchStart(e) {
  e.preventDefault();
  touchSrcIndex = parseInt(e.currentTarget.dataset.slot);
  const touch = e.touches[0];
  const rect = e.currentTarget.getBoundingClientRect();
  touchOffX = touch.clientX - rect.left;
  touchOffY = touch.clientY - rect.top;

  // Create ghost
  touchGhost = e.currentTarget.cloneNode(true);
  touchGhost.style.cssText = `
    position:fixed; z-index:9998; pointer-events:none; opacity:0.85;
    width:${e.currentTarget.offsetWidth}px; height:${e.currentTarget.offsetHeight}px;
    left:${touch.clientX - touchOffX}px; top:${touch.clientY - touchOffY}px;
    border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.3);
    background-image:${e.currentTarget.style.backgroundImage};
    background-size:${e.currentTarget.style.backgroundSize};
    background-position:${e.currentTarget.style.backgroundPosition};
  `;
  document.body.appendChild(touchGhost);
  e.currentTarget.style.opacity = '0.3';
}

function onTouchMove(e) {
  e.preventDefault();
  if (!touchGhost) return;
  const touch = e.touches[0];
  touchGhost.style.left = (touch.clientX - touchOffX) + 'px';
  touchGhost.style.top  = (touch.clientY - touchOffY) + 'px';

  // Highlight target
  document.querySelectorAll('.jigsaw-piece').forEach(p => p.classList.remove('drop-target'));
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  if (el && el.classList.contains('jigsaw-piece')) el.classList.add('drop-target');
}

function onTouchEnd(e) {
  e.preventDefault();
  if (touchGhost) { touchGhost.remove(); touchGhost = null; }
  document.querySelectorAll('.jigsaw-piece').forEach(p => {
    p.classList.remove('drop-target');
    p.style.opacity = '';
  });
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  if (el && el.classList.contains('jigsaw-piece')) {
    const dropIndex = parseInt(el.dataset.slot);
    if (touchSrcIndex !== null && touchSrcIndex !== dropIndex) {
      swapPieces(touchSrcIndex, dropIndex);
    }
  }
  touchSrcIndex = null;
}

function swapPieces(a, b) {
  [jigsawOrder[a], jigsawOrder[b]] = [jigsawOrder[b], jigsawOrder[a]];
  moveCount++;
  moveCountEl.textContent = moveCount;
  renderJigsaw();
  checkJigsawWin();
}

function checkJigsawWin() {
  const solved = jigsawOrder.every((val, idx) => val === idx);
  if (solved) {
    puzzleWinEl.classList.remove('hidden');
    launchConfetti();
  }
}

function shuffleJigsaw() {
  puzzleWinEl.classList.add('hidden');
  moveCount = 0; moveCountEl.textContent = 0;
  // Fisher-Yates
  for (let i = jigsawOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [jigsawOrder[i], jigsawOrder[j]] = [jigsawOrder[j], jigsawOrder[i]];
  }
  // Make sure it's not already solved
  if (jigsawOrder.every((v, i) => v === i)) {
    [jigsawOrder[0], jigsawOrder[1]] = [jigsawOrder[1], jigsawOrder[0]];
  }
  renderJigsaw();
}

function solveJigsaw() {
  jigsawOrder = Array.from({length: jigsawGrid * jigsawGrid}, (_, i) => i);
  moveCount = 0; moveCountEl.textContent = 0;
  puzzleWinEl.classList.add('hidden');
  renderJigsaw();
  setTimeout(() => {
    puzzleWinEl.classList.remove('hidden');
    launchConfetti();
  }, 300);
}

window.addEventListener('resize', () => {
  if (puzzleImg.complete) renderJigsaw();
});

/* ========================
   ENVELOPE
   ======================== */
/* ========================
   ENVELOPE
   ======================== */
let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  const flap   = document.getElementById('envelope-flap');
  const letter = document.getElementById('letter-paper');
  const seal   = document.getElementById('wax-seal');
  const hint   = document.getElementById('envelope-hint');

  // 1. Crack the seal
  seal.classList.add('broken');

  // 2. Open the flap after seal breaks
  setTimeout(() => {
    flap.classList.add('open');
  }, 350);

  // 3. Slide letter up above the envelope
  setTimeout(() => {
    letter.classList.add('revealed');
    if (hint) hint.classList.add('gone');
    launchConfetti();
  }, 900);
}

function closeEnvelope(e) {
  if (e) e.stopPropagation();

  const flap   = document.getElementById('envelope-flap');
  const letter = document.getElementById('letter-paper');
  const seal   = document.getElementById('wax-seal');
  const hint   = document.getElementById('envelope-hint');

  // Slide letter back down
  letter.classList.remove('revealed');

  // Close flap after letter is tucked in
  setTimeout(() => {
    flap.classList.remove('open');
  }, 400);

  // Restore seal and hint
  setTimeout(() => {
    seal.classList.remove('broken');
    if (hint) hint.classList.remove('gone');
    envelopeOpened = false;
  }, 900);
}