import iconDots from "../assets/images/icon-ellipsis.svg";

const Card = ({ icon, bg, title, currentPeriod, previousPeriod, legend }) => {
  return (
    <div className={`card bg-${bg}`}>
      <img className="card-icon" src={icon} alt="logo" />
      <div className="card-content">
        <div className="card-title">
          <h5>{title}</h5>
          <img src={iconDots} alt="" />
        </div>
        <div className="card-body">
          <div className="card-value">
            <h1>{currentPeriod}hrs</h1>
          </div>
          <div className="card-period">
            <span>
              {legend} - {previousPeriod}hrs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
