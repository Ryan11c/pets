import React from 'react';
import Navbar from './components/Navbar';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      {/* Your other components here */}
    </>
  );
};

export default App;
