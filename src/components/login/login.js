import React, { useState } from 'react';
import formValidation from './formValidation';
import { useHistory } from "react-router-dom";
import Gif from '../../images/weather.gif';

const credentials = {
    username: "useri",
    password: "pass*User1"
}

const Login = () => {
    const history = useHistory();
    const initialValues = { username: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const fieldsValidation = {
        username: {
            error: "",
            minLength: 5,
            maxLength: 20,
            validate: "username"
        },
        password: {
            error: "",
            minLength: 8,
            maxLength: 20,
            validate: "password"
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // set values
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));

        // set errors
        const error = formValidation(name, value, fieldsValidation) || "";

        setFormErrors({
            [name]: error
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = e.target.elements;

        if (credentials.username === username.value && credentials.password === password.value) {
            const currentUser = username.value;
            localStorage.setItem('auth', true);
            history.push("/");
        } else {
            setFormErrors({
                auth: "Username or Password incorrect. Please, try again!"
            });
        }
    }

    return (
        <div id="login">
            <div className="col img">
                <img className="img-fluid" src={Gif} alt="Weather Gif" />
                <div className="col text">
                    <h3>Hi!</h3>
                    <h3>The Username and Password are hardcoded</h3>
                    <p>(Username: <b>useri</b> Password: <b>pass*User1</b>)</p>
                    <h4>Try different inputs to test validation.</h4>
                </div>
            </div>
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                {formErrors &&
                    <p style={{ color: 'red' }}>{formErrors.auth}</p>
                }
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    {formErrors &&
                        <p style={{ color: 'red' }}>{formErrors.username}</p>
                    }
                    <input type="text" name="username" id="username" value={formValues.username} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    {formErrors &&
                        <p style={{ color: 'red' }}>{formErrors.password}</p>
                    }
                    <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}
export default Login;