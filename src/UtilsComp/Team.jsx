import React from "react";

const Team = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-center font-medium text-[30px]">
        Backed By Industry Leaders
      </h1>
      <div className="mt-[70px] grid grid-cols-1  md:grid-cols-3 gap-[60px] mx-[100px]">
        <div>
          <div className="w-[400] h-[500px] bg-[#D9D9D9] rounded-[20px] "></div>
          <h2 className="mt-[20px] font-normal text-[24px]">
            Andrew Huberman, Ph.D.
          </h2>
          <p className="mt-[4px] font-normal text-[16px] text-gray-200">
            Neuroscientist, Stanford professor, and host of the top-ranked
            Huberman Lab podcast
          </p>
        </div>
        <div>
          <div className="w-[400] h-[500px] bg-[#D9D9D9] rounded-[20px] "></div>
          <h2 className="mt-[20px] font-normal text-[24px]">
            Andrew Huberman, Ph.D.
          </h2>
          <p className="mt-[4px] font-normal text-[16px] text-gray-200">
            Neuroscientist, Stanford professor, and host of the top-ranked
            Huberman Lab podcast
          </p>
        </div>
        <div>
          <div className="w-[400] h-[500px] bg-[#D9D9D9] rounded-[20px] "></div>
          <h2 className="mt-[20px] font-normal text-[24px] ml-[10px]">
            Andrew Huberman, Ph.D.
          </h2>
          <p className="mt-[4px] font-normal text-[16px] text-gray-200 ml-[10px] text-left">
            Neuroscientist, Stanford professor, and host of the top-ranked
            Huberman Lab podcast
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
