import React from "react";
import Image from "next/image";
import ellipse from "../assets/Ellipse.svg";
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"

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
      <div className="w-[1512px] h-[982px] relative bg-gradient-to-b from-zinc-950 to-black">
        <div className="w-[439px] h-[560px] left-[1026px] top-[191px] absolute">
          <div className="w-[439px] h-[560px] left-0 top-0 absolute bg-stone-800 bg-opacity-70 rounded-[3px]" />
          <Image
            className="w-44 h-52 left-[27px] top-[92px] absolute"
            src={pro1}
            alt="pro1"
          ></Image>
          <Image
            className="w-44 h-52 left-[235px] top-[92px] absolute"
            src={pro2}
            alt="pro2"
          ></Image>
          <div className="w-[291px] h-[38px] left-[80px] top-[16px] absolute text-white text-[35px] font-normal font-['Inter']">
            CHOOSE WISELY
          </div>
          <div className="w-[322px] h-[38px] left-[74px] top-[339px] absolute text-white text-[35px] font-normal font-['Inter']">
            CREATE A PROFILE
          </div>
          <div className="w-[57px] h-3.5 left-[146px] top-[286px] absolute">
            <div className="w-[57px] h-[13px] left-0 top-0 absolute bg-purple-600" />
            <div className="w-[45.60px] h-[13px] left-[11.40px] top-[1px] absolute text-white text-[8px] font-normal font-['Inter']">
              Streamer
            </div>
          </div>
          <div className="w-[57px] h-3.5 left-[354px] top-[285px] absolute">
            <div className="w-[57px] h-[13px] left-0 top-0 absolute bg-purple-600" />
            <div className="w-[45.60px] h-[13px] left-[11.40px] top-[1px] absolute text-white text-[8px] font-normal font-['Inter']">
              Viewer
            </div>
          </div>
          <div className="w-[365px] h-[89px] left-[33px] top-[415px] absolute text-white text-[19px] font-normal font-['Inter']">
            Users are given choice to create a profile based on their intrst as
            viewer or streamer
          </div>
        </div>
        <div className="w-[439px] h-[560px] left-[1027px] top-[775px] absolute">
          <div className="w-[439px] h-[560px] left-0 top-0 absolute bg-stone-800 bg-opacity-70 rounded-[3px]" />
          <div className="w-[312px] h-[38px] left-[63px] top-[334px] absolute text-white text-[35px] font-normal font-['Inter']">
            START A STREAM
          </div>
          <div className="w-[365px] h-[89px] left-[37px] top-[414px] absolute text-white text-[19px] font-normal font-['Inter']">
            The Streamer can start stream from the dashboard. Thee users will be
            able to see the livestreeam on hompage.
          </div>
          <Image
            className="w-[348px] h-[257px] left-[45px] top-[43px] absolute"
            src={pro3}
            alt="pro3"
          ></Image>
        </div>
        <div className="w-[1446px] h-[104px] left-[44px] top-[24px] absolute">
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
        <div className="w-[891px] h-[145px] left-[44px] top-[143px] absolute">
          <div className="w-[274px] h-[59px] left-[107px] top-[43px] absolute text-center text-violet-400 text-[37px] font-bold font-['Inria Serif']">
            USER-1
          </div>
          <Image
            className="w-[145px] h-[145px] left-0 top-0 absolute rounded-full"
            src={ellipse}
            alt="elipse"
          ></Image>
          <div className="w-12 h-12 left-[843px] top-[31px] absolute" />
        </div>
        <div className="w-[712px] h-[287px] left-[199px] top-[364px] absolute">
          <div className="w-[709px] h-[287px] left-[3px] top-0 absolute bg-zinc-700 rounded-[5px]" />
          <div className="w-[647px] h-[100px] left-0 top-[25px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
            This is a user and I am watching livstram
          </div>
        </div>
        <div className="w-[439px] h-[95px] left-[522px] top-[852px] absolute">
          <div className="w-[439px] h-[95px] left-0 top-0 absolute bg-purple-600 rounded-[5px]" />
          <div className="w-[397px] h-[57px] left-[21px] top-[26px] absolute text-center text-white text-[37px] font-bold font-['Inria Serif']">
            CREATE STREAM
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
