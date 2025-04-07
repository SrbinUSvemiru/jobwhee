"use client";
import React from "react";

import ClientIcon from "./ClientIcon";
import Dropdown from "./Dropdown";
import SearchIcon from "./SearchIcon";
import TalentIcon from "./TalentIcon";

const SearchBar: React.FC<{ className: string }> = ({ className }) => {
  const [inputState, setInputState] = React.useState(
    "Find a job, talent or service"
  );
  return (
    <div
      className={`lg:px-[5px] lg:w-[555px] lg:h-[60px] md:w-[459px] md:rounded-[73px] sm:w-[462.5px] sm:h-[50px]  w-[335px] h-[50px]  z-10 px-1   items-center rounded-[60px] bg-white shadow-[0px_4px_28.3px_rgba(43,91,181,0.25)] ${className}`}
    >
      <div className="p-[2px] rounded-[50%] bg-gradient-to-r from-[#A5EC5E]  to-[#BDC502]">
        <button className="lg:w-[50px] lg:h-[50px] w-[41px] h-[41px] cursor-pointer flex justify-center items-center bg-black rounded-[50%]">
          <SearchIcon className=" lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" />
        </button>
      </div>

      <input
        className="h-[90%] ml-[13px] w-full text-[#737373] md:ml-[9px] lg:ml-[16px] lg:text-[16px] sm:text-[14px] text-[12px]"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <Dropdown
        isSearchBar={true}
        className="bg-white text-black w-[239px] py-2 px-[12px] right-0 md:-right-[190%] mt-[12px] md:mt-[6px]"
        iconEnabled={false}
        arrowClassName="w-[6.9px] ml-[7.8px]"
        arrowFill="#474747"
        descriptionClass="text-[11px] text-[#3F3C3C]"
        itemsClass="pt-[0px] pb-[5px]"
        hasLine={false}
        btnClassName="w-[88px] h-[41px] justify-center text-[#474747] bg-[#F0F1F4] border border-[#CDCDCD] text-[11.5px] rounded-[27.5px]"
        options={[
          {
            label: {
              value: "Talent",
              className: "text-[14px] leading-[20px] text-[#181818] text-[500]",
            },
            icon: <TalentIcon className=" w-[20px]" />,
            value: "Talent",
            description: "Hire professionals effortlessly.",
          },
          {
            label: {
              value: "Client",
              className: "text-[14px] text-[#181818] text-[500]",
            },
            icon: <ClientIcon className="w-[16px]" />,
            value: "Client",
            description: "Apply to jobs posted by clients",
          },
        ]}
      />
    </div>
  );
};

export default SearchBar;
