import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TripsContainer from './containers/TripsContainer';
import NavBar from './componenets/NavBar';
import "bootswatch/dist/quartz/bootstrap.min.css";

class App extends React.Component {

    render() {
      return (
        <div className="App">
          <NavBar />
          <br/>
          <TripsContainer/>
        </div>
      );
    }
  }

export default connect()(App);