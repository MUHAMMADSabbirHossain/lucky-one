import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import AnimeShop from './Components/AnimeShop/AnimeShop';

function App() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime?q=&sfw")
      .then(res => res.json())
      .then(data => setAnimes(data.data));
  }, []);
  console.log(animes);


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header></Header>
      <div>
        <input type="text" placeholder='Anime name...' />
        <button>Search</button>
      </div>
      <AnimeShop animes={animes}></AnimeShop>
    </div>
  );
}

export default App;
