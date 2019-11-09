import React from 'react';
import MainVid from './mainVid/MainVid';
import MainVidInfo from './mainVidInfo/MainVidInfo';
import FormComments from './formComments/FormComments';
import Comment from './comments/Comment';
import Recommendations from './recommendation/Recommendation';
import {sideVideo, mainVideo} from '../../data.js';
import Axios from 'axios';


// TODO: fix the nav bar so that logo returns to main page


const baseURL ="https://project-2-api.herokuapp.com/videos";
const key = "?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638";
const vidURL = `${baseURL}${key}`;

export default class Main extends React.Component {
  // JS class world, functions only, can't use declarations 
  
  // https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638
  
  state = {
    mainVidInfo: mainVideo,
    sideVidInfo: sideVideo
  }
  
// https://scotch.io/tutorials/asynchronous-javascript-using-async-await
// https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
// https://medium.com/front-end-weekly/async-await-with-react-lifecycle-methods-802e7760d802
  sidevidRetrival = async () => {
    try {
      const response = await Axios.get(vidURL)
      const { data } = response;
      this.setState({ 
        sideVidInfo: data
      })
    } catch (error) {
      console.log(error)
    }
  }
  mainVidRetrival = async (url) => {
      const response = await Axios.get(url)
      const { data } = response;
      this.setState({
        mainVidInfo: data
      })
  }
  
  componentDidMount() {
    this.sidevidRetrival()
    // this.mainVidRetrival()
  }
  
  videoIdGrab = (e) => {
    let mainURL = `${baseURL}/${e.target.id}${key}`
    this.mainVidRetrival(mainURL)
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
              <Recommendations sideVidPass={this.sideVidFilter()} videoIdGrab={this.videoIdGrab}/>
            </div>
        </main>
      </>
    );
  }
}
