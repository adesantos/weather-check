import React, { useState, useEffect } from 'react';
import { getPlacesList, getWeather } from '../actions/weather';
import { useDispatch, useSelector } from 'react-redux';
import { SearchList } from './searchList';

const Search = ({ favorites, setFavorites }) => {

    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const weather = useSelector((state) => state.weather.weather);
    const placesList = useSelector((state) => state.places.places);

    useEffect(() => {
        setList(placesList);
    }, [placesList, favorites]);

    useEffect(() => {
        if (weather) {
            setFavorites(prev => [...prev, weather]);
        }
    }, [setFavorites, weather]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearch = (e) => {
        const search = e.target.value;
        if (search !== "") {
            dispatch(getPlacesList(search));
        }
    }

    const checkFav = (name) => {
        const fav = favorites.filter(obj => obj.location.name+", "+obj.location.region+", "+obj.location.country === name).length > 0;
        return fav;
    }

    const handleFavorite = (name) => {
        const flag = checkFav(name);
        if (flag) {
            var temp = favorites.filter(obj => obj.location.name+", "+obj.location.region+", "+obj.location.country !== name);
            setFavorites(temp);
        } else {
            dispatch(getWeather(name));
        }
    }

    const handleClear = () => {
        setList([]);
    }

    return (
        <div className="col-12">
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="search" onChange={handleSearch} />
                <button type="reset" className="btn btn-info" onClick={handleClear}>Clear</button>
            </form>
            <SearchList places={list} favorites={favorites} handleFavorite={handleFavorite} checkFav={checkFav} />
        </div>

    );
}
export default Search;