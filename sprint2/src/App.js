import React from 'react';
import Nav from './component/nav/Nav';
import Main from './component/main/Main';
import Upload from './component/upload/Upload';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  // JS class world, can't use declarations

  // console.log does not work here 
  render() {
    // declarations OK 

    return (
      //normal JS world

      <>
        {/* JSX world */}
        <BrowserRouter>
          <Nav />
          <Switch>
            {/* switch is a mechanism allowing the page to change components */}
            <Route path="/" exact component={Main} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/:vidID" exact component={Main}/>
            {/* TODO: fix made up id */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
