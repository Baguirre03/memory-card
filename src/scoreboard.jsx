export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <h3>Current: {score}</h3>
      <h3>Best: {bestScore}</h3>
    </div>
  );
}
