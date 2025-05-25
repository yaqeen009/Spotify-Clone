import logo from "../assets/icons/social.png";
import home from "../assets/icons/Home-filled.svg";
import Search from "../assets/icons/search.svg";
import archives from "../assets/icons/archive.png";
import download from "../assets/icons/download.svg";
import noti from "../assets/icons/Noti-unfilled.svg";
import friends from "../assets/icons/friends.svg";

import TextBtn from "./textBtn";
import TextIconBtn from "./textIconBtn";
import { useState } from "react";

export default function TopNav() {
  //states
  const [isActive, setIsActive] = useState<boolean>(false);

  //utils

  //click events
  const handlePemiumClick = () => {
    console.log("btn clicked");
  };
  const handleDownloadClick = () => {
    console.log("btn clicked");
  };
  const setSearchActive = () => {
    setIsActive((prev) => !prev);
  };
  //
  return (
    <div className="flex flex-row mx-2 items-center pt-2 justify-between">
      <div className="flex flex-row items-center space-x-4">
        <span className="w-8 h-8 ml-4 mr-8 ">
          <img src={logo} alt="Spotify" />
        </span>
        <span className="bg-primary-200 w-fit h-fit flex p-3 rounded-full">
          <img src={home} alt="Home" className="self-center w-5 h-5" />
        </span>
        <span
          onClick={setSearchActive}
          onMouseLeave={() => setIsActive(false)}
          className={`flex items-center space-x-2 bg-primary-200 px-4 py-2 rounded-full hover:bg-primary-400 ${
            isActive && "outline-1 outline-secondary-100"
          }`}
        >
          <img
            src={Search}
            alt="Search"
            className="w-6 h-6 text-secondary-200"
          />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="text-secondary-100 placeholder:text-secondary-200 font-open_sans placeholder:font-open_sans w-80 outline-none border-r-[0.5px] border-secondary-200 pr-10 px-2"
          />
          <img
            src={archives}
            className="w-5 h-5 text-secondary-100 opacity-80 hover:opacity-100"
            alt="Browse"
          />
        </span>
      </div>
      <div className="flex flex-row space-x-4">
        <TextBtn
          colors="bg-secondary-100 text-primary-100"
          btnName="Explore Premium"
          btnType="button"
          btnClick={handlePemiumClick}
          isScale={true}
        />
        <TextIconBtn
          colors="text-secondary-200 hover:text-secondary-100 transition-all"
          btnName="Install App"
          isScale={true}
          btnType="button"
          icon={download}
          btnClick={handleDownloadClick}
        />
        <span className="flex items-center space-x-3 ml-4">
          <img
            src={noti}
            className="w-5 h-5 text-secondary-200"
            alt="Notifications"
          />
          <img
            src={friends}
            className="w-5 h-5 text-secondary-200"
            alt="Friend Activity"
          />
          <span className="flex items-center justify-center text-center w-11 h-11 bg-primary-200 rounded-full p-2 text-secondary-200">
            JD
          </span>
        </span>
      </div>
    </div>
  );
}
