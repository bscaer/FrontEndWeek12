// Import React and the css file for the custom React components
import React from 'react';
import './components.css';

// The NavBar components represents a NavBar-like row of links.
export default class NavBar extends React.Component {
    render() {
        return (
            <div><a href="#">Home</a><a href="#">About Us</a><a href="#">Help</a></div>
        );
    }
}