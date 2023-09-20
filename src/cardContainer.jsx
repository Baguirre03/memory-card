import { useEffect, useState } from "react";
import Card from "./card";

async function getCards() {
  try {
    const response = await fetch("https://api.attackontitanapi.com/titans", {
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default function CardContainer() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      const final = data.results.map((card) => {
        let string = card.img.substring(
          0,
          card.img.indexOf("png") + "png".length
        );
        return {
          ...card,
          string: string,
          clicked: false,
        };
      });
      setCards(final);
    };
    fetchData().catch(console.error);
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

  //cut string
  return (
    <div>
      <div>{score}</div>
      <div>{bestScore}</div>
      {cards.map((link, index) => (
        <div onClick={() => handleClick(index)} key={link.id}>
          <div>{link.name}</div>
          <div>{link.id}</div>
          <img id={link.id} src={link.string}></img>
          <div>{link.clicked.toString()}</div>
        </div>
      ))}
    </div>
  );
}
