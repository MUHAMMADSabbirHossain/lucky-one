import React from 'react';
import "./AnimeShopList.css"
import AnimeShopLIstCart from '../AnimeShopListCart/AnimeShopLIstCart';

const AnimeShopList = ({ animes, addToWatchLaterBtn }) => {
    // console.log(animes);

    return (
        <div>
            <h2>Anime Items: {animes.length}</h2>
            <div id='anime-shop-list-carts'>
                {
                    animes.map(anime => <AnimeShopLIstCart anime={anime} addToWatchLaterBtn={addToWatchLaterBtn} key={anime.mal_id}></AnimeShopLIstCart>)
                }
            </div>
        </div>
    );
};

export default AnimeShopList;