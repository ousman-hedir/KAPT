import { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { HeaderProps } from "./types";

function Header({ toggleDarkMode, darkMode }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div
      className={`bg-background text-primary fixed top-0 z-10 flex justify-end gap-2 sm:gap-10 xl:gap-16 h-16 w-full px-4 sm:px-14 items-center`}
    >
      {/* Language Switch */}
      <div className="relative h-8 text-[#00875f] flex items-center justify-center cursor-pointer">
        <select className="border outline-none px-3 py-1 rounded cursor-pointer">
          <option value="Eng">ENG</option>
          <option value="AMH">AMH</option>
          <option value="ORO">ORO</option>
        </select>
      </div>

      {/* Theme Switch */}
      <div
        className={`flex justify-start items-center gap-4 hover:bg-secondary py-1 px-3 rounded cursor-pointer`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
      </div>

      {/* Notification Icon */}
      <div className="cursor-pointer">
        <FiBell size={24} />
      </div>

      {/* Profile Icon */}
      <div className={`cursor-pointer p-2 rounded hover:bg-secondary`}>
        <FiUser
          size={24}
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        />

        {isProfileOpen && (
          <div
            className={`absolute right-2 bg-background p-3 rounded-sm shadow-lg w-40`}
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <div className="flex flex-col gap-5 w-full">
              <p
                className={`flex justify-start items-center text-sm text-primary gap-4 hover:bg-primary hover:text-white p-2 rounded-md font-semibold`}
              >
                <FiUser size={18} />
                Profile
              </p>

              <p
                className={`flex justify-start items-center text-sm text-primary gap-4 hover:bg-primary hover:text-white p-2 rounded-md font-semibold`}
              >
                <IoLogOutOutline size={18} />
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
