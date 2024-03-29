import React from 'react';
import MainVid from './mainVid/MainVid';
import MainVidInfo from './mainVidInfo/MainVidInfo';
import FormComments from './formComments/FormComments';
import Comment from './comments/Comment';
import Recommendations from './recommendation/Recommendation';
import axios from 'axios';


// const baseURL ="https://project-2-api.herokuapp.com/videos";
const key = "?api_key=add3816a-9a16-42e2-8a1c-a9c9c9400638";
// const vidURL = `${baseURL}${key}`;
const baseURL ="http://localhost:8080/videos";


export default class Main extends React.Component {
  // JS class world, functions only, can't use declarations 
    
  state = {
    mainVidInfo: null,
    sideVidInfo: null
  }
  
  sideVidFilter = () => {
    if (this.state.mainVidInfo) {
      let filtered = this.state.sideVidInfo.filter(i => i.id !== this.state.mainVidInfo.id);
      return filtered;
    } else {
      return this.state.sideVidInfo;
    }
  }

  // https://scotch.io/tutorials/asynchronous-javascript-using-async-await
  // https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
  // https://medium.com/front-end-weekly/async-await-with-react-lifecycle-methods-802e7760d802
  sidevidRetrival = async () => {
    try {
      const response = await axios.get(baseURL)
      const { data } = response;

      this.setState({
        sideVidInfo: data
      })
      // const i = Math.floor(Math.random() * Math.floor(data.length))
      // // Randomly generating a video on the home page
    } catch (error) {
      console.error("Information cannot be loaded, please try again")
    }
  }
  
  mainVidRetrival = async (id) => {

    if (!!id) {
      try {
        const response = await axios.get(`${baseURL}/${id}`)
        const { data } = response;
        this.setState({
          mainVidInfo: data,
        })
        // 'Is the ID null after setState?', id
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('the id is undefined.');
    }
  }

  // deep dive
  postComment = async (e) => {
    e.preventDefault();
    const vidId = e.target.name 
    // bypassing the "synthetic event is reused for performance reason" by storing the value to a variable, see delete for method 2
    // https://medium.com/front-end-weekly/async-await-with-react-lifecycle-methods-802e7760d802
    try {
      const response = await axios.post(`${baseURL}/${vidId}/comments`, {
        "name": "Chuck Norris",
        "comment": e.target.commentBox.value
      });
      this.mainVidRetrival(vidId);
    } catch (error) {
      console.log(error);
    }
  }

  deleteComment = async (e) => {
    e.preventDefault();
    e.persist();
    try {
      const response = await axios.delete(`${baseURL}/${e.target.name}/comments/${e.target.value}`);
      this.mainVidRetrival(e.target.name);
    } catch (error) {
      alert(error);
    }
  }

  
  componentDidMount() {
    this.sidevidRetrival();
  }
  
  componentDidUpdate() {
    

    // Credit goes to Yash
    // K: Does the mainVidInfo State exists? if not, assign mainVidId with the ID, otherwise give it null
    // K: IF1: when it first loads, it will be null
    // K: IF2: when nxt vid clicked, it will be bikers vid (previous state) aka 1af
    let mainVidId = this.state.mainVidInfo ? this.state.mainVidInfo.id : null;
    // K: Does the sideVidInfo state exist and that it has something inside the array? If not, assign the first id to firstVidId
    // K: IF1: when it first loads, sideVidRetrieve is triggered, so firstVidId = [0].id
    // K: IF2: when nxt vid clicked, sideVidRetrieve is triggered, so firstVidId = [0].id
    let firstVidId = this.state.sideVidInfo && this.state.sideVidInfo.length ? this.state.sideVidInfo[0].id : null;
    // K: Is the link undefine/exists? If not, assign idToRetrieveVidFor to firstVidId 
    // K: IF1: when it first loads, it will have nothing, and firstVid = [0].id
    // K: IF2: when nxt vid clicked, it exists, and firstVid = nxt vid clicked
    let idToRetrieveVidFor = this.props.match.params.vidID ? this.props.match.params.vidID : firstVidId;

    // K: IF1: when it first loads, id[0] !== null, this.mainVidRetrival(id[0])
    // K: IF2: when nxt vid clicked, nxt vid clicked id != 1af, this.mainVidRetrival(nxt vid clicked id)
    if (idToRetrieveVidFor !== mainVidId) {
      this.mainVidRetrival(idToRetrieveVidFor);
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
