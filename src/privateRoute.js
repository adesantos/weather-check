import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { Dashboard } from './components/dashboard';

const PrivateRoute = () => {
    const history = useHistory();
    const auth = localStorage.getItem('auth')==="true"? true : false;
    return (

        <Route
            render={() => {
                if (!auth) {
                    return (
                        <Redirect to={{ pathname: "/login", state: { from: history.location } }} />
                    );
                }

                return <Dashboard />;
            }}
        />
    );
}
export default PrivateRoute;