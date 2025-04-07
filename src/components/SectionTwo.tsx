import StarIcon from "./StarIcon";
import VerifiedIcon from "./VerifiedIcon";

const SectionTwo: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[70px]">
      <div className="flex items-center md:h-[51px] sm:h-[46px] h-[28px] lg:mb-[77px] md:mb-[54px] sm:mb-[34px] mb-[8px]">
        <div className="bg-[#C0D724] rounded-[3px] sm:h-[14px] sm:w-[14px] h-[10px] w-[10px] md:mr-[15px] sm:mr-[13px] mr-[10px]" />
        <h1 className="text-black md:text-[30px] sm:text-[26px]  text-[20px] font-[800] leading-[100%]">
          TOP TALENTS{" "}
          <span className="relative sm:after:h-[5px] sm:after:bottom-[-6px] after:content-[''] after:h-[2px] after:w-full after:bg-[#C0D724] after:absolute after:bottom-[0px] after:left-0 after:rounded-[19px] ">
            READY TO HELP
          </span>
        </h1>
      </div>
      <div className="flex flex-col w-full md:justify-between md:flex-row md:items-start items-center">
        <div className="grid w-fit grid-cols-2 gap-x-[20px] lg:gap-y-[44px] sm:gap-y-[27px] gap-y-[10px] sm:grid-cols-3 ">
          <div className=" flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_1.jpeg" className="w-full" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
          <div className="lg:mt-[12px] mt-[10px] flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_2.jpeg" className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
          <div className=" flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_3.jpeg" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
          <div className="sm:mt-[0px] mt-[10px] flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_4.jpeg" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
          <div className="lg:mt-[12px] sm:mt-[10px] flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_5.jpeg" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
          <div className="sm:mt-[0px] mt-[10px] flex lg:gap-[12px] gap-[8px] flex-col items-center lg:pt-[18px] pt-[13px] lg:w-[223px] lg:h-[276px] lg:rounded-[20px] sm:rounded-[16px] sm:w-[183px] sm:h-[230px] w-[158px] h-[230px] rounded-[12px] bg-white">
            <div className="flex items-center justify-center lg:w-[116px] lg:h-[116px] h-[94px] w-[94px] rounded-[50%] bg-[#87A1C0]">
              <div className="lg:w-[113px] lg:h-[113px] w-[90px] h-[90px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img src="grid_6.jpeg" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="lg:text-[18px] sm:text-[16px] text-center leading-[16px] text-[14px] text-black font-[600]">
              Ioanna Spirou <br />{" "}
              <span className="lg:text-[14px] text-[12px] text-[#A5A5A5] font-[400]">
                {" "}
                Beauty and Wellness
              </span>
            </p>

            <div className="lg:w-[62px] lg:h-[26px] w-[52px] h-[22px] bg-[#F0F1F4] rounded-[40px] flex justify-center items-center">
              <StarIcon width={12} height={12} />
              <p className="text-black lg:text-[14px] text-[12px] font-[700] ml-[2px]">
                4.9
              </p>
            </div>
            <div className="flex self-start items-start ml-[10px]">
              <div className="lg:mt-[0px] mt-[3px]">
                <VerifiedIcon width={13} height={13} />
              </div>
              <p className="text-[#487C27] w-fit text-[12px] font-[400] ml-[2px]">
                <span className="font-[600]">Verified Talent</span> in
                Cosmetology
              </p>
            </div>
          </div>
        </div>
        <div className="md:mt-[0px] sm:mt-[66px] mt-[50px] md:max-w-[470px]">
          <h2 className="md:text-[42px] md:leading-[56px] sm:text-[28px] text-[20px] text-black leading-[36px] font-[500]">
            Work with top talents across industries for success
          </h2>
          <p className="md:text-[20px] md:leading-[31px] text-[16px] text-[#545454] leading-[24px] font-[400] lg:mt-[52px] md:mt-[42px] sm:mt-[18px] mt-[10px]">
            Discover top talents across various industries—talents who are ready
            to make your life easier, provide essential services, or grow your
            business.
          </p>
          <div className="flex gap-[7px] sm:gap-[19px] lg:mt-[27px] md:mt-[8.3px] sm:mt-[36px] mt-[24px]">
            <button className="flex items-center whitespace-nowrap justify-center   text-black   sm:w-[122px] sm:h-[48px] w-[98px] h-[40px]  font-[500]  bg-[#CBEC5E] sm:text-[14px] text-[12px] sm:rounded-[39px] rounded-[22px]">
              Sign Up
            </button>
            <button className="flex items-center whitespace-nowrap justify-center   text-white    sm:w-[142px] sm:h-[48px] w-[112px] h-[40px]  font-[500] sm:text-[14px] bg-black text-[12px] rounded-[22px]">
              Contact Us
            </button>
          </div>
          <div className="gap-y-[11px] w-full  flex flex-col sm:mt-[26px] mt-[35px]">
            <div className="flex w-full">
              <div className="flex  lg:w-[26px] items-center w-[21px] mr-[10.8px]">
                <img src="correct.png" className="w-full" />
              </div>
              <p className="text-black lg:text-[18px] text-[16px]  font-[500]">
                Diverse Industry Specialists
              </p>
            </div>
            <div className="flex lg:gap-[16px] gap-[11px]">
              <div className="flex items-center ] lg:w-[26px] w-[21px]  mr-[10.8px]">
                <img src="correct.png" className="w-full" />
              </div>
              <p className="text-black lg:text-[18px] text-nowrap text-[16px] font-[500]">
                On-Demand Talent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
