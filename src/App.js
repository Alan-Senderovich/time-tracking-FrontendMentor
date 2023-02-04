import { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import ProfileContainer from "./components/ProfileContainer";



function App() {
  const [period, setPeriod] = useState("daily");

  function handlePeriodSelected(e) {
    const periodSelected = e.target.value;
    setPeriod(periodSelected);
  }

  return (
    <div className="container">
      <ProfileContainer handlePeriodSelected={handlePeriodSelected}/>
      <CardsContainer period={period}/>
    </div>
  );
}

export default App;
