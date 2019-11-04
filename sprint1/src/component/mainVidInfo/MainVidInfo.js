import React from 'react';
import './mainVidInfo.scss';
import view from '../../assets/Icons/SVG/views.svg';
import like from '../../assets/Icons/SVG/likes.svg';


export default class MainVidInfo extends React.Component {
    
    render() {
        const { title, description, channel, image, views, likes, duration, video, timestamp, comments } = this.props.mainVidPass;
        // destructure: info is now this.props.mainVidPass

        let commentNum = () => comments.length;
        // Renders the comment-count: finds out the number of comments in the object 


        return (
            
            <section className="info">
                <h1 className="info__title">{title}</h1>
                <div className="info__box">
                    <div className="info__box--channel">
                        <p className="info__channel">{channel}</p>
                        <p className="info__date">{timestamp}</p>
                    </div>
                    <div className="info__box--stats">
                        <img className="info__views" src={view} alt="views"/>
                        <p className="info__view-text">{views}</p>
                        <img className="info__like" src={like} alt="likes"/>
                        <p className="info__like-text">{likes}</p>
                    </div>
                </div>
                <p className="info__desc">
                    {description}
                </p>
                <h2 className="info__comment-count">{commentNum()} Comments</h2>
            </section>
    )
    }
}