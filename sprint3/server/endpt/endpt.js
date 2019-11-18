const express = require('express');
const uuidv4 = require('uuid/v4'); // for comments
const nanoid = require('nanoid'); // for vids
const data = require('../data');

// PATH: /videos/:vidId
const mainVidSupply = (request, response) => {
  // parameters are defined by :, the more you define, the more value in the params array, see 21:47
  console.log('ID of the video requested through mainVid', request.params);
  // search through the mainVid and return the object with the matching ID of the link ID
  let mainVidInfo = mainVid.find(info => info.id === request.params.vidId);
  // if there's none send a 404 status 28:50
  if (!mainVidInfo) response.status(404).send('The video with the ID was not found.');
  response.status(200).send(mainVidInfo);
}

// PATH: /videos
const sideVidSupply = (request, response) => {
  console.log('sideVideos have been requested through sideVid')
    
    let sideVideos = mainVid.map(info => {
      return({
        id: info.id,
        title: info.title,
        channel: info.channel,
        image: info.image
      })
    })
    response.status(200).send(sideVideos)
}

// PATH: /upload
const videoReceive = (request, response) => {
  // In upload page, you can upload a video

  console.log('a video is being uploaded')
  const time = new Date()
  const submission = {
    // the variable cannot be the same as the data array!
    id: nanoid(13),
    title: request.body.title,
    // inside the request body, there's a title property 32:08
    channel: request.body.channel,
    description: request.body.description,
    views: "infinite", // it's chuck norris
    likes: "infinite",
    duration: request.body.duration,
    video: request.body.video,
    timestamp: time.getTime(),
    comments: []
  };
  console.log('submission received ', submission);
  mainVid.push(submission); 
  console.log(mainVid)
  // https://synapse.brainstation.io/web-development-full-time/student-content/24e94b80-734a-5ad3-a091-ba0e9213ce23
  response.status(200).send(mainVid);
  // add 37:01 input validation https://www.npmjs.com/package/validate
}

// PATH /videos/:vidId/comments
const commentReceive = (request, response) => {
  console.log(request.params) // { vidId: '1af0jruup5gu' }
  const time = new Date()
  const submission = {
    name: request.body.name,
    comment: request.body.comment,
    id: uuidv4(),
    likes: 0,
    timestamp: time.getTime()
  }
  // console.log(submission)
  let test = mainVid.find(info => info.id === request.params.vidId)
  test.comments.push(submission)
  response.status(200).send(test);
}

// PATH /videos/:vidId/comments/:commentId
let commentDelete = (request, response) => {
  console.log('ID of the video requested through delete', request.params)
  // returns { vidId: '1af0jruup5gu', commentid: '993f950f-df99-48e7-bd1e-d95003cc98f1' }

  mainVid.find(video => {
    if(video.id === request.params.vidId) {
      commentIdx = video.comments.findIndex(comment => comment.id === request.params.commentId)
      console.log('if not found the index will be -1', commentIdx)
      // if ID is not found then 404 it
      if (commentIdx === -1){
        response.status(404).send('comment with the ID is unavailable')
      } else {
        video.comments.splice(commentIdx, 1)
        response.status(200).send('comment successfully deleted')
      }
      console.log('remainder of deletion ', video.comments)
    } 
  })
}
// https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments/1ab6d9f6-da38-456e-9b09-ab0acd9ce818

module.exports = {
  mainVidSupply,
  sideVidSupply,
  videoReceive,
  commentReceive,
  commentDelete
}