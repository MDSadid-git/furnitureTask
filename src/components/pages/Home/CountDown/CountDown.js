import React, { useEffect, useState } from "react";
import shofa from "../../../../Assets/images/double-sofa-03.png";

const CountDown = () => {
  const [days, setDays] = useState();
  const [hours, sethours] = useState();
  const [minutes, setminutes] = useState();
  const [secounds, setsecounds] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("Apr 19, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        sethours(hours);
        setminutes(minutes);
        setsecounds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  }, []);
  return (
    <div className="mb-10  sm:block md:flex items-center justify-between bg-gray-200 rounded-xl">
      <div className="mt-16 p-5">
        <div className="text-center">
          <div>
            <h1 className="text-lg">Limited Offers</h1>
            <h2 className="text-2xl">FURNITURE Offers</h2>
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">{days}</span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">{hours}</span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">{minutes}</span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">{secounds}</span>
              sec
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={shofa} alt="" />
      </div>
    </div>
  );
};

export default CountDown;
