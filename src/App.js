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

  const [watchLaterAnimes, setWatchLaterAnime] = useState([]);

  const addToWatchLaterBtn = (selectedAnime) => {
    // console.log(selectedAnime.anime.mal_id);
    // console.log(...watchLaterAnimes);
    // console.log(watchLaterAnimes[0].anime.mal_id);
    let exists = watchLaterAnimes.find(watchLaterAnime =>
      watchLaterAnime.anime.mal_id === selectedAnime.anime.mal_id
    );
    // console.log(exists);

    let newArray = [];
    if (exists) {
      console.log("defined", exists);

    } else {
      console.log("undefined", exists);
      newArray = [...watchLaterAnimes, selectedAnime];
      setWatchLaterAnime(newArray);

    }


    // console.log(newArray);

  }



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
      <AnimeShop animes={animes} addToWatchLaterBtn={addToWatchLaterBtn} watchLaterAnimes={watchLaterAnimes}></AnimeShop>
    </div>
  );
}

export default App;
