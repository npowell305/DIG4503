import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';

class App extends React.Component {

  render(){
    return (<Homepage firstName="Nicky"/>);
  }
  
}

export default App;
