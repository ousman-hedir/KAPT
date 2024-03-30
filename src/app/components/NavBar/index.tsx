import { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaAlignLeft } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { INavBarProps } from "./types";

function NavBar({
  items,
  onMinimizeToggle,
}: {
  items: INavBarProps[];
  onMinimizeToggle: (minimized: boolean) => void;
}) {
  const [minimized, setMinimized] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMinimize = () => {
    const newMinimized = !minimized;
    setMinimized(newMinimized);
    onMinimizeToggle(newMinimized);
  };

  const toggleMobileView = () => {
    setMobileView(true);
    setOpenNav(!openNav);
  };

  return (
    <div
      className={`min-w-[8rem] fixed left-0 z-20 ${
        minimized ? "w-[10%]" : "w-[20%]"
      } flex flex-col transition-all duration-500 ease-in
      ${mobileView ? "h-16" : "h-screen"}
      `}
    >
      {!mobileView && (
        <div
          className={`hover:bg-secondary cursor-pointer py-3 flex items-center justify-center`}
        >
          <h1 className="text-4xl font-bold text-center font-serif tracking-widest">
            APT
          </h1>
        </div>
      )}

      {mobileView && (
        <div
          className={`hover:bg-secondary cursor-pointer py-3 flex items-center justify-center gap-3`}
        >
          <h1 className="text-2xl font-bold text-center font-serif tracking-widest">
            APT
          </h1>
          <div className="">
            {openNav ? (
              <TfiClose
                size={24}
                onClick={toggleMobileView}
                className={`p-1 rounded bg-secondary`}
              />
            ) : (
              <FaAlignLeft
                size={24}
                onClick={toggleMobileView}
                className={`p-1 rounded bg-secondary`}
              />
            )}
          </div>
        </div>
      )}

      {mobileView && openNav && (
        <div
          className={`flex flex-col gap-5 p-5 mt-2 rounded-r-3xl w-[15rem] bg-primary transition-all duration-500 ease-in`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                minimized ? "justify-center" : "justify-start"
              } gap-5 p-3 font-bold rounded-md hover:text-primary
               hover:bg-secondary cursor-pointer`}
            >
              {minimized ? (
                item.icon
              ) : (
                <>
                  {item.icon}
                  {item.text}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {!mobileView && (
        <div className="h-screen">
          <div
            className={`flex flex-col gap-5 h-[80vh] ${
              minimized ? "p-3" : "p-5"
            }`}
          >
            {items.map((item, index) => (
              <a href={item.link}>
                <div
                  key={index}
                  className={`flex ${
                    minimized
                      ? `justify-center text-primary bg-secondary hover:bg-primary hover:text-white`
                      : `justify-start hover:text-primary hover:bg-secondary`
                  } gap-5 p-3 font-bold rounded-md cursor-pointer`}
                >
                  {minimized ? (
                    item.icon
                  ) : (
                    <>
                      {item.icon}
                      {item.text}
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>

          <div
            className="pl-8 py-3 cursor-pointer flex items-center gap-2 text-lg"
            onClick={toggleMinimize}
          >
            {minimized ? (
              <CiCircleChevRight size={32} />
            ) : (
              <>
                <CiCircleChevLeft size={32} />
                Close
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
