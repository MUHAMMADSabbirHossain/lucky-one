import React from 'react';
import "./AnimeShopCart.css";

const AnimeShopCart = ({ watchLaterAnimes }) => {
    // console.log(watchLaterAnimes);

    return (
        <div id='anime-shop-cart'>
            <div>
                <h2>Watch Summary</h2>
                <h5></h5>
                <h2>Watch Later Item: {watchLaterAnimes.length}</h2>
                <div style={{ display: "flex" }}>
                    {
                        watchLaterAnimes.map(watchLaterAnime => {
                            return (
                                <div >
                                    <p>{watchLaterAnime.anime.title}</p>
                                    <img src={watchLaterAnime.anime.images.jpg.image_url} alt="" width="50px" />
                                </div>
                            )
                        })
                    }
                </div>
                <button>Clear History</button>
            </div>
        </div >
    );
};

export default AnimeShopCart;