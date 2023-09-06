import React from 'react';
import AnimeShopList from '../AnimeShopList/AnimeShopList';
import AnimeShopCart from '../AnimeShopCart/AnimeShopCart';

const AnimeShop = ({ animes }) => {
    // console.log(animes);

    return (
        <div id='anime-shop'>
            <AnimeShopList animes={animes}></AnimeShopList>
            <AnimeShopCart></AnimeShopCart>
        </div >
    );
};

export default AnimeShop;