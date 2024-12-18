// import { useState } from "react";
import { addOns } from "../contants/constants";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sumbitForm } from "../reducer/FormSlice";
import { useState } from "react";

// console.log("This is in the step3 ", storeData);

export default function Step3() {
  const dispatch = useDispatch();
  const [selected, setSlected] = useState([]);
  const sliceData = useSelector((state) => state);
  const billing = sliceData.plan?.billing;
  console.log("From step 3", sliceData, billing);
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    const selectedAddOns = addOns.filter((add) => selected.includes(add.id));
    dispatch(sumbitForm({ key: "addOns", value: selectedAddOns }));
    navigate("/step4");
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const id = Number(value); // Ensure value is a number
    setSlected((prevSelected) =>
      checked
        ? [...prevSelected, id]
        : prevSelected.filter((item) => item !== id)
    );
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
                  className={`flex justify-between ${
                    selected.includes(add.id)
                      ? "border-2 border-blue-800"
                      : "border border-Cool-gray"
                  } p-4 rounded-lg`}
                  key={add.id}
                >
                  <label className="flex gap-4 items-center cursor-pointer">
                    <input
                      type="checkbox"
                      onChange={(e) => handleChange(e)}
                      value={add.id}
                      className="peer hidden"
                    />
                    <span
                      className="w-6 h-6 border-2 border-Cool-gray rounded-md flex justify-center items-center 
                               peer-checked:bg-blue-500 peer-checked:border-none"
                    >
                      {/* Optional checkmark icon */}
                      {selected.includes(add.id) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                    <div>
                      <p className="font-bold text-Marine-blue">{add.value}</p>
                      <p className="font-ubuntu text-sm text-Cool-gray">
                        {add.desc}
                      </p>
                    </div>
                  </label>
                  <p>{billing === "yearly" ? add.priceYear : add.priceMonth}</p>
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
