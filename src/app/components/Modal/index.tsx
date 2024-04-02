import React, { useState } from "react";
import { ModalProps } from "./types";
import { IoIosClose } from "react-icons/io";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  minimized,
  button,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setIsSubmitting(false);
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 right-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50
           ${
             minimized ? "lg:w-[90%]" : "lg:w-[80%]"
           } transition-all duration-500 ease-in`}
          onClick={handleOverlayClick}
        >
          <div className="bg-white text-black p-4 rounded-lg relative z-50">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:bg-slate-200 rounded-md"
              onClick={onClose}
            >
              <IoIosClose size={34} />
            </button>
            <form onSubmit={handleSubmit}>
              {children}

              <div className="flex items-center gap-5">
                {button && <div className="">{button}</div>}
                <div className="">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md focus:outline-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
