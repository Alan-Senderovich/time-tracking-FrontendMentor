import profileImg from "../assets/images/image-jeremy.png";

const ProfileContainer = ({handlePeriodSelected}) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="img-wrapper">
          <img src={profileImg} alt="profile-img" />
        </div>
        <div className="title-wrapper">
          <span>Report for</span>
          <div>
            <h1>Jeremy</h1>
            <h1>Robson</h1>
          </div>
        </div>
      </div>
      <div className="periods">
        <button onClick={handlePeriodSelected} value="daily">Daily</button>
        <button onClick={handlePeriodSelected} value="weekly">Weekly</button>
        <button onClick={handlePeriodSelected} value="monthly">Monthly</button>
      </div>
    </div>
  );
};

export default ProfileContainer;
