import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Components/LandingPage/LandingPageContainer';
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingPage/>
        <Footer />
      </div>
    );
  }
}

export default App;