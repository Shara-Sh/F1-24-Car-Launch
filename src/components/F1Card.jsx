import { useState } from "react"
import tinycolor from 'tinycolor2';

function F1Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const darkenColor = (color, percent) => {
    return tinycolor(color).darken(percent).toString();
  };

  const cardStyle = {
    backgroundColor: isHovered ? darkenColor(props.teamColor, 5) : props.teamColor,
    cursor: "pointer",
  };

  function toggleTextVisibility() {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
        <div className="f1-card d-flex p-2 gap-3 rounded-3 mb-3 col-lg-5 me-lg-3" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleTextVisibility}>
            <div className="image-container d-flex align-items-center bg-white rounded-2">
              <img className="team-image rounded-2 w-100" src={props.teamImage} />
            </div>
            {isTextVisible ? 
            (<div className="text-container" id={`text-container${props.index}`}>
              <div id='info-collapse'>
                <h2><b>{props.teamName}</b></h2>
                <h4>February {props.revealDate}</h4>
                <h5>{props.timeLeft} days left</h5>
              </div>
            </div>) : 
              (
              <>
              <div className='text-info-collapse'>
                <p>WC: <b>{props.wc}</b></p>
                <p>PP: <b>{props.pp}</b></p>
                <p>FL: <b>{props.fl}</b></p>
                <p>HRF: <b>{props.hrf}</b></p>
              </div>
              <div>
                <p>First Team Entry: <b>{props.fte}</b></p>
              </div>
              </>
              )
            }
        </div>
    </>
  )
}

export default F1Card