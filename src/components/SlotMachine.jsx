import React, { useRef, useState } from "react";
import "./SlotMachine.css";

const emojis = ["🍒", "🍋", "🍉"];
const EMOJI_HEIGHT = 80;
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const columns = [useRef(), useRef(), useRef()];
  const [showOverlay, setShowOverlay] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [turboMode, setTurboMode] = useState(false);

  const getSpinSettings = (turbo) => ({
    SPIN_LENGTH: turbo ? 180 : 360,
    SPIN_BASE_DURATION: turbo ? 1000 : 2000,
    STOP_DELAY: turbo ? 250 : 500,
  });

  const startSpin = () => {
    setSpinning(true);
    const finalResults = [];
    const { SPIN_LENGTH, SPIN_BASE_DURATION, STOP_DELAY } =
      getSpinSettings(turboMode);

    columns.forEach((colRef, index) => {
      const col = colRef.current;
      const spinItems = [];

      for (let i = 0; i < SPIN_LENGTH; i++) {
        spinItems.push(getRandomEmoji());
      }

      const finalEmoji = getRandomEmoji();
      spinItems.push(getRandomEmoji());
      spinItems.push(finalEmoji); // Center emoji
      spinItems.push(getRandomEmoji());
      finalResults.push(finalEmoji);

      col.innerHTML = spinItems
        .map((emoji) => `<div class="emoji">${emoji}</div>`)
        .join("");

      const translateY = -1 * EMOJI_HEIGHT * (spinItems.length - 3); // was -2 before

      col.style.transition = "none";
      col.style.transform = "translateY(0)";
      void col.offsetHeight;

      col.style.transition = `transform ${
        SPIN_BASE_DURATION + index * STOP_DELAY
      }ms cubic-bezier(0.2, 0.6, 0.3, 1)`;
      col.style.transform = `translateY(${translateY}px)`;
    });

    const totalSpinTime =
      SPIN_BASE_DURATION + (columns.length - 1) * STOP_DELAY + 500;
    setTimeout(() => {
      const win = finalResults.every((e) => e === finalResults[0]);
      setIsWin(win);
      setShowOverlay(true);
      setSpinning(false);
    }, totalSpinTime);
  };

  const resetGame = () => {
    setShowOverlay(false);
    setIsWin(false);
    setSpinning(false);

    columns.forEach((colRef) => {
      if (colRef.current) {
        colRef.current.style.transition = "none";
        colRef.current.style.transform = "translateY(0)";
        colRef.current.innerHTML = `
          <div class="emoji">🍒</div>
          <div class="emoji">🍋</div>
          <div class="emoji">🍉</div>
        `;
      }
    });
  };

  return (
    <div className="machine">
      <div className="wooden-frame">
        <div className={`golden-frame ${isWin ? "glow" : ""}`}>
          <div className="reels-wrapper">
            {columns.map((ref, i) => (
              <div key={i} className={`reel reel-${i}`}>
                <div className="reel-inner" ref={ref}>
                  <div className="emoji">🍒</div>
                  <div className="emoji">🍋</div>
                  <div className="emoji">🍉</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={startSpin} disabled={spinning} className="spin-btn">
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {showOverlay && (
        <div
          className={`overlay ${isWin ? "win" : "lose"}`}
          onClick={resetGame}
        >
          <div className="emoji-rain">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="emoji-rains"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {isWin ? "🎉" : "😢"}
              </span>
            ))}
          </div>

          <div className="overlay-message animate-message">
            {isWin ? (
              <>
                🎉 <strong>Congratulations! You won!</strong> <br />
              </>
            ) : (
              <>
                ❌ You Lose. <br />
              </>
            )}
            <span className="small">Press to continue</span>
          </div>
        </div>
      )}

      <div className="turbo-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={turboMode}
            onChange={() => setTurboMode(!turboMode)}
          />
          <span className="slider"></span>
        </label>
        <span className="label-text">
          ⚡ Turbo Mode: {turboMode ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};

export default SlotMachine;
