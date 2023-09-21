import CardContainer from "./cardContainer";
import { useEffect, useState } from "react";
import Card from "./card";
import ScoreBoard from "./scoreboard";

const url = "https://api.attackontitanapi.com/titans";

async function getCards() {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

function mapData(data) {
  return data.results.map((card) => {
    //fix string to display image correctly
    let string = card.img.substring(0, card.img.indexOf("png") + "png".length);
    return {
      ...card,
      img: string,
      clicked: false,
    };
  });
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      const final = mapData(data);
      setCards(final);
    };
    fetchData();
  }, []);

  function resetAll() {
    const copy = [...cards];
    const reset = copy.map((card) => {
      return {
        ...card,
        clicked: false,
      };
    });
    const shuffled = shuffle(reset);
    setCards(shuffled);
    setScore(0);
  }

  function CheckScore() {
    return score == 9 ? (
      <div>
        you won! You won!<button onClick={resetAll}>reset game?</button>
      </div>
    ) : null;
  }

  function handleBest() {
    if (score >= bestScore) {
      setBestScore(score + 1);
    }
  }

  function handleScore(card) {
    if (card.clicked) {
      setScore(0);
    } else {
      setScore(score + 1);
      handleBest();
    }
  }

  function handleClick(index) {
    if (cards[index].clicked) {
      return resetAll();
    }
    handleScore(cards[index]);
    const copy = [...cards];
    copy[index] = { ...copy[index], clicked: true };
    const shuffled = shuffle(copy);
    setCards(shuffled);
  }

  return (
    <main className="container">
      <h1 className="header">Memory Card</h1>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <CheckScore></CheckScore>
      <CardContainer cards={cards} handleClick={handleClick}></CardContainer>
    </main>
  );
}
