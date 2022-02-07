import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import styles from "./styles/app.module.css";
import Header from "./components/Header";
import { ReactComponent as DoctorsIcon } from "./assets/icons/user-md.svg";
import { ReactComponent as HospitalIcon } from "./assets/icons/building.svg";
import { ReactComponent as VirusIcon } from "./assets/icons/coronavirus.svg";
import { ReactComponent as VirusSlashIcon } from "./assets/icons/virus-slash.svg";
import { ReactComponent as StretcherIcon } from "./assets/icons/stretcher.svg";
import { ReactComponent as ThermometerIcon } from "./assets/icons/thermometer.svg";
import { ReactComponent as MedicalDripIcon } from "./assets/icons/medical-drip.svg";
import { ReactComponent as HeartbeatIcon } from "./assets/icons/heartbeat.svg";
import InfoBox from "./components/InfoBox";
import StatCard from "./components/StatCard";

const App = () => {
  const [hospitalData, setHospitalData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const getStatsIcon = (value) => {
    switch (value) {
      case "corona_cases":
        return { icon: <VirusIcon />, order: 1 };
      case "recovered":
        return { icon: <VirusSlashIcon />, order: 2, color: "purple" };
      case "active_cases":
        return { icon: <MedicalDripIcon />, order: 3, size: "large" };
      case "deaths":
        return { icon: <HeartbeatIcon />, order: 4, color: "yellow" };
      case "testing_done":
        return { icon: <ThermometerIcon />, order: 5 };
      case "beds_available":
        return { icon: <StretcherIcon />, order: 6, size: "large" };
      default:
        break;
    }
  };

  const formatStatsData = (stats) => {
    const resp = [];
    for (let elem of Object.keys(stats)) {
      resp.push({
        label: elem?.replace("_", " "),
        value: stats[elem],
        ...getStatsIcon(elem),
      });
    }
    resp.sort((a, b) => {
      return a.order - b.order;
    });
    return resp;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const resp = await axios.get(url);
        setHospitalData({
          ...resp.data,
          stats: formatStatsData(resp.data?.stats),
        });
        console.log(resp.data);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.appContainer}>
      <NavBar hospital={hospitalData} showMenu={showMenu} handleShowMenu={setShowMenu} />
      <main className={styles.appMain}>
        <Header
          showMenu={showMenu}
          handleShowMenu={setShowMenu}
          handleClick={() => console.log(searchValue)}
          handleInputChange={setSearchValue}
          inputValue={searchValue}
        />
        {hospitalData?.id ? (
          <>
            <section className={styles.appSection}>
              <h2>Analytics Overview</h2>
              <div className={styles.appHospitalOverview}>
                <h3>{hospitalData?.name}</h3>
                <p>{hospitalData?.address}</p>
                <div className={styles.appHospitalGeneralInfo}>
                  <InfoBox
                    icon={<DoctorsIcon />}
                    label="Total doctors"
                    value={hospitalData?.total_doctors}
                  />
                  <InfoBox
                    icon={<HospitalIcon />}
                    label="Number of dep."
                    value={hospitalData?.number_of_cities}
                  />
                </div>
              </div>
            </section>
            <section className={styles.appSection}>
              <h2>Hospital Stats</h2>
              <div className={styles.appStats}>
                {hospitalData?.stats?.length
                  ? hospitalData?.stats.map((item) => (
                      <StatCard key={item.label} {...item} />
                    ))
                  : ""}
              </div>
            </section>
          </>
        ) : (
          <h2>An error has occurred, please refresh the page.</h2>
        )}
      </main>
    </div>
  );
};

export default App;
