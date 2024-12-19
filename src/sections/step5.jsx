import ok from "../assets/images/icon-thank-you.svg";
export default function Step5() {
  return (
    <>
      <div className=" flex flex-col p-10 gap-4   sm:translate-y-[-50px] justify-center items-center bg-white ">
        <img src={ok} alt="OK" />
        <h1 className="text-3xl font-bold font-ubuntu">Thank You !</h1>
        <p className=" text-Cool-gray w-[300px]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at 7ZV4y@example.com
        </p>
      </div>
    </>
  );
}
