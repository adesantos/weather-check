import React, { useEffect, useState } from 'react';

const Content = ({ favorites, setFavorites }) => {
    const [favList, setFavlist] = useState(favorites);

    useEffect(() => {
        setFavlist(favorites);
    }, [setFavlist, favorites]);

    const handleFavorite = (name, region, country) => {
        const place = name+", "+region+", "+country;
        var temp = favList.filter(obj => obj.location.name+", "+obj.location.region+", "+obj.location.country !== place);
        setFavlist(temp);
        setFavorites(temp);
    }

    return (
        <div id="content" className="col-12">
            <div className="row">
                {(favList && favList.length > 0) &&
                    favList.map((city, i) => (
                        <div key={i} className="col-3 col-item">
                            <div className="card">
                                <h3 className="card-title">{city.location.name}</h3>
                                <p className="region">{city.location.region},</p>
                                <p>{city.location.country}</p>
                                <p>{city.location.lat}, {city.location.lon}</p>
                                <button className="star" onClick={() => handleFavorite(city.location.name, city.location.region, city.location.country)}><i className="fas fa-star"></i></button>
                                <div className="col">
                                    <img src={city.current.condition.icon} alt={city.current.condition.text} />
                                </div>
                                <h2>{city.current.temp_f}<span>&#176;F</span> | {city.current.temp_c}<span>&#176;C</span></h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Content;