"use client";

import ClientIcon from "./ClientIcon";
import Dropdown from "./Dropdown";
import SearchIcon from "./SearchIcon";
import TalentIcon from "./TalentIcon";

const SearchBar: React.FC = () => {
  return (
    <div className="w-[555px] z-10 px-1 h-[60px] flex items-center rounded-[73px] bg-white">
      <div className="p-[2px] rounded-[50%] bg-gradient-to-r from-[#A5EC5E]  to-[#BDC502]">
        <button className="w-[50px] h-[50px] cursor-pointer flex justify-center items-center bg-black rounded-[50%]">
          <SearchIcon />
        </button>
      </div>

      <input
        className="h-[90%] ml-4 w-full text-[#737373] text-[16px]"
        value={"Find a job, talent or service"}
      />
      <Dropdown
        className="bg-white text-black py-2 px-[12px]"
        iconEnabled={false}
        arrowFill="#474747"
        descriptionClass="text-[14px] text-[#3F3C3C]"
        itemsClass="pt-[0px] pb-[5px]"
        hasLine={false}
        btnClassName="min-w-[122px] h-[52px] justify-center text-[#474747] bg-[#F0F1F4] border border-[#CDCDCD] text-[14px] rounded-[27.5px]"
        options={[
          {
            label: {
              value: "Talent",
              className: "text-[16px] text-[#181818] text-[500]",
            },
            icon: <TalentIcon className="w-[22px] h-[22px] " />,
            value: "Talent",
            description: "Hire professionals effortlessly.",
          },
          {
            label: {
              value: "Client",
              className: "text-[16px] text-[#181818] text-[500]",
            },
            icon: <ClientIcon />,
            value: "Client",
            description: "Apply to jobs posted by clients",
          },
        ]}
      />
    </div>
  );
};

export default SearchBar;
