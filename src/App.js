import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';



import DemoTwo from './examples/DemoTwo';
import DemoThree from './examples/DemoThree';

import Menu from './examples/Menu';
import './App.css';
//Para darle estilo a los modelos customizados
//import './components/Nodes/Custom/CustomNodeModel.css'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            {/* <Route path="/demo1" component={DemoOne} /> */}
            <Route path="/demo2" component={DemoTwo} />
            <Route path="/demo3" component={DemoThree} />
            
            <Route component={Menu} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
