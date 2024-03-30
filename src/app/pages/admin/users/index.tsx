import { AdminDashboardProps } from "../Dashboard/types";

export default function Users({ minimized }: AdminDashboardProps) {
  return (
    <div
      className={`w-full bg-lightGreen ${
        minimized ? "lg:w-[90%]" : "lg:w-[80%]"
      } items-center h-screen mt-16 right-0 fixed transition-all duration-500 ease-in`}
    >
      <div className="">Users</div>
    </div>
  );
}
