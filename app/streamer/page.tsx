import React from "react";
import Image from "next/image";
import nft from "../assets/nft.svg"
import jack from "../assets/jack.svg"
import polygon from "../assets/polygon.svg"

const page = () => {
  return (
    <div>
      <Main></Main>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="w-[1512px] h-[982px] relative bg-gradient-to-b from-zinc-950 to-black">
        <div className="w-[1512px] h-[1004px] left-0 top-0 absolute bg-indigo-950 bg-opacity-25 border border-red-50" />
        <div className="w-[989.12px] h-[490px] left-[-21px] top-[143px] absolute">
          <div className="w-[956px] h-[490px] left-0 top-0 absolute">
            <div className="w-[274px] h-[59px] left-[231px] top-[49px] absolute text-center text-violet-400 text-[37px] font-bold font-['Inria Serif']">
              USER-1
            </div>
            <div className="w-[285px] h-[490px] left-0 top-0 absolute">
              <div className="w-[274px] h-[59px] left-0 top-[191px] absolute text-center text-violet-400 text-[37px] font-bold font-['Inria Serif']">
                Followers
              </div>
              <div className="left-[125px] top-[244px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
                0
              </div>
              <div className="left-[125px] top-[345px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
                0
              </div>
              <div className="left-[126px] top-[446px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
                0
              </div>
              <div className="w-[274px] h-[59px] left-0 top-[296px] absolute text-center text-violet-400 text-[37px] font-bold font-['Inria Serif']">
                Following
              </div>
              <div className="w-[274px] h-[59px] left-[11px] top-[401px] absolute text-center text-violet-400 text-[37px] font-bold font-['Inria Serif']">
                Following
              </div>
              <Image
              className="w-[145px] h-[145px] left-[65px] top-0 absolute rounded-full"
              src={jack}
              alt="ellipse"></Image>
            </div>
            <div className="w-12 h-12 left-[908px] top-[31px] absolute" />
          </div>
          <div className="w-[681.12px] h-[165px] left-[308px] top-[145px] absolute">
            <div className="w-[680.12px] h-[165px] left-[1px] top-0 absolute bg-zinc-700 rounded-[5px]" />
            <div className="w-[197px] h-[27px] left-0 top-[22px] absolute text-center text-white text-2xl font-normal font-['Inria Serif']">
              I AM BEST
            </div>
          </div>
        </div>
        <div className="w-[1446px] h-[104px] left-[44px] top-[24px] absolute">
          <div className="w-[311px] h-[104px] left-0 top-0 absolute text-center text-white text-[69px] font-normal font-['Nico Moji']">
            SWITCH
          </div>
          <div className="w-[734px] h-[53px] left-[712px] top-[19px] absolute">
            <div className="w-52 h-[53px] left-[526px] top-0 absolute">
              <div className="w-52 h-[51px] left-0 top-0 absolute bg-stone-100 rounded-[5px]" />
              <div className="w-[172px] h-[42px] left-[23px] top-[11px] absolute text-center text-black text-[29px] font-normal font-['Inter']">
                USER-1
              </div>
            </div>
            <div className="w-[218px] h-[51px] left-0 top-0 absolute">
              <div className="w-[218px] h-[51px] left-0 top-0 absolute bg-stone-100 rounded-[5px]" />
              <div className="w-[192.69px] h-7 left-[12.25px] top-[10px] absolute text-center text-black text-[22px] font-normal font-['Inter']">
                0xFC2315....7F97
              </div>
            </div>
            <div className="w-[265px] h-[39px] left-[242px] top-[10px] absolute">
              <div className="w-[21.07px] h-[26.62px] left-[188.88px] top-0 absolute text-center text-white text-4xl font-bold font-['Inria Serif']">
                0
              </div>
              <div className="w-[188.94px] h-[32.81px] left-0 top-[3px] absolute text-center text-white text-[25px] font-bold font-['Inria Serif']">
                Stream Money{" "}
              </div>
              <div className="w-[48.26px] h-[37.14px] left-[216.74px] top-[1.86px] absolute">
                <Image
                src={polygon}
                alt="poly"></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[462px] h-[639px] left-[1041px] top-[266px] absolute">
          <div className="w-[396px] h-[95px] left-0 top-[544px] absolute">
            <div className="w-[396px] h-[95px] left-0 top-0 absolute bg-purple-600 rounded-[5px]" />
            <div className="w-[358.11px] h-[57px] left-[18.94px] top-[26px] absolute text-center text-white text-[30px] font-bold font-['Inria Serif']">
              CREATE STREAMER
            </div>
          </div>
          <div className="w-[462px] h-[63px] left-0 top-[422px] absolute">
            <div className="left-[350px] top-0 absolute text-center text-white text-[49px] font-bold font-['Inria Serif']">
              0
            </div>
            <div className="w-[278px] h-[53px] left-0 top-[3px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
              Stream Money
            </div>
            <div className="w-[71px] h-[60px] left-[391px] top-[3px] absolute" />
          </div>
          <div className="w-[351px] h-[359px] left-[23px] top-0 absolute">
            <Image
            src={nft}
            alt="nft"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
