import React from 'react';
import MainVid from './mainVid/MainVid';
import MainVidInfo from './mainVidInfo/MainVidInfo';
import FormComments from './formComments/FormComments';
import Comment from './comments/Comment';
import Recommendations from './recommendation/Recommendation';
import Axios from 'axios';


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
      const response = await Axios.get(baseURL)
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
    console.log('Is the ID null before setState', id) //???
    // issue it got the id and the revert back to undefined? in the second call, why is it calling twice?

    if (!!id) {
      try {
        const response = await Axios.get(`${baseURL}/${id}`)
        const { data } = response;
        this.setState({
          mainVidInfo: data,
        })
        console.log('Is the ID null after setState', id)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.error('the id is undefined.');
    }
  }

  // deep dive
  postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(`${baseURL}/${e.target.name}/comments`, {
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
        const response = await Axios.delete(`${baseURL}/${e.target.name}/comments/${e.target.value}`);
        this.sidevidRetrival();
      } catch (error) {
        alert(error);
      }
  }

  
  componentDidMount() {
    this.sidevidRetrival();
  }
  
  componentDidUpdate() {
    // if the new ID gets triggered after click isn't the same as the state's ID, then update via setState
    // let paramId = this.props.match.params.vidID;
    // let mainVidId = this.state.mainVidInfo ? this.state.mainVidInfo.id : null;
    // console.log('there is no id at root', this.props.match)
    
    // console.log(paramId, mainVidId);
    // // if NOT undefined, and the ID isn't already the main video's id
    // if (!!paramId && paramId !== mainVidId) {
    //   // get the details for THAT video and make sure, it hasn't been fetched already
    //   this.mainVidRetrival(paramId);
    // } else if (!paramId) {
    //   // if the param ID IS undefined
    //   // make sure that the mainVideo's id we have isn't the first video
    //   // if so, get the first video's id and get the details for it
    //   let firstVidId = this.state.sideVidInfo && this.state.sideVidInfo.length ? this.state.sideVidInfo[0].id : null;

    //   // the first video ID isn't already the main video's id
    //   if (firstVidId !== mainVidId) {
    //     this.mainVidRetrival(firstVidId);
    //   }
    // }

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
