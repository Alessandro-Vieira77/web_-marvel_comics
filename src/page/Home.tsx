// import React from "react";

// icons
import { MdDashboard } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Home = () => {
  return (
    <div className="container flex h-screen w-full border-2 bg-dark border-yellow-600">
      <header className="menu h-screen border-2 w-64 border-red-600 pt-8 pb-8">
        <h1 className="ml-8 pb-16 text-4xl font-semibold text-white">Geek</h1>
        <div className="container-menu flex flex-col justify-between w-full h-5/6 border-2 border-green-400">
          <nav className="menu ">
            <ul className="menu-list flex flex-col gap-3 text-white">
              <li className="h-10 w-5/6 flex items-center pl-8 rounded-r-2xl bg-hoverMenu">
                <a href="#" className="flex items-center gap-3">
                  <MdDashboard /> Dashboard
                </a>
              </li>
              <li className="h-10 w-5/6 flex items-center pl-8 rounded-r-2xl">
                <a href="#" className="flex items-center gap-3">
                  {" "}
                  <BsCollectionFill /> My collections
                </a>
              </li>
              <li className="h-10 w-40 flex items-center pl-8 rounded-r-2xl">
                <a href="#" className="flex items-center gap-3">
                  {" "}
                  <GrFavorite /> Favorites
                </a>
              </li>
              <li className="h-10 w-40 flex items-center pl-8 rounded-r-2xl">
                <a href="#" className="flex items-center gap-3">
                  {" "}
                  <LuClock /> Coming soon
                </a>
              </li>
              <li className="h-10 w-40 flex items-center pl-8 rounded-r-2xl">
                <a href="#" className="flex items-center gap-3">
                  {" "}
                  <FaUserFriends /> Friends
                </a>
              </li>
            </ul>
          </nav>

          <ul className="sett-logUot flex flex-col gap-3  text-white">
            <li className="h-10 w-40 flex items-center pl-8 rounded-r-2xl">
              <a href="#" className="flex items-center gap-3">
                {" "}
                <IoSettingsOutline /> Settigns
              </a>
            </li>
            <li className="h-10 w-40 flex items-center pl-8 rounded-r-2xl">
              <a href="#" className="flex items-center gap-3">
                {" "}
                <MdLogout /> Log out
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="body border-2 w-full border-blue-600">
        <div className="header"></div>
      </main>
    </div>
  );
};

export default Home;
