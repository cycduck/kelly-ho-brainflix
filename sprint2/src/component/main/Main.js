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
  
  sideVidFilter = () => {
    let filtered = this.state.sideVidInfo.filter(i => i.id !== this.state.mainVidInfo.id);
    return filtered
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

  videoIdGrab = (e) => {
    // grabs the ID from recommendations page
    console.log('e target', e.target.id)
    let mainURL = `${baseURL}/${e.target.id}${key}`
    console.log('Problem the match params is one off, onClick is doing something', this.props.match.params.vidID)
    this.componentDidUpdate(mainURL)
    // this.mainVidRetrival(mainURL)
    this.componentDidMount()
    // generates the url and send to the func as a parameter
  }
  
  mainVidRetrival = async (url) => {
      const response = await Axios.get(url)
      const { data } = response;
      console.log(response)
      this.setState({
        mainVidInfo: data
      })
  }
  
  componentDidMount() {
    this.sidevidRetrival()
    // this.mainVidRetrival()
  }
  
  componentDidUpdate(url) {
    console.log("match params after component ", this.props.match.params.vidID)
    this.mainVidRetrival(url)
  }
  
  
  
  // console.log does not work here 
  render() {
      // console.log('what is props in main', this.props)
    
    // declarations OK 

    return (
      
      //normal JS world

      <>
      {/* JSX world */}
      
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
