import React from 'react';
import Nav from './component/nav/Nav';
import MainVid from './component/mainVid/MainVid';
import MainVidInfo from './component/mainVidInfo/MainVidInfo';
import FormComments from './component/formComments/FromComments';
import Comment from './component/comments/Comment';
import Recommendations from './component/recommendation/Recommendation';
import {sideVideo, mainVideo} from './data.js';


class App extends React.Component {
  state = {
    mainVideoInfo: mainVideo,
    sideVideoInfo: sideVideo
  }

  render() {
    return (
      <>
        {console.log('testing to see if state transfers', this.state.b)}
        <Nav />
        <MainVid mainVidPass={this.state.mainVideoInfo} />
        <main>
            <div>
                <MainVidInfo mainVidPass={this.state.mainVideoInfo} />
                {/* information needs to be passed from the data.js */}
                <FormComments />
                <Comment />
            </div>
            <Recommendations sideVidPass={this.state.sideVideoInfo} />
        </main>
      </>
    );
  }
}

export default App;
