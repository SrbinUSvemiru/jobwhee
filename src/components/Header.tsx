import JobhweeLogo from "./JobhweeLogo";
import Dropdown from "./Dropdown";
import GreeceIcon from "./GreeceIcon";
import EnglishIcon from "./EnglishIcon";
import AppIcon from "./AppIcon";

function Header() {
  return (
    <header className="w-full z-50 lg:px-[13px] md:px-[11px] sm:px-[9.3px] px-[5px] flex justify-between lg:mb-[17px] md:mb-[14.17px] sm:mb-[20px] mb-[25px] bg-black lg:h-[74px] md:h-[62px] sm:h-[54px] h-[44px] max-w-[1440px] rounded-[145px]">
      <div className="flex items-center">
        <JobhweeLogo className="ml-[11px] lg:h-[27px] md:h-[22px]  h-[17px]  flex items-center" />
      </div>
      <div className=" whitespace-nowrap lg:gap-[33px] md:gap-[26px] sm:gap-[15px] lg:text-[16px]  md:text-[14px]  text-[12px] sm:flex hidden">
        <button>Post a Job</button>
        <button>Explore Jobs</button>
        <button>How It Works</button>
      </div>
      <div className="flex gap-1.5 items-center justify-end">
        <Dropdown
          itemsClass="py-[8px]"
          arrowFill="white"
          arrowClassName="w-[6.9px] ml-[7.8px]"
          options={[
            { label: { value: "English" }, icon: <EnglishIcon />, value: "EN" },
            { label: { value: "Greece" }, icon: <GreeceIcon />, value: "GR" },
          ]}
          btnClassName="w-[95px] px-[9px] sm:flex hidden lg:h-12 md:h-[40px] sm:h-[40px] justify-start text-white border border-[#94949480] rounded-[39px]  sm:rounded-[32.5px]"
          className="bg-black w-[131px] border border-[#94949480] left-1/2 -translate-x-1/2 mt-[9px]"
        />
        <button className="w-[122px] md:w-[100px]   sm:w-[100px] lg:h-12 md:h-[40px] sm:h-[40px] text-white border border-[#94949480] md:text-[14px] text-[12px] rounded-[39px] sm:rounded-[32.5px] sm:block hidden">
          Sign In
        </button>
        <button className="lg:w-[122px] md:w-[100px] sm:w-[100px] lg:h-12 md:h-[40px] sm:h-[40px] h-[34px] text-black bg-white md:text-[14px] text-[12px] md:rounded-[39px] sm:rounded-[32.5px] rounded-[32.5px] w-[90px]">
          Sign Up
        </button>
        <button className="w-[33px] h-[33px]  items-center justify-center flex sm:hidden text-black bg-white  rounded-[50%]">
          <AppIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
