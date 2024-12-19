import { NavLink } from "react-router-dom";
import { steps } from "../contants/constants";
console.log(steps);

function Navbar() {
  return (
    <>
      <div className="relative flex xl:flex-col w-full xl:w-max justify-center items-center   ">
        {/* <img src={bgDesk} className="  h-auto" /> */}
        <div className="flex xl:flex-col  xl:gap-6 py-20 px-6 xl:bg-desk bg-mob  bg-center bg-contain   xl:bg-cover xl:bg-center bg-no-repeat justify-center w-full gap-3">
          {steps.map((step) => {
            return (
              <div key={step.id} className="flex items-center xl:gap-4">
                <NavLink
                  to={step.linkTo}
                  className={({ isActive }) =>
                    ` font-semibold border px-4 py-2 rounded-full ${
                      isActive
                        ? "text-Marine-blue bg-Pastel-blue"
                        : "text-White bg-slate-gray"
                    }`
                  }
                >
                  {step.id}
                </NavLink>
                <div className="hidden xl:block">
                  <p className="uppercase text-sm text-Cool-gray">
                    {step.step}
                  </p>
                  <p className="uppercase font-semibold text-White">
                    {step.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
