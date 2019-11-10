import React from 'react';
import MainVid from './mainVid/MainVid';
import MainVidInfo from './mainVidInfo/MainVidInfo';
import FormComments from './formComments/FormComments';
import Comment from './comments/Comment';
import Recommendations from './recommendation/Recommendation';
import Axios from 'axios';


const baseURL ="https://project-2-api.herokuapp.com/videos";
const key = "?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638";
const vidURL = `${baseURL}${key}`;

export default class Main extends React.Component {
  // JS class world, functions only, can't use declarations 
    
  state = {
    mainVidInfo: null,
    sideVidInfo: null
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
      
      const i = Math.floor(Math.random() * Math.floor(data.length))
      // randomly generating the front page YO 🤘
      this.mainVidRetrival(data[i].id, data)
    } catch (error) {
      console.log(error)
    }
  }
  
  mainVidRetrival = async (id, sideVideoData) => {
      const response = await Axios.get(`${baseURL}/${id}${key}`)
      const { data } = response;
      this.setState({
        mainVidInfo: data,
        sideVidInfo: sideVideoData
      })
  }
  
  componentDidMount() {
    this.sidevidRetrival()
  }
  
  componentDidUpdate() {
    // if the new ID gets triggered after click isn't the same as the state's ID, then update via setState
    if (this.props.match.params.vidID !== this.state.mainVidInfo.id ) {
      let id = this.props.match.params.vidID
      this.mainVidRetrival(id, this.state.sideVidInfo)
    }
  }
  
  
  
  // console.log does not work here 
  render() {
    // declarations OK 

    // if this.state is not null then turn

    if (this.state.mainVidInfo && this.state.sideVidInfo) {
      return (
        //normal JS world
  
        <>
        {/* JSX world */}
        
          {/* information needs to be passed from the state drew from axios */}
          <main>
              <MainVid {...this.state.mainVidInfo}/>
              <div className="main__width-container">
                <div className="main__flex-container">
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
    return <> </>
  }
}