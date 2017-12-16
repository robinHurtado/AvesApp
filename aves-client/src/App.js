import React, { Component } from 'react';
import AvesForm from './containers/AvesForm';
import AvesList from './containers/AvesList';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <AvesForm />
        <AvesList />
      </div>
    );
  }
}

export default App;
