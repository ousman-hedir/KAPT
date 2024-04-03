import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-[#d7a022]",
  textColor = "text-black",
  width = "w-auto",
  padding = "px-4 py-2",
  onClick,
  children,
  icon,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded ${bgColor} ${textColor} ${width} ${padding} font-bold transition duration-300 ease-in-out hover:opacity-80 font- hover:shadow-md focus:outline-none`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
