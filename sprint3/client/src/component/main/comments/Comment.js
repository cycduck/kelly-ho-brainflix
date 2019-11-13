import React from 'react';
import './comments.scss';

export default class Comment extends React.Component {
  render() {
    console.log(this.props.mainVidPassComments)
    console.log(this.props.mainVidPassComments.comments)
    return (
      <section className="comment">
        {this.props.mainVidPassComments.comments.map((info, i) => {
          const { name, date, comment, id } = info
          // for every item in mainVidPassComments as a prop
          // grab the destructured 
          return (
            // generate a div and apply them below
            <div className="comment__card" key={id+i}>
              <figure className="comment__avatar"></figure>
              <div className="comment__box">
                <div className="comment__box-name-date">
                  <p className="comment__box-name">{name}</p>
                  <p className="comment__box-date">{date}</p>
                </div>
                <p className="comment__comment">{comment}</p>
                <button className="comment__delete" value={id} name={this.props.mainVidPassComments.id} onClick={this.props.delete}>delete</button>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}