import React from 'react';
import AnimeShopLIstCart from '../AnimeShopListCart/AnimeShopLIstCart';

const AnimeShopList = ({ animes }) => {
    // console.log(animes);

    return (
        <div>
            <h2>Anime Items: {animes.length}</h2>
            {
                animes.map(anime => <AnimeShopLIstCart anime={anime} key={anime.mal_id}></AnimeShopLIstCart>)
            }
        </div>
    );
};

export default AnimeShopList;