import React from 'react';
import './recommendation.scss';
import { Link } from 'react-router-dom';


export default class Recommendations extends React.Component {

  render() {

    let screenChecker = () => {
      let w = window.screen.width
      return w
    }
    let screenWidth = screenChecker()
    // storing the check in a variable so it doesn't keep looping 

    return (
      <section className="recommend">
        <h2 className="recommend__title">Next video</h2>
        <div className="recommend__width-container">
          {this.props.sideVidPass.map(info => {
            const { id, title, image, channel } = info;

            let titleTrim = (info) => {
              // if screen size is < 768, shorten the title to 35 spaces, otherwise return full title
              // if user drags the screen size on the inspector, it does not reload, therefore it still shows as truncated
              if (screenWidth < 768) {
                let x = info.substring(0, 35);
                return x + '...'
              } else {
                return info
              }
            }

            return (
              <div className="recommend__card" key={id + title}>
                <Link to={`/${id}`} onClick={this.props.videoIdGrab}>
                  <img className="recommend__vid" src={image} alt="video preview" id={id} />
                </Link>
                {/* attached id, which is shared with <p>. Value won't work. When clicked, send id */}
                <div className="recommend__box">
                  <Link to={`/${id}`} onClick={this.props.videoIdGrab}>
                    <p className="recommend__box-title" id={id} >{titleTrim(title)}</p>
                  </Link>
                  <p className="recommend__box-author">{channel}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )

  }
}
