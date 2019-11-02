import React from 'react';
import './recommendation.scss';

// replace later 
import vidImg0 from '../../assets/Images/video0.jpg'

export default class Recommendations extends React.Component {
    render() {
        console.log(this.props.sideVidPass)
        return (
            <section className="recommend">
              <h2 className="recommend__title">Next video</h2>
              <div className="recommend__card">
                  <img className="recommend__vid" src={vidImg0} alt="video preview"/>
                  <div className="recommend__box">
                      <p className="recommend__box-title">{this.props.sideVidPass[1].title}</p>
                      <p className="recommend__box-author">{this.props.sideVidPass[1].channel}</p>
                  </div>
              </div>
          </section>
        )

    }
}
