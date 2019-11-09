import React from 'react';
import './comments.scss';

export default class Comment extends React.Component {
    
    render() {
        return (
            <section className="comment">
                {this.props.mainVidPassComments.map((info, i) => {
                    // for every item in mainVidPassComments as a prop
                    const {name, date, comment} = info
                    // grab the destructured 
                    return(
                        // generate a div and apply them below
                        <div className="comment__card" key={i+date}>
                            <figure className="comment__avatar"></figure>
                            <div className="comment__box">
                                <div className="comment__box-name-date">
                                    <p className="comment__box-name">{name}</p>
                                    <p className="comment__box-date">{date}</p>
                                </div>
                                <p className="comment__comment">{comment}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
}