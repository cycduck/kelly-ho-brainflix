import React from 'react';
import './recommendation.scss';


export default class Recommendations extends React.Component {
    

    render() {
        console.log(this.props.sideVidPass)
        
        let screenChecker = () => {
            let w = window.screen.width
            return w
        }
        let screenWidth = screenChecker()
        return (
            <section className="recommend">
                <h2 className="recommend__title">Next video</h2>
              { this.props.sideVidPass.map(info => {
                    const {id, title, image, channel} = info;
                    
                    let titleTrim = (info) => {
                        // if screen size is < 768, shorten the title to 35 spaces, otherwise return full title
                        // if user drags the screen size on the inspector, it does not reload, therefore it still shows as truncated
                        if (screenWidth < 768) {
                            let x = info.substring(0, 35);
                            return x+'...'
                        } else {
                            return info
                        }
                    }  
                    
                    return(
                        <div className="recommend__card" key={id+title}>
                            <img className="recommend__vid" src={image} alt="video preview"/>
                            <div className="recommend__box">
                                <p className="recommend__box-title">{titleTrim(title)}</p>
                                <p className="recommend__box-author">{channel}</p>
                            </div>
                        </div>
                    )
              })}
          </section>
        )

    }
}
