import React from 'react';
import AnimeShopList from '../AnimeShopList/AnimeShopList';
import AnimeShopCart from '../AnimeShopCart/AnimeShopCart';

const AnimeShop = () => {
    return (
        <div>
            <AnimeShopList></AnimeShopList>
            <AnimeShopCart></AnimeShopCart>
        </div >
    );
};

export default AnimeShop;