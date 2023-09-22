export default function Instructions() {
  function removeInstructions() {
    const removeThis = document.querySelector(".instructions");
    removeThis.remove();
  }

  return (
    <div className="instructions">
      <h3>Instructions:</h3>
      <ul>
        <li>
          The goal of the game is to not click the same titan more than once
        </li>
        <li>
          Each time a titan is clicked the cards will sort into a different
          order
        </li>
        <li>
          Click the same card more than once and the score (top right) will
          reset!
        </li>
        <li>Try to get to 9 and you win!!</li>
      </ul>
      <button onClick={removeInstructions}>Start game!</button>
    </div>
  );
}
