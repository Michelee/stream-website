import React from "react";
import SearchInput from "../SearchInput";
import { ReactComponent as MessagesIcon } from "../../assets/icons/envelope.svg";
import { ReactComponent as AlertIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/user-circle.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import style from "./index.module.css";

const Header = (props) => {
  const { handleShowMenu, showMenu } = props;
  return (
    <header className={style.headerContainer}>
      <div
        onClick={() => handleShowMenu(!showMenu)}
        className={style.headerMenuButton}
      >
        <MenuIcon />
      </div>
      <div className={style.headerSearchContainer}>
        <SearchInput {...props} />
      </div>
      <div className={style.headerActionContainer}>
        <div
          onClick={() => console.log("Messages")}
          className={style.headerActionIcon}
        >
          <MessagesIcon />
        </div>
        <div
          onClick={() => console.log("Alert")}
          className={style.headerActionIcon}
        >
          <AlertIcon />
        </div>
        <div
          onClick={() => console.log("Profile")}
          className={style.headerActionIcon}
        >
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
