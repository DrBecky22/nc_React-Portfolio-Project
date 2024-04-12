import GameCard from './GameCard';
import './App.css';

const gamesList = [
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "role-playing"
  }, 

  {
    id: 1,
    name: "Monopoly",
    rating: 4,
    category: "board-game"
  }, 

  {
    id: 2,
    name: "Wizards",
    rating: 3,
    category: "card-game"
  } 
]


function App() {
  return (

    <div>
      <h1>My Board Games</h1>
      { gamesList.map( g => <GameCard game = {g} /> ) }
      </div>
  );
}

export default App;
