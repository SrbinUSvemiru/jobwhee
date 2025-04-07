import PlayIcon from "./PlayIcon";
import SearchBar from "./SearchBar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex">
      <div className="w-full min-h-[285px] flex flex-col   aspect-[1440/720] lg:rounded-[50px] sm:rounded-[41px] rounded-[17.9px] items-center justify-end relative  lg:pl-[40px]  md:pl-[33.37px] pl-[24px] lg:pt-[40px] md:pt-[33.45px] pt-[27px] md:pr-[47.5px] lg:pr-[57px] pr-[24px] overflow-hidden">
        <div
          className="absolute sm:mask-size-[100%_100%] mask-size-[120%_100%] inset-0 z-[0] top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 mask-[url(/hero_background_clip.svg)] w-full h-full"
          style={{
            backgroundImage: "url('hero-section-bc.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskRepeat: "no-repeat",

            maskPosition: "center",
          }}
        ></div>
        <div className="w-full flex justify-between z-10  grow">
          <div
            className="relative z-10   text-white 
         whitespace-nowrap items-end aspect-[568/191]  justify-start sm:flex hidden  lg:h-[191px] lg:w-[567px]  md:h-[159px] md:w-[472px] h-[107px] w-[299px]"
          >
            <div
              className="bg-white/10  left-0 bottom-0 absolute backdrop-blur-[80px] inset-0"
              style={{
                maskImage: "url('hero_one.svg')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
            <div className="flex items-center lg:mb-[34px] lg:ml-[28px]  md:mb-[33.45px] md:ml-[31.63px] mb-[15px] ml-[20px]">
              <p className="relative z-10 lg:text-[40px]  md:text-[30px] text-[20px]  lg:leading-[61px] md:leading-[50px] sm:leading-[40px] leading-[100%] font-[800]">
                FIND THE <span className="text-lime-300">TALENT</span> SIGN UP
                <br />& GET THE <span className="text-lime-300">JOB DONE</span>
              </p>
            </div>
          </div>
          <div className="relative w-fit h-fit  self-end mb-hero-clamp-mb-element-two">
            <div className=" aspect-[497/145] relative   justify-start  font-[800] lg:leading-[61px] md:leading-[50px] text-white sm:flex items-start hidden lg:w-[496.5px] lg:h-[145px] md:w-[413px] md:h-[120px]  w-[289px] h-[85px]  ">
              <div
                className="bg-white/10  left-0 bottom-0 absolute backdrop-blur-[80px] inset-0"
                style={{
                  maskImage: "url('hero_two.svg')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              <div className="w-fit lg:h-[67px] md:h-[56px] h-[30px] flex items-center lg:mt-[33px]  lg:ml-[61.5px] md:ml-[73px] ml-[42px] md:mt-[20px] mt-[18px]">
                <p className="w-fit  relative z-10 lg:text-[40px]  md:text-[30px] text-[20px]  lg:leading-[66px] md:leading-[55px] sm:leading-[40px] leading-[100%] font-[800] ">
                  WELL <span className="text-lime-300">HANDLE</span> THAT
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 w-full translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-end gap-[10px] lg:pr-[45px] md:pr-[26.52px] pr-[16.75px]">
              <button className="sm:flex hidden items-center whitespace-nowrap justify-center md:text-[16px]  text-black md:w-[222px] md:h-[51px] w-[175px] h-[40px]  font-[500]  bg-[#CBEC5E] text-[12px] rounded-[33px]">
                Sign Up For Contract
              </button>

              <button className="sm:flex items-center  justify-center  text-black md:w-[51px] md:h-[51px] w-[40.5px] h-[40.5px] font-[500]  bg-white text-[16px] rounded-[50%]  hidden">
                <PlayIcon className="md:h-[15px] h-[12px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-hero-clamp left-1/2 -translate-x-1/2 w-full  flex flex-col items-center justify-end  mt-auto z-10">
        <SearchBar className="sm:flex hidden" />
        <div className=" flex lg:gap-x-[8.69px] md:gap-x-[7.24px] gap-x-[5.24px] mt-[17px] lg:mb-[16px] md:mb-[13px] sm:mb-[11.86px] mb-[9.86px] z-10">
          <div className="rounded-[50%] bg-[#CBEC5E]  lg:w-[11.85] lg:h-[11.85] md:w-[9.8px] md:h-[9.8px] w-[7.15px] h-[7.15px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] lg:w-[11.85] lg:h-[11.85] md:w-[9.8px] md:h-[9.8px] w-[7.15px] h-[7.15px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] lg:w-[11.85] lg:h-[11.85] md:w-[9.8px] md:h-[9.8px] w-[7.15px] h-[7.15px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] lg:w-[11.85] lg:h-[11.85] md:w-[9.8px] md:h-[9.8px] w-[7.15px] h-[7.15px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] lg:w-[11.85] lg:h-[11.85] md:w-[9.8px] md:h-[9.8px] w-[7.15px] h-[7.15px]" />
        </div>
        <div className=" lg:w-[355px] lg:h-[62px] md:w-[338px] md:h-[52px] sm:w-[241px] sm:h-[46px] w-[207px] h-[40px] mb-[0] z-[1] rounded-[50px] bg-white shadow-[0px_4px_28.3px_rgba(43,91,181,0.25)] flex items-center md:rounded-[73px] justify-center ">
          <p className="text-black lg:text-[20px] md:text-[18px] sm:text-[14px] text-[12px] font-[700] leading-[26px]">
            EDUCATION AND TUTORING
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
/* We`ll handle that */
