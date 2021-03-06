// 1.	Using create-react-app, created a new React project.
// 2.	Created a LoginForm component that should contains a username and password input fields, an h3 that says Log In, and a border. 
// 3.	Created a Navigation component that contains links styled like a navbar. 
// 4.	The Navigation component is located at the top of the page and the LoginForm is in the center of the page.

// Import React and the two custom React components, NavBar and LoginForm.
import React from 'react';
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

// The App component is the top level component.
function App() {
  return (
    // The app contains NavBar and LoginForm components.
    <div className="App">
      <NavBar />
      <LoginForm />
    </div>
  );
}

export default App;
