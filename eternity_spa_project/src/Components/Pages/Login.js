import React from 'react';
import '../Login.css';

function success() {
    alert("Login was successful!");
}

function Login(props) {
    return (
        <div className="Login">

            <div className="login-container">   {/* Where the username and password are going to be */}

                <div className="login-header">
                    <h2>LOG IN</h2>
                    {/* <img className="login-image" alt="eternity_logo" src={process.env.PUBLIC_URL + "images/image-5.jpg"} width="75px" height="75px" /> */}
                </div><br /> <br />

                <div className="username">
                    <label for="username"> Username: </label>
                    <input className="input1" type="text" id="username" name="username" /><br />
                </div> <br />

                <div className="password">
                    <label for="password"> Password: </label>
                    <input className="input2" type="text" id="password" name="password" /> <br />
                    </div>

                <div className="login-buttons">
                    <button className="cancel-btn">
                        Cancel
                    </button>

                    <button className="login-btn" onClick={success}>
                        Log In
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Login