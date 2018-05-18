import * as React from 'react';

import 'antd/dist/antd.css';

import './App.css';

// import DataProviderUi from './Demo/DataProvider/DataProviderUi';
import FilterDemo from './Demo/FilterUi/FilterDemo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GeoStyler</h1>
        </header>

        <FilterDemo />

      </div>
    );
  }
}

export default App;
