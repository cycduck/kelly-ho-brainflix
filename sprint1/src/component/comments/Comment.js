import React from 'react';
import './comments.scss';
import { returnStatement } from '@babel/types';

export default class Comment extends React.Component {
    
    render() {
        return (
            <section className="comment">
                {this.props.mainVidPassComments.map(info => {
                    const {name, date, comment} = info
                    return(
                        <div className="comment__card">
                            <img className="comment__avatar" src="#" alt="avatar"/>
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