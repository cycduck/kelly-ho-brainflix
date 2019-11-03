import React from 'react';
import Nav from './component/nav/Nav';
import MainVid from './component/mainVid/MainVid';
import MainVidInfo from './component/mainVidInfo/MainVidInfo';
import FormComments from './component/formComments/FormComments';
import Comment from './component/comments/Comment';
import Recommendations from './component/recommendation/Recommendation';
import {sideVideo, mainVideo} from './data.js';


class App extends React.Component {
  // JS class world, can't use declarations
  state = {
    mainVidInfo: mainVideo,
    sideVidInfo: sideVideo
  }
  
  sideVidFilter = () => {
    let filtered = this.state.sideVidInfo.filter(i => i.id !== this.state.mainVidInfo.id);
    return filtered
  }

  render() {
    //normal JS world
    return (
      // JSX world
      <>
        <Nav />
        <MainVid mainVidPass={this.state.mainVidInfo} />
        {/* information needs to be passed from the data.js */}
        <main>
            <div>
                <MainVidInfo mainVidPass={this.state.mainVidInfo} />
                {/* {console.log({...this.state.mainVideoInfo})} */}
                <FormComments />
                <Comment mainVidPassComments={this.state.mainVidInfo.comments}/>
            </div>
            <Recommendations sideVidPass={this.sideVidFilter()} />
        </main>
      </>
    );
  }
}

export default App;
