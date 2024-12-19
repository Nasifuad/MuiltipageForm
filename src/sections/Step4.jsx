import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Step4() {
  const navigate = useNavigate();

  const sliceData = useSelector((state) => state);
  console.log("From Confirm this is the final data !!!", sliceData);
  const handleConfirm = (e) => {
    e.preventDefault();
    navigate("/step5");
  };

  return (
    <>
      <div className=" flex flex-col p-10 gap-4   sm:translate-y-[-50px] bg-white ">
        <div>
          <h1 className="text-3xl font-bold font-ubuntu">Finishing Up</h1>
          <p className=" text-Cool-gray w-full">
            Double Check everything looks OK before confirming
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <div>
              <h1 className="font-ubuntu font-bold text-Marine-blue">
                {sliceData.plan.plan}
              </h1>
              <NavLink to="/step2" className="underline text-Cool-gray font-sm">
                {" "}
                Change
              </NavLink>
            </div>

            <p className="font-ubuntu text-Marine-blue font-semibold">
              {" "}
              {sliceData.plan.price}
            </p>
          </div>
          <div className="flex flex-col justify-between bg-gray-100 p-3 rounded-lg gap-2">
            {sliceData.addOns.map((add) => {
              return (
                <>
                  <div key={add.id} className="flex justify-between">
                    <p className="text-Cool-gray text-sm ">{add.value}</p>
                    <p className="font-semibold text-sm ">
                      {sliceData.plan.billing == "yearly"
                        ? add.priceYear
                        : add.priceMonth}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-Cool-gray text-sm">Total (per month)</p>
            <p className="font-semibold text-lg font-ubuntu text-blue-900">
              {sliceData.plan.price}
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
            className="bg-blue-700 text-white py-2 rounded-md mt-4 w-max px-4 hover:bg-blue-800 ml-auto text-sm"
            onClick={(e) => handleConfirm(e)}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
