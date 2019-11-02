import React from 'react';
import './mainVidInfo.scss';
import view from '../../assets/Icons/SVG/views.svg';
import like from '../../assets/Icons/SVG/likes.svg';

export default class MainVidInfo extends React.Component {
    render() {
        return (
            <section className="info">
                <h1 className="info__title">title of the video</h1>
                <div className="info__box">
                    <p className="info__channel">by author</p>
                    <p className="info__date">date</p>
                </div>
                <div className="info__stats-box">
                    <img className="info__views" src={view} alt="views"/>
                    <p className="info__view-text">views</p>
                    <img className="info__like" src={like} alt="likes"/>
                    <p className="info__like-text">likes</p>
                </div>
                <p className="info__desc">
                    video description
                </p>
                <h2 className="info__comment-count">3 comments</h2>
            </section>
    )
    }
}