// Import React and the css file for the custom React components
import React from 'react';
import './components.css';

// The LoginForm component represents a login form containing a username, password, and Log In button.
export default class LoginForm extends React.Component {
    render() {
        return (
            <div>               
                <form>
                    <h3>Log In</h3>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username"/>
                    <br/>
                    <label for="username">Password</label>
                    <input id="password" type="password" placeholder="Enter Password"/>
                    <br/>
                    <button id="submit" type="submit">Log In</button>
                </form>
            </div>
        );
    }
}