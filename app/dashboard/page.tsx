import React from "react";

const page = () => {
  return (
    <div>
      <Page></Page>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="w-[1446px] h-[104px] relative">
        <div className="w-[311px] h-[104px] left-0 top-0 absolute text-center text-white text-[69px] font-normal font-['Nico Moji']">
          SWITCH
        </div>
        <div className="w-52 h-[53px] left-[1238px] top-[19px] absolute">
          <div className="w-52 h-[51px] left-0 top-0 absolute bg-stone-100 rounded-[5px]" />
          <div className="w-[172px] h-[42px] left-[23px] top-[11px] absolute text-center text-black text-[29px] font-normal font-['Inter']">
            USER-1
          </div>
        </div>
        <div className="w-[267px] h-[51px] left-[944px] top-[19px] absolute">
          <div className="w-[267px] h-[51px] left-0 top-0 absolute bg-stone-100 rounded-[5px]" />
          <div className="w-[236px] h-7 left-[15px] top-[10px] absolute text-center text-black text-[22px] font-normal font-['Inter']">
            0xFC2315....7F97
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
