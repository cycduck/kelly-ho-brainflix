import React from 'react';
import './comments.scss';

export default class Comment extends React.Component {
    render() {
        return (
            <section className="comment">
                <img className="comment__avatar" src="" alt="avatar"/>
                <div className="comment__box">
                    <div className="comment__box-name-date">
                        <p className="comment__box-name">name</p>
                        <p className="comment__box-date">date</p>
                    </div>
                    <p className="comment__comment">comment</p>
                </div>
            </section>

        )
    }
}