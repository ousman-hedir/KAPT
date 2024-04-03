import React from "react";
import { ModalProps } from "./types";
import { IoIosClose } from "react-icons/io";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  minimized,
}) => {
  
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 right-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 ${
            minimized ? "lg:w-[90%]" : "lg:w-[80%]"
          } transition-all duration-500 ease-in`}
          onClick={handleOverlayClick}
        >
          <div className="bg-white text-black p-4 rounded-lg relative mx-10 z-50">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:bg-slate-200 rounded-md"
              onClick={onClose}
            >
              <IoIosClose size={34} />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
