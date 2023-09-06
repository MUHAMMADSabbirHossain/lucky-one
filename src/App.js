import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import AnimeShop from './Components/AnimeShop/AnimeShop';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  let appInputSearchValue;
  const appSearchBtn = () => {
    // console.log("clicked");
    // appInputSearchValue = document.getElementById("app-input-search-field").value;
    // console.log(appInputSearchValue)
  }


  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    // let url = 'https://api.jikan.moe/v4/anime?q=' + { appInputSearchValue } + '&sfw';

    fetch(`https://api.jikan.moe/v4/anime?q=&sfw`)
      .then(res => res.json())
      .then(data => setAnimes(data.data));
  }, []);
  // console.log(animes);






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
        <input id="app-input-search-field" type="text" placeholder='Anime name...' />
        <button onClick={() => appSearchBtn()}>Search</button>
      </div>
      <AnimeShop animes={animes}></AnimeShop>
    </div>
  );
}

export default App;
