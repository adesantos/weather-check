import React from 'react';

export const SearchList = ({ places, handleFavorite, checkFav }) => {

    return (
        <div id="search-list">
            {(places && places.length > 0) &&
                places.map((row, i) => (
                    <div key={i} className="list-item">
                        <button className="star" onClick={() => handleFavorite(row.name)}><i className={checkFav(row.name) ? "fas fa-star" : "far fa-star"}></i></button>
                        <span>{row.name}</span>
                    </div>
                ))}
        </div>
    );
}