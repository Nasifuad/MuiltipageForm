import { useState } from "react";
import { selectPlan } from "../contants/constants";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sumbitForm } from "../reducer/FormSlice";
export default function Step2() {
  const [toggle, setToggle] = useState(false);
  const [slected, setSlected] = useState(1);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const sliceData = useSelector((state) => state);
  const handleSelect = (e, id) => {
    e.preventDefault();
    setSlected(id);
  };
  const handleNext = (e) => {
    e.preventDefault();
    dispatch(
      sumbitForm({
        key: "plan",
        value: {
          plan: selectPlan.find((plan) => plan.id === slected).title,
          price: toggle
            ? selectPlan.find((plan) => plan.id === slected).priceYear
            : selectPlan.find((plan) => plan.id === slected).priceMonth,
          billing: toggle ? "yearly" : "monthly",
        },
      })
    );
    navigate("/step3");
    console.log(sliceData);
  };

  return (
    <>
      <div className=" p-10 flex flex-col ">
        <div>
          <h1 className="text-3xl font-bold font-ubuntu">Select Your Plan</h1>
          <p className=" text-Cool-gray w-full">
            You have the option of monthly or yearly billing
          </p>
          <div className="mt-6 flex justify-between w-full gap-2">
            {selectPlan.map((plan) => {
              return (
                <div
                  onClick={(e) => handleSelect(e, plan.id)}
                  key={plan.id}
                  className={`flex flex-col  rounded border border-slate-gray  items-start w-[140px] p-4 hover:border-Marine-blue hover:scale-105 transition-al
                    ${plan.id === slected && "border-Marine-blue"}
                    `}
                >
                  <img
                    src={plan.icon}
                    alt={plan.title}
                    width={50}
                    height={50}
                  />
                  <div className="mt-10">
                    <p className="font-semibold font-ubuntu text-Marine-blue">
                      {plan.title}
                    </p>
                    <p className="text-Cool-gray text-sm">
                      {!toggle ? plan.priceMonth : plan.priceYear}
                    </p>
                    {toggle ? (
                      <p className="text-Cool-gray text-sm">{plan.free}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex justify-center gap-2 items-center bg-gray-200 p-2 rounded-lg">
            <p
              className={`text-Cool-gray font-bold font-ubuntu ${
                !toggle && "text-Marine-blue"
              }`}
            >
              Monthly
            </p>
            <button
              onClick={() => setToggle(!toggle)}
              className="relative bg-Marine-blue p-2 rounded-full w-10 h-5"
            >
              <span
                className={`bg-White w-3 h-3 rounded-full top-[50%] transition-duration-1500 linear translate-y-[-50%] absolute  ${
                  toggle ? "right-1" : "left-1"
                } `}
              ></span>
            </button>
            <p
              className={`text-Cool-gray font-bold font-ubuntu ${
                toggle && "text-Marine-blue"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
        <div className="mt-auto w-full justify-between flex">
          <button
            className="font-bold text-Marine-blue"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
          <button
            className="bg-Marine-blue text-white py-2 rounded-md mt-4 w-max px-2 hover:bg-blue-800 ml-auto"
            onClick={(e) => handleNext(e)}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}
