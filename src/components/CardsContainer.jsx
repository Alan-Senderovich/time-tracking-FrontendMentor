import Card from "./Card";
import iconWork from "../assets/images/icon-work.svg";
import iconPlay from "../assets/images/icon-play.svg";
import iconStudy from "../assets/images/icon-study.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconSocial from "../assets/images/icon-social.svg";
import iconSelfCare from "../assets/images/icon-self-care.svg";
import data from "../data";

const CardsContainer = ({ period }) => {

  const iconToShow = (activity) => {
    if (activity === "Work") return iconWork;
    if (activity === "Play") return iconPlay;
    if (activity === "Study") return iconStudy;
    if (activity === "Exercise") return iconExercise;
    if (activity === "Social") return iconSocial;
    if (activity === "Self Care") return iconSelfCare;
  };

  return (
    <div className="cards-container">
      {period === "daily" &&
        data.map((item) => (
          <Card
            key={item.title}
            icon={iconToShow(item.title)}
            bg={item.utils.bg}
            title={item.title}
            currentPeriod={item.timeframes.daily.current}
            previousPeriod={item.timeframes.daily.previous}
            legend="Last Day"
          />
        ))}
      {period === "weekly" &&
        data.map((item) => (
          <Card
            key={item.title}
            icon={iconToShow(item.title)}
            bg={item.utils.bg}
            title={item.title}
            currentPeriod={item.timeframes.weekly.current}
            previousPeriod={item.timeframes.weekly.previous}
            legend="Last Week"
          />
        ))}
      {period === "monthly" &&
        data.map((item) => (
          <Card
            key={item.title}
            icon={iconToShow(item.title)}
            bg={item.utils.bg}
            title={item.title}
            currentPeriod={item.timeframes.monthly.current}
            previousPeriod={item.timeframes.monthly.previous}
            legend="Last Month"
          />
        ))}
    </div>
  );
};

export default CardsContainer;
