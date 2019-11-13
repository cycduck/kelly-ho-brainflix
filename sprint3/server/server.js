const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');
const mainVidData = require('./data')


  
app.listen(8080, ()=> {
  console.log('if you see this message, it is working')
})

app.use('/', middleware);
// has express.json atm


const mainVidSupply = (request, response) => {
  // parameters are defined by :, the more you define, the more value in the params array, see 21:47
  console.log('ID of the video requested', request.params);
  // search through the mainVid and return the object with the matching ID of the link ID
  let mainVidInfo = mainVid.find(info => info.id === request.params.vidId);
  // if there's none send a 404 status 28:50
  if (!mainVidInfo) response.status(404).send('The video with the ID was not found.');
  response.send(mainVidInfo);
}
app.get('/videos/:vidId', mainVidSupply)

app.post('/test', (request, response) => {
  console.log('a video is being uploaded')
  const time = new Date()
  const submission = {
    // the variable cannot be the same as the data array!
    id: 1,
    title: request.body.title,
    // inside the request body, there's a title property 32:08
    channel: "Chuck Norris",
    image: 'https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_540/MTI4OTk1Mjc0MzI3NzMwODE5/1.webp',
    timestamp: time.getTime()
  };
  console.log('submitting');
  mainVid.push(submission);
  response.send(mainVid);
  // add 37:01 the 400 bad request
})










// 54:00 https://www.youtube.com/watch?v=pKd0Rpw7O48
app.delete('/videos/:vidId/comments/:commentId', (request, response) => {
  console.log('ID of the video requested', request.params)
  // returns { id: '1af0jruup5gu', commentid: '993f950f-df99-48e7-bd1e-d95003cc98f1' }
  // search in the mainVid and look for just the comment ID ??? do i need another id?
  let commentDelete = mainVid.find(video => {
    // console.log('what is video', video.comments) // PASS
    // console.log(video.id === request.params.vidId, video.id, request.params.vidId) // PASS
    if(video.id === request.params.vidId) {
      let x = video.comments.find(comment => {
        // console.log(comment.id === request.params.commentId, comment.id, request.params.commentId) // PASS
        comment.id == request.params.commentId
      })
      console.log('checking the return of comment id check', x)
      // not sure why it's undefined
    }
  })
  console.log('what is commment delete',commentDelete)
  response.send('comment deleted')
})

// https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments/1ab6d9f6-da38-456e-9b09-ab0acd9ce818