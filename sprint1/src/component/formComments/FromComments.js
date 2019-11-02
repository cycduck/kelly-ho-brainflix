import React from 'react';
import './formComment.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

export default class FormComments extends React.Component {
    render() {
        return (
            <section className="formComment">
                  {/* https://reactjs.org/docs/dom-elements.html */}
                  <div class="formComment__box">
                    <figure class="formComment__face">
                        <img class="formComment__avatar" src={avatar} alt="Avatar" />
                    </figure>
                    <form class="formComment__form" action="#">
                        <label class="formComment__comment-label" htmlFor="comments">Join the conversation</label>

                        <textarea class="formComment__comment" name="commentBox" placeholder="Write comment here" required></textarea>
                        <button class="formComment__submit" type="submit">comment</button>
                    </form>
                </div>
              </section>
        )
    }
}