import F1Card from "./components/F1Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Williams from "../src/assets/williams.png";
import Kick from "../src/assets/kick.png";
import Alpine from "../src/assets/alpine.png";
import RB from "../src/assets/RB.png";
import Haas from "../src/assets/haas.png";
import AstonMartin from "../src/assets/aston martin.png";
import Ferrari from "../src/assets/ferrari.png";
import Mercedes from "../src/assets/mercedes.png";
import McLaren from "../src/assets/mclaren.jpg";
import RedBull from "../src/assets/redbull.jpg";

function App() {
  const currentTime = new Date();

  function calcDate(teamTime) {
    const diffTime = Math.abs(currentTime - teamTime);
    const timeLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return timeLeft;
  }

  const wRevealDate = 5;
  const wTimeLeft = calcDate(new Date(`2024-02-0${wRevealDate}`));

  const kRevealDate = 5;
  const kTimeLeft = calcDate(new Date(`2024-02-0${kRevealDate}`));

  const aRevealDate = 7;
  const aTimeLeft = calcDate(new Date(`2024-02-0${aRevealDate}`));

  const rRevealDate = 8;
  const rTimeLeft = calcDate(new Date(`2024-02-0${rRevealDate}`));

  const hRevealDate = 11;
  const hTimeLeft = calcDate(new Date(`2024-02-${hRevealDate}`));

  const amRevealDate = 12;
  const amTimeLeft = calcDate(new Date(`2024-02-${amRevealDate}`));

  const fRevealDate = 13;
  const fTimeLeft = calcDate(new Date(`2024-02-${fRevealDate}`));

  const mRevealDate = 14;
  const mTimeLeft = calcDate(new Date(`2024-02-${mRevealDate}`));

  const mcRevealDate = 14;
  const mcTimeLeft = calcDate(new Date(`2024-02-${mcRevealDate}`));

  const rbRevealDate = 15;
  const rbTimeLeft = calcDate(new Date(`2024-02-${rbRevealDate}`));

  return (
    <>
      <div className="container">
        <h1 className="text-header text-center p-4">
          <span>F1</span> 20<span>24</span> Car Launch
        </h1>
        <div className="row justify-content-md-center container pe-0"></div>
        <div className="container">
          <div className="row justify-content-md-center container pe-0">
            <F1Card
              teamImage={Williams}
              teamColor="#37BEDD"
              teamName="Williams"
              revealDate={wRevealDate}
              timeLeft="-"
              wc={9}
              pp={128}
              fl={133}
              hrf={"1 (x114)"}
              fte={1978}
            />
            <F1Card
              teamImage={Kick}
              teamColor="#52e252"
              teamName="Kick Sauber"
              revealDate={kRevealDate}
              timeLeft="-"
              wc={0}
              pp={1}
              fl={7}
              hrf={"1 (x1)"}
              fte={1993}
            />
            <F1Card
              teamImage={Haas}
              teamColor="#B6BABD"
              teamName="Haas"
              revealDate={hRevealDate}
              timeLeft="-"
              wc={0}
              pp={1}
              fl={2}
              hrf={"4 (x1)"}
              fte={2016}
            />
            <F1Card
              teamImage={McLaren}
              teamColor="#F58020"
              teamName="McLaren"
              revealDate={mcRevealDate}
              timeLeft="-"
              wc={8}
              pp={156}
              fl={165}
              hrf={"1 (x183)"}
              fte={1966}
            />
            <F1Card
              teamImage={Alpine}
              teamColor="#2293D1"
              teamName="Alpine"
              revealDate={aRevealDate}
              timeLeft="-"
              wc={2}
              pp={20}
              fl={15}
              hrf={"1 (x21)"}
              fte={1986}
            />
            <F1Card
              teamImage={RB}
              teamColor="#6692ff"
              teamName="RB"
              revealDate={rRevealDate}
              timeLeft="-"
              wc={0}
              pp={1}
              fl={3}
              hrf={"1 (x2)"}
              fte={1985}
            />
            <F1Card
              teamImage={AstonMartin}
              teamColor="#358C75"
              teamName="Aston Martin"
              revealDate={amRevealDate}
              timeLeft="-"
              wc={0}
              pp={1}
              fl={1}
              hrf={"1 (x1)"}
              fte={2018}
            />
            <F1Card
              teamImage={Ferrari}
              teamColor="#F91536"
              teamName="Ferrari"
              revealDate={fRevealDate}
              timeLeft="-"
              wc={16}
              pp={249}
              fl={259}
              hrf={"1 (x244)"}
              fte={1950}
            />
            <F1Card
              teamImage={Mercedes}
              teamColor="#6CD3BF"
              teamName="Mercedes"
              revealDate={mRevealDate}
              timeLeft="-"
              wc={8}
              pp={129}
              fl={96}
              hrf={"1 (x116)"}
              fte={1970}
            />
            <F1Card
              teamImage={RedBull}
              teamColor="#3671C6"
              teamName="Red Bull"
              revealDate={rbRevealDate}
              timeLeft="-"
              wc={6}
              pp={95}
              fl={95}
              hrf={"1 (x113)"}
              fte={1997}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
