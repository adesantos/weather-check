import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './search';
import Content from './content';

export const Dashboard = () => {
    const history = useHistory();
    const [favorites, setFavorites] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        history.push("/login");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 top-bar">
                    <h2>Weather Alert</h2>
                    <button className="logout btn btn-light" type="button" onClick={handleLogout}>Logout</button>
                </div>
                <Search favorites={favorites} setFavorites={setFavorites} />
                <Content id="content" favorites={favorites} setFavorites={setFavorites} />
            </div>
        </div>
    );
}