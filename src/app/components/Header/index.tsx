import { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full h-16 flex justify-end bg-[#F7FBFA]`}>
      <div className="sm:w-1/2 w-full flex justify-between px-4 sm:px-14 items-center">
        <div className="relative h-8 flex items-center justify-center cursor-pointer">
          <select className="border outline-none px-3 py-1 rounded cursor-pointer">
            <option value="Eng">ENG</option>
            <option value="AMH">AMH</option>
            <option value="ORO">ORO</option>
          </select>
        </div>

        <div>
          <p
            className="flex justify-start items-center gap-4 hover:bg-[#E5F3EF] py-1 px-3 rounded cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
          </p>
        </div>

        <div className="cursor-pointer">
          <FiBell size={24} />
        </div>

        <div>
          <div className="cursor-pointer p-2 rounded hover:bg-[#E5F3EF]">
            <FiUser
              size={24}
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            />

            {isProfileOpen && (
              <div
                className="absolute right-2 bg-[#F7FBFA] p-3 rounded-sm shadow-lg w-40 "
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
              >
                <div className="flex flex-col gap-5 w-full">
                  <p className="flex justify-start items-center text-sm text-[#00875F] gap-4 hover:bg-[#00875F] hover:text-white p-2 rounded-md font-semibold">
                    <FiUser size={18} />
                    Profile
                  </p>

                  <p className="flex justify-start items-center text-sm text-[#00875F] gap-4 hover:bg-[#00875F] hover:text-white p-2 rounded-md font-semibold">
                    <IoLogOutOutline size={18} />
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
