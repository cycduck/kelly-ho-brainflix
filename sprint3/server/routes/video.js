const express = require('express');
const app = express();
const router = express.Router();
const endpt = require('../endpt/endpt');

// PATH /videos
router.get('/videos', endpt.sideVidSupply)

// PATH /videos/:vidId
router.get('/videos/:vidId', endpt.mainVidSupply);

// PATH /upload
router.post('/upload', endpt.videoReceive);

// move to /videos/1am3jruuwagz/comments
router.post('/videos/:vidId/comments', endpt.commentReceive);

// PATH /videos/:vidId/comments/:commentId
router.delete('/videos/:vidId/comments/:commentId', endpt.commentDelete);

module.exports = router;