import React from 'react';
import './formComment.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

export default class FormComments extends React.Component {
    render() {
        return (
            <section className="formComment">
                  {/* https://reactjs.org/docs/dom-elements.html */}
                  <div className="formComment__box">
                    <figure className="formComment__face">
                        <img className="formComment__avatar" src={avatar} alt="Avatar" />
                    </figure>
                    <form className="formComment__form" action="#">
                        <label className="formComment__comment-label" htmlFor="comments">Join the conversation</label>

                        <textarea className="formComment__comment" name="commentBox" placeholder="Write comment here" required></textarea>
                        <button className="formComment__submit" type="submit">comment</button>
                    </form>
                </div>
              </section>
        )
    }
}