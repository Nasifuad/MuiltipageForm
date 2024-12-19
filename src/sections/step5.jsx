import ok from "../assets/images/icon-thank-you.svg";
export default function Step4() {
  return (
    <>
      <div className=" flex flex-col p-10 gap-4   sm:translate-y-[-50px] bg-white ">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={ok} alt="" />
          <h1 className="text-4xl text-Marine-blue  font-bold font-ubuntu">
            Thank You!
          </h1>
          <p className="text-center text-Cool-gray w-1/2">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </>
  );
}
