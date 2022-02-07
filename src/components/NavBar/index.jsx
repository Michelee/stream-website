import React from "react";
import { ReactComponent as AvatarIcon } from "../../assets/icons/hospital-square-sign.svg";
import { ReactComponent as AppsIcon } from "../../assets/icons/apps.svg";
import { ReactComponent as ProfilesIcon } from "../../assets/icons/user-md.svg";
import { ReactComponent as OrganizationIcon } from "../../assets/icons/building.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import OverviewImg from "../../assets/overview.png";

import styles from "./index.module.css";

const NavBar = ({ hospital, showMenu, handleShowMenu }) => {
  const hospitalName = () => hospital?.id?.replace("_", " ");

  return (
    <div
      className={`${styles.navbarContainer} ${
        showMenu ? styles.navbarContainerOpen : ""
      }`}
    >
      <div className={styles.navbarCloseIcon} onClick={() => handleShowMenu(!showMenu)}>
        <CloseIcon />
      </div>
      <div className={styles.navbarAvatar}>
        <AvatarIcon />
      </div>
      <nav className={styles.navbarLinks}>
        <ul>
          <li className={styles.navbarActive}>
            <AppsIcon />
            <a href="/">Dashboard</a>
          </li>
          <li>
            <ProfilesIcon />
            <a href="/">Dr. Profiles</a>
          </li>
          <li>
            <OrganizationIcon />
            <a href="/">Organization</a>
          </li>
          <li>
            <SettingsIcon />
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>
      <div className={styles.navbarOverviewCard}>
        <div className={styles.navbarTag}>New</div>
        <span>{hospitalName()}</span>
        <img src={OverviewImg} alt="overview" />
      </div>
    </div>
  );
};

export default NavBar;
