import React from "react";
import Image from "next/image";
import videocalls from "../public/videocalls.svg";
import videocall from "../public/videocall.png";
import NFTcard1 from "../public/NFTcard1.png";
import NFTcard2 from "../public/NFTcard2.png";
import Msgbox from "../public/Msgbox.png";
import Hello from "../public/hello.svg";
import man from "../public/man.svg";
import card from "../public/Group6.svg";
import levi from "../public/Rectangle2.png";
import profile1 from "../public/profile1.svg";
import profile2 from "../public/profile2.svg";
import profile3 from "../public/profile3.svg";

const page = () => {
  return (
    <div>
      <Main></Main>
    </div>
  );
};

const Main = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-black">
      <div className="w-[1421px] h-[104px] relative flex">
        <div className="w-[311px] h-[104px] left-0 top-0 absolute text-center text-white text-[69px] font-normal font-['Nico Moji']">
          SWITCH
        </div>
        <div className="w-[125px] h-[45px] left-[857px] top-[18px] absolute text-center text-white text-[34px] font-normal font-['Inter']">
          HOME
        </div>
        <div className="w-[252px] h-[45px] left-[1169px] top-[20px] absolute text-center text-white text-[34px] font-normal font-['Inter']">
          CONTACT US
        </div>
        <div className="w-[125px] h-[45px] left-[1013px] top-[20px] absolute text-center text-white text-[34px] font-normal font-['Inter']">
          ABOUT
        </div>
      </div>

      <div className="w-[809px] h-[475px] relative">
        <div className="w-[759px] h-[103px] left-0 top-0 absolute text-center text-white text-[70px] font-bold font-['Inria Serif']">
          Unlocking a World of{" "}
        </div>
        <div className="w-[686px] h-32 left-0 top-[125px] absolute text-center text-white text-[53px] font-bold font-['Inria Serif']">
          Streaming Possibilities with{" "}
        </div>
        <div className="w-[477px] h-[93px] left-[141px] top-[275px] absolute text-center text-red-50 text-[53px] font-bold font-['Inria Serif']">
          NFT Token Gating
        </div>
        <div className="w-[809px] h-[87px] left-0 top-[388px] absolute text-center">
          <span className="text-white text-[29px] font-normal font-['Inria Serif']">
            Watch Exclusive{" "}
          </span>
          <span className="text-amber-200 text-[29px] font-bold font-['Inria Serif']">
            live streams
          </span>
          <span className="text-white text-[29px] font-normal font-['Inria Serif']">
            {" "}
            with{" "}
          </span>
          <span className="text-amber-200 text-[29px] font-bold font-['Inria Serif']">
            superchats
          </span>
          <span className="text-white text-[29px] font-normal font-['Inria Serif']">
            {" "}
            and buy NFTs from your favourite creator
          </span>
        </div>
      </div>

      <div className="w-[315px] h-[392px] left-[946px] top-[227px] absolute">
        <Image src={NFTcard1} alt="card1"></Image>
      </div>

      <div className="w-[315px] h-[392px] left-[1150px] top-[397px] absolute">
        <Image src={NFTcard2} alt="card1"></Image>
      </div>

      <div className="flex m-8 space-x-26">
        <button className="p-8 hover:text-lg rounded-md m-8 bg-gradient-to-bl from-slate-900 to-purple-700">
          ENTER DAPP
        </button>
        <div>
          <button className="p-8 hover:text-lg rounded-md m-8 bg-gradient-to-bl from-slate-900 to-purple-700">
            KNOW MORE
          </button>
        </div>
      </div>

      <div className="mt-20">
        <div>
          <div className="w-[841px] h-[431px] relative mx-auto">
            <div className="w-[759px] h-[103px] left-0 top-0 absolute text-center text-white text-[70px] font-bold font-['Inria Serif']">
              Unlocking a World of{" "}
            </div>
            <div className="w-[499px] h-[104px] left-[148px] top-[105px] absolute text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#F60202] text-[61px] font-bold font-['Inria Serif']">
              Live Streaming
            </div>
            <div className="w-[774px] h-[215px] left-[67px] top-[216px] absolute text-center text-white text-[22px] font-bold font-['Inria Serif']">
              Live streaming through NFT token gating represents a cutting-edge
              fusion of digital content and blockchain technology. With this
              innovative approach, content creators can offer exclusive and
              limited access to their live streams by leveraging non-fungible
              tokens (NFTs) as digital keys. These NFTs, often obtained through
              auctions or purchases, grant viewers special privileges, such as
              real-time access to live events, interactive engagement with
              creators, or unique behind-the-scenes experiences.
            </div>
          </div>
        </div>
        <div className="m-10 p-4 left-6 space-x-80 flex">
          <Image src={videocalls} alt="img"></Image>
          <Image src={videocall} alt="img" className="ml-8"></Image>
        </div>
      </div>

      <div className="w-[463px] h-[676px] flex space-x-18">
        <Image src={Msgbox} alt="MSGbox"></Image>
        <div className="w-[802px] h-[403px] relative flex-col">
          <div className="w-[768px] h-[177px] left-0 top-0 absolute text-center text-violet-400 text-[61px] font-bold font-['Inria Serif']">
            Live Streaming
            <br />
            with Superchats and chats
            <br />
          </div>
          <div className="w-[760px] h-[181px] left-[42px] top-[222px] absolute text-center p-8">
            <span className="text-white text-[34px] font-normal font-['Inria Serif']">
              Viewers can send Chats and superchats to their favourite creators
              without any intermediary fees.
            </span>
          </div>
          <div className="w-[616px] h-[449px] relative"></div>
        </div>
      </div>

      <div>
        <div className="w-[1037px] h-[688px] relative">
          <div className="w-[1030px] h-[104px]  mx-auto justify-center text-center text-violet-400 text-[56px] font-bold font-['Inria Serif']">
            GET STARTED
          </div>
          <div className="w-[1037px] h-[561px] left-0 top-[127px] space-x-56 absolute">
            <div className="w-[439px] h-[560px] left-40 top-0 absolute">
              <div className="w-[439px] h-[560px] left-0 top-0 absolute bg-stone-800 bg-opacity-70 rounded-[3px] space-x-10" />
              <Image
                className="w-44 h-52 left-[27px] top-[92px] absolute"
                src={profile1}
                alt="NAME"
              ></Image>
              <Image
                className="w-44 h-52 left-[235px] top-[92px] absolute"
                src={profile2}
                alt="NAME"
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
                Users are given choice to create a profile based on their intrst
                as viewer or streamer
              </div>
            </div>
            <div className="w-[439px] h-[560px] left-[598px] top-[1px] absolute">
              <div className="w-[439px] h-[560px] left-0 top-0 absolute bg-stone-800 bg-opacity-70 rounded-[3px]" />
              <div className="w-[312px] h-[38px] left-[63px] top-[334px] absolute text-white text-[35px] font-normal font-['Inter']">
                START A STREAM
              </div>
              <div className="w-[365px] h-[89px] left-[37px] top-[414px] absolute text-white text-[19px] font-normal font-['Inter']">
                The Streamer can start stream from the dashboard. Thee users
                will be able to see the livestreeam on hompage.
              </div>
              <Image
                className="w-[348px] h-[257px] left-[45px] top-[43px] absolute"
                src={profile3}
                alt="NAME"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
