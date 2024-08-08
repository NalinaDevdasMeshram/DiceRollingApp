import { useState } from "react";
import "./App.css";
import imageDice1 from "./assets/Dice1.png";
import imageDice2 from "./assets/Dice2.png";
import imageDice3 from "./assets/Dice3.png";
import imageDice4 from "./assets/Dice4.png";
import imageDice5 from "./assets/Dice5.png";
import imageDice6 from "./assets/Dice6.png";

function App() {
  const diceData = [
    imageDice1,
    imageDice2,
    imageDice3,
    imageDice4,
    imageDice5,
    imageDice6,
  ];
  const [image, setImage] = useState(diceData[0]);
  const [image1, setImage1] = useState(diceData[1]);
  const genRandomNumber = () => {
    const box1 = Math.floor(Math.random() * 6);
    const box2 = Math.floor(Math.random() * 6);
    setImage(diceData[box1]);
    setImage1(diceData[box2]);
  };
  return (
    <div>
      <h1>Welcome Players</h1>
      <div className="squareBox">
        <img className="DiceBox" src={image} />
        <img className="DiceBox" src={image1} />
      </div>
      <button onClick={genRandomNumber}> Dice Rolling !</button>
    </div>
  );
}

export default App;
