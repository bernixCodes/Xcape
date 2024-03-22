import CountUp from "react-countup";
import "./index.css";

const Stats = () => {
  return (
    <div className="homestats-div">
      <div className="homestats">
        <div className="homestat-main">
          <div className="homestat-info">
            <h3>
              <CountUp start={60} end={80} duration={50} useEasing={true} /> K+
            </h3>
            <h4>Satisfied customer</h4>
          </div>

          <div className="homestat-info">
            <h3>
              <CountUp start={0} end={18} duration={50} useEasing={true} /> K+
            </h3>
            <h4>Active Members</h4>
          </div>

          <div className="homestat-info">
            <h3>
              <CountUp start={95} end={110} duration={50} useEasing={true} /> +
            </h3>
            <h4> Tour Destination</h4>
          </div>

          <div className="homestat-info">
            <h3>
              <CountUp start={21} end={99} duration={50} useEasing={true} /> +
            </h3>
            <h4>100% Rating</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
