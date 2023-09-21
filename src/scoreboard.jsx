export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <h3>Current Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  );
}
