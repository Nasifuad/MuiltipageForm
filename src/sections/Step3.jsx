// import { useState } from "react";
import { addOns } from "../contants/constants";
import { useNavigate } from "react-router-dom";
export default function Step3() {
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    console.log("text");
    navigate("/step3");
  };
  return (
    <>
      <div className=" p-10 flex flex-col ">
        <div>
          <h1 className="text-3xl font-bold font-ubuntu">Select Your Plan</h1>
          <p className=" text-Cool-gray w-full">
            You have the option of monthly or yearly billing
          </p>
          <div className="mt-6 flex flex-col justify-between w-full gap-2">
            {addOns.map((add) => {
              return (
                <div
                  className="flex justify-between border-Cool-gray border p-4 rounded-lg"
                  key={add.id}
                >
                  <div className="flex gap-4 justify-center items-center">
                    <input type="checkbox" />
                    <div>
                      <p className="font-bold text-Marine-blue">{add.value}</p>
                      <p className="font-ubuntu text-sm text-Cool-gray">
                        {add.desc}
                      </p>
                    </div>
                  </div>
                  <p>+${add.price}/yr</p>
                </div>
              );
            })}
          </div>
          {/* <div className="mt-4 flex justify-center gap-2 items-center bg-gray-200 p-2 rounded-lg">
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
          </div> */}
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
