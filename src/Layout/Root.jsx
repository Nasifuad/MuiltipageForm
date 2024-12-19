import Navbar from "../sections/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="flex flex-col xl:flex-row bg-white p-10 rounded-3xl xl:shadow-lg ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Root;
