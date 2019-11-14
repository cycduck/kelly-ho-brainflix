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
      
      // const i = Math.floor(Math.random() * Math.floor(data.length))
      // // Randomly generating a video on the home page
      this.mainVidRetrival(data[0].id, data)
    } catch (error) {
      alert("Information cannot be loaded, please try again")
    }
  }
  
  mainVidRetrival = async (id, sideVideoData) => {
    try {
      const response = await Axios.get(`${baseURL}/${id}${key}`)
      // TODO: i have all the videos and I dont need to get it again this needs to be a function
      const { data } = response;
      this.setState({
        mainVidInfo: data,
        sideVidInfo: sideVideoData
      })
    } catch (error) {
      console.log(error)
    }
  }

  // deep dive
  postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(`${baseURL}/${e.target.name}/comments${key}`, {
        //https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638
        "name": "testSubject",
        "comment": e.target.commentBox.value
      });
      this.sidevidRetrival();
    } catch (error) {
      console.log(error);
    }
  }

  deleteComment = async (e) => {
    e.preventDefault();
      try {
        // console.log(vidId, commentId)
        const response = await Axios.delete(`${baseURL}/${e.target.name}/comments/${e.target.value}${key}`);
        this.sidevidRetrival();
      } catch (error) {
        alert(error);
      }
  }

  
  componentDidMount() {
    this.sidevidRetrival()
  }
  
  componentDidUpdate() {
    // if the new ID gets triggered after click isn't the same as the state's ID, then update via setState
    let id = this.props.match.params.vidID
    if (id !== this.state.mainVidInfo.id ) {
      console.log(id, this.state.mainVidInfo.id)
        // if (id === undefined && id !== this.state.mainVidInfo.id) {
        //   console.log('so the issue is that it keeps generating undefined which satisfied both cases', id === undefined)
        //   this.mainVidRetrival('1af0jruup5gu', this.state.sideVidInfo)
        // } else {
          this.mainVidRetrival(id, this.state.sideVidInfo)
        // }
        
      
    }
  }
  
  // console.log does not work here 
  render() {
    // declarations OK 

    // if this.state is not null then render else render empty
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
                    {/* {console.log(this.state.mainVidInfo)} */}
                    <FormComments mainVidPass={this.state.mainVidInfo}postComment={this.postComment} />
                    <Comment mainVidPassComments={this.state.mainVidInfo} delete={this.deleteComment}/>
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
