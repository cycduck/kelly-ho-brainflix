import React from 'react';
import './mainVid.scss';
import play from '../../../assets/Icons/SVG/play.svg';
// import pause from '../../../assets/Icons/SVG/pause.svg';
// import scrub from '../../../assets/Icons/SVG/scrubber-control.svg';
// ^^^ the above are setups to be used later ^^^
import zoom from '../../../assets/Icons/SVG/fullscreen.svg';
import volume from '../../../assets/Icons/SVG/volume.svg';

     

export default class MainVid extends React.Component {
    render() {
        return (
            
            <section className="vid">
                <div className="vid__video">
                    <video className="vid__video-src" poster={this.props.mainVidPass.image}>
                        <source className="vid__video-source" src="#"
                                type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className="vid__ctrl">
                        <div className="vid__play"><img src={play} alt="play" /></div>
                        <div className="vid__bar" data-label="00:00/00:00">
    
                        </div>
                        <div className="vid__zoom-vol">
                            <img src={zoom} alt="full screen" />
                            <img src={volume} alt="volume" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}