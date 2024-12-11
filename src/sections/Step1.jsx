import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NextBtn from "../components/NextBtn";
import { sumbitForm } from "../reducer/FormSlice";

const Step1 = () => {
  // const [formData, setFormData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    name && email && number && navigate("step2");
    name ? setCheckName(false) : setCheckName(true);
    email ? setCheckEmail(false) : setCheckEmail(true);
    number ? setCheckNumber(false) : setCheckNumber(true);
    // setFormData(name);
    dispatch(sumbitForm({ key: "formData", value: { name, email, number } }));
  };
  return (
    <div className="flex flex-col p-10 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-Marine-blue font-ubuntu">
          Personal info
        </h1>
        <p className="text-Cool-gray font-ubuntu">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <label
              htmlFor="name"
              className="text-marine-blue font-ubuntu font-sm"
            >
              Name
            </label>
            <p className={`text-red-600 ${!checkName && "hidden"}`}>
              This field is required
            </p>
          </div>
          <input
            className="mt-2 p-2 border border-gray-400 rounded-md placeholder:text-Cool-gray font-semibold hover:placeholder:text-Marine-blue hover:border-Marine-blue focus:border-Marine-blue cursor-pointer"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nasif Fuad"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="email">Email</label>
            <p className={`text-red-600 ${!checkEmail && "hidden"}`}>
              This field is required
            </p>
          </div>
          <input
            type="email"
            className="mt-2 p-2 border border-gray-400 rounded-md placeholder:text-Cool-gray font-semibold hover:placeholder:text-Marine-blue hover:border-Marine-blue focus:border-Marine-blue cursor-pointer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nasif@Fuad"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="name">Phone Number</label>
            <p className={`text-red-600 ${!checkNumber && "hidden"}`}>
              This field is required
            </p>
          </div>
          <input
            type="tel"
            className="mt-2 p-2 border border-gray-400 rounded-md placeholder:text-Cool-gray font-semibold hover:placeholder:text-Marine-blue hover:border-Marine-blue focus:border-Marine-blue cursor-pointer"
            placeholder="+880 123 456 789"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <NextBtn />
      </form>
    </div>
  );
};

export default Step1;
