import React from 'react';
import coolBike from '../../assets/Images/coolbike.jpg';
import './upload.scss';

export default class Upload extends React.Component {

  render() {

    return (
      <>
        <main className="upload">
          <section className="upload__section">
              <h1 className="upload__title">Upload Video</h1>
                <form className="upload__form">
                  <div className="upload__info">
                    <div className="upload__preview">
                      <h2 className="upload__video-title">Video Thumbnail</h2>
                      <figure className="upload__figure">
                        <img className="upload__img" src={coolBike} alt="upload preview" />
                      </figure>
                    </div>
                    <div className ="upload__input">
                      <label className="upload__title-label" htmlfor="vidTitle">Title your video</label>
                      <input className="upload__name" type="text" name="vidTitle" placeholder="Add a title of your video" required />
                      <label className="upload__desc-label" htmlfor="videoDesc">Add a video description</label>
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