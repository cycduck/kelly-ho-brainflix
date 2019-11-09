import React from 'react';
import MainVid from './mainVid/MainVid';
import MainVidInfo from './mainVidInfo/MainVidInfo';
import FormComments from './formComments/FormComments';
import Comment from './comments/Comment';
import Recommendations from './recommendation/Recommendation';
import {sideVideo, mainVideo} from '../../data.js';
import Axios from 'axios';


// TODO: fix the nav bar so that logo returns to main page

const url ="https://project-2-api.herokuapp.com";
const key = "?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638";
const vidURL = `${url}/videos${key}`;

// https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638



export default class Main extends React.Component {
  // JS class world, can't use declarations
  state = {
    mainVidInfo: mainVideo,
    sideVidInfo: sideVideo
  }
  
  sideVidFilter = () => {
    let filtered = this.state.sideVidInfo.filter(i => i.id !== this.state.mainVidInfo.id);
    return filtered
  }

  
  sideVidFilter = () => {
    let filtered = this.state.sideVidInfo.filter(i => i.id !== this.state.mainVidInfo.id);
    return filtered
  }
  // console.log does not work here 
  render() {
    console.log(this.props)
    

    // declarations OK 

    return (
      
      //normal JS world

      <>
      {/* JSX world */}
        <MainVid mainVidPass={this.state.mainVidInfo} />
        {/* information needs to be passed from the state drew from axios */}
        <main>
            <div className="main__width-container">
              <div>
                  <MainVidInfo {...this.state.mainVidInfo} />
                  <FormComments />
                  <Comment mainVidPassComments={this.state.mainVidInfo.comments}/>
              </div>
              <Recommendations sideVidPass={this.sideVidFilter()} />
            </div>
        </main>
      </>
    );
  }
}
