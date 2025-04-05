"use client";

import JobhweeLogo from "./JobhweeLogo";
import Dropdown from "./Dropdown";
import GreeceIcon from "./GreeceIcon";
import EnglishIcon from "./EnglishIcon";

function Header() {
  return (
    <header className="w-full z-50 p-[13px] grid grid-cols-3 mb-[17px] bg-black h-[74px] max-w-[1440px] rounded-[145px]">
      <div className="flex items-center">
        <JobhweeLogo className="ml-[11px]" />
      </div>
      <div className="flex gap-[34px] justify-center">
        <button>Post a Job</button>
        <button>Explore Jobs</button>
        <button>How It Works</button>
      </div>
      <div className="flex gap-1.5 justify-end">
        <Dropdown
          itemsClass="py-[8px]"
          options={[
            { label: { value: "English" }, icon: <EnglishIcon />, value: "EN" },
            { label: { value: "Greece" }, icon: <GreeceIcon />, value: "GR" },
          ]}
          btnClassName="min-w-[95px] h-12 justify-start text-white border border-[#94949480] text-[14px] rounded-[39px]"
          className="bg-black border border-[#94949480] "
        />
        <button className="min-w-[122px] h-12 text-white border border-[#94949480] text-[14px] rounded-[39px]">
          Sign In
        </button>
        <button className="min-w-[122px] h-12 text-black bg-white text-[14px] rounded-[39px]">
          Sign Up
        </button>
      </div>
    </header>
  );
}
/* Group 34080 */

/* Group 34081 */

export default Header;
