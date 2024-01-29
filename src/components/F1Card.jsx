import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

function F1Card(props) {
  function handleInfo() {
    const info = document.getElementById("info-collapse")
    info.style.display = "none";
  }
  
  return (
    <>
        <div className="f1-card d-flex p-2 gap-3 rounded-3 mb-lg-3 mb-2 col-lg-5 me-3" style={{backgroundColor: props.teamColor}}>
            <div className="image-container d-flex align-items-center bg-white rounded-2">
              <img className="team-image rounded-2 w-100" src={props.teamImage} />
            </div>
            <div className="text-container">
              <div id='info-collapse'>
                <h2><b>{props.teamName}</b></h2>
                <h4>February {props.revealDate}</h4>
                <h5>{props.timeLeft} days left</h5>
              </div>
              {/* <div className='text-info-collapse d-flex gap-3'>
                <h>WC: <b>{props.wc}</b></h>
                <p>PP: <b>{props.pp}</b></p>
                <p>FL: <b>{props.fl}</b></p>
                <p>HRF: <b>{props.hrf}</b></p>
              </div>
              <div>
                <h6>First Team Entry: <b>{props.fte}</b></h6>
              </div> */}
            </div>
            {/* <div className="info-container d-flex align-items-center flex-fill justify-content-end pe-5">
              <FontAwesomeIcon className='info-icon' icon={faExclamation} onClick={handleInfo}/>
            </div> */}
        </div>
    </>
  )
}

export default F1Card