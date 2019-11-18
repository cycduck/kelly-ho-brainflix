import React from 'react';
import coolBike from '../../assets/Images/coolbike.jpg';
import './upload.scss';
import axios from 'axios';


export default class Upload extends React.Component {

  uploadVid = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/upload', {
      // the variable cannot be the same as the data array!
      title: e.target.vidTitle.value,
      // inside the request body, there's a title property 32:08
      channel: "Chuck Norris",
      description: e.target.videoDesc.value,
      duration: "00:00",
      video: 'https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_540/MTI4OTk1Mjc0MzI3NzMwODE5/1.webp',
    }).catch(err => {
      alert(err)
    })
  }
  render() {

    return (
      <>
        <main className="upload">
          <section className="upload__section">
              <h1 className="upload__title">Upload Video</h1>
                <form className="upload__form" onSubmit={this.uploadVid}>
                  <div className="upload__info">
                    <div className="upload__preview">
                      <h2 className="upload__video-title">Video Thumbnail</h2>
                      <figure className="upload__figure">
                        <img className="upload__img" src={coolBike} alt="upload preview" />
                      </figure>
                    </div>
                    <div className ="upload__input">
                      <label className="upload__title-label" htmlFor="vidTitle">Title your video</label>
                      <input className="upload__name" type="text" name="vidTitle" placeholder="Add a title of your video" required />
                      <label className="upload__desc-label" htmlFor="videoDesc">Add a video description</label>
                      <textarea className="upload__desc" name="videoDesc" placeholder="Add a description of your video" required />
                    </div>
                  </div>
                  <div className="upload__buttons">
                    <div className="upload__buttons-flex">
                      <button className="upload__publish">Publish</button>
                      <button className="upload__cancel">Cancel</button>
                    </div>
                  </div>
                </form>
          </section>
        </main>
      </>
    )
  }
}