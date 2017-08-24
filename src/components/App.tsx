import * as React from 'react';
const logo = require('../assets/logo.svg');
import { Button } from 'antd';
import DataFetcher from '../services/DataFetcher';

class App extends React.Component {

  dataFetcher: DataFetcher;
  
  constructor(props: any){
    super(props);
    this.dataFetcher = new DataFetcher();
  }

  getData(){
    this.dataFetcher.getData()
    .then((data: any)=>{
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary" onClick={() => this.getData()}>Hello World</Button>
      </div>
    );
  }
}

export default App;
