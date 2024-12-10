import { NavLink } from "react-router-dom";
import { steps } from "../contants/constants";
console.log(steps);
import bgDesk from "../assets/images/bgDesk.svg";
function Navbar() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center  ">
        <img src={bgDesk} className="  h-auto" />
        <div className="flex flex-col  gap-6 absolute top-0 left-0 py-10 px-6">
          {steps.map((step) => {
            return (
              <div key={step.id} className="flex items-center gap-4">
                <NavLink
                  to={step.linkTo}
                  className={({ isActive }) =>
                    `font-semibold border px-4 py-2 rounded-full ${
                      isActive
                        ? "text-Marine-blue bg-Pastel-blue"
                        : "text-White bg-slate-gray"
                    }`
                  }
                >
                  {step.id}
                </NavLink>
                <div>
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
