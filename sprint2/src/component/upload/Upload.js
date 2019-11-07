import React from 'react';
import coolBike from '../../assets/Images/coolbike.jpg';
import './upload.scss';

export default class Upload extends React.Component {

    render() {

        return (
            <>
                <main>
                    <section className="upload">
                        <div className="upload__container">
                            <h1 className="upload__title">Upload Video</h1>
                            <div className="upload__box">
                                <div className="upload__video-box">
                                    <h2 className="upload__video-title">Video Thumbnail</h2>
                                    <figure className="upload__figure">
                                        <img className="upload__img"src={coolBike}/>
                                    </figure>
                                </div>
                                <form className="upload__form">
                                    <label className="upload__title-label" for="vidTitle">Title your video</label>
                                    <input className="upload__name" type="text" name="vidTitle" placeholder="Add a title of your video" required/>
                                    <label className="upload__desc-label" for="videoDesc">Add a video description</label>
                                    <textarea className="upload__desc" name="videoDesc" placeholder="Add a description of your video" required/>
                                    <div className="upload__border">
                                        <div className="upload__border-box">
                                            <button className="upload__publish">Publish</button>
                                            <button className="upload__cancel">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}