const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');
const data = require('./data');
// const uuidv4 = require('uuid/v4');
const videoRoute = require('./routes/video');
  
app.listen(8080, ()=> {
  console.log('if you see this message, it is working')
})

// has express.json atm
app.use('/', middleware);

// routes
app.use('/', videoRoute);
 

// app.post('/comments', (request, response) => {
//   // In upload page, you can upload a video
//   console.log('a video is being uploaded')
//   const time = new Date()
//   const submission = {
//     // the variable cannot be the same as the data array!
//     id: uuidv4(),
//     title: request.body.title,
//     // inside the request body, there's a title property 32:08
//     channel: "Chuck Norris",
//     description: request.body.description,
//     views: "infinite",
//     likes: "infinite",
//     duration: "00:00",
//     video: 'https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_540/MTI4OTk1Mjc0MzI3NzMwODE5/1.webp',
//     timestamp: time.getTime(),
//     comments: [
//       // {
//       //   name: "Micheal Lyons",
//       //   comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
//       //   id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
//       //   likes: 0,
//       //   timestamp: 1545162149000
//       // }
//     ]
//   };
//   console.log('submitting');
//   mainVid.push(submission); // ??? the changes do not edit the data.js after closing server 
//   // https://synapse.brainstation.io/web-development-full-time/student-content/24e94b80-734a-5ad3-a091-ba0e9213ce23
//   response.send(mainVid);
//   // add 37:01 the 400 bad request
// })










// 54:00 https://www.youtube.com/watch?v=pKd0Rpw7O48
// app.delete('/videos/:vidId/comments/:commentId', (request, response) => {
//   console.log('ID of the video requested', request.params)
//   // returns { id: '1af0jruup5gu', commentid: '993f950f-df99-48e7-bd1e-d95003cc98f1' }
//   let commentDelete = mainVid.find(video => {
//     console.log(video.id === request.params.vidId)
//     if(video.id === request.params.vidId) {
//       let x = video.comments.find(comment => comment.id === request.params.commentId)
//       return x
//     }
//   })
//   console.log('what is commment delete',commentDelete)
//   response.send('comment deleted')
// })

// https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments/1ab6d9f6-da38-456e-9b09-ab0acd9ce818