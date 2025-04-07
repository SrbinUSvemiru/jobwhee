import HeroSection from "@/components/HeroSection";
import Header from "../../../components/Header";
import PlayIcon from "@/components/PlayIcon";
import SearchBar from "@/components/SearchBar";
import SectionTwo from "@/components/SectionTwo";

function Home() {
  return (
    <div className="relative max-w-[1440px]">
      <Header />
      <HeroSection />
      <div className="w-full flex flex-col items-center sm:h-[0px] sm:mt-[0px] mt-[36px]">
        <div
          className="relative z-10   text-white 
         whitespace-nowrap items-end aspect-[568/191] mb-[13px]  justify-start flex sm:hidden  lg:h-[191px] lg:w-[567px]  md:h-[159px] md:w-[472px] h-[107px] w-[299px]"
        >
          <div
            className="bg-[#546B868A]  left-0 bottom-0 absolute backdrop-blur-[67px] inset-0"
            style={{
              maskImage: "url('hero_one.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
          <div className="flex items-center lg:mb-[34px] lg:ml-[28px]  md:mb-[33.45px] md:ml-[31.63px] mb:sm-[15px] mb-[35px] ml-[20px]">
            <p className="relative z-10 lg:text-[40px]  md:text-[30px] text-[20px]  lg:leading-[61px] md:leading-[50px] sm:leading-[40px] leading-[100%] font-[800]">
              FIND THE <span className="text-lime-300">TALENT</span> SIGN UP
              <br />& GET THE <span className="text-lime-300">JOB DONE</span>
            </p>
          </div>
        </div>
        <div className="relative w-fit flex h-fit mb-[54px] ">
          <div className=" aspect-[497/145] relative   justify-start  font-[800] lg:leading-[61px] md:leading-[50px] text-white flex items-start sm:hidden lg:w-[496.5px] lg:h-[145px] md:w-[413px] md:h-[120px]  w-[289px] h-[85px]  ">
            <div
              className="bg-[#546B868A]  left-0 bottom-0 absolute backdrop-blur-[67px] inset-0"
              style={{
                maskImage: "url('hero_two.svg')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
            <div className="w-fit lg:h-[67px] md:h-[56px] h-[30px] flex items-center lg:mt-[33px]  lg:ml-[61.5px] md:ml-[73px] ml-[42px] md:mt-[20px] sm:mt-[18px] mt-[12px]">
              <p className="w-fit  relative z-10 lg:text-[40px]  md:text-[30px] text-[20px]  lg:leading-[66px] md:leading-[55px] sm:leading-[40px] leading-[100%] font-[800] ">
                WELL <span className="text-lime-300">HANDLE</span> THAT
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-end gap-[10px] lg:pr-[45px] md:pr-[26.52px] pr-[16.75px]">
            <button className="flex sm:hidden items-center whitespace-nowrap justify-center md:text-[16px]  text-black md:w-[222px] md:h-[51px] w-[175px] h-[40px]  font-[500]  bg-[#CBEC5E] text-[12px] rounded-[33px]">
              Sign Up For Contract
            </button>

            <button className="flex items-center  justify-center  text-black md:w-[51px] md:h-[51px]  w-[39.5px] h-[39.5px] font-[500]  bg-[#E0E0E0] text-[16px] rounded-[50%]  sm:hidden">
              <PlayIcon className="md:h-[14px] sm:h-[11px] h-[10.75px]" />
            </button>
          </div>
        </div>
        <SearchBar className="flex sm:hidden sm:mt-[0px]" />
      </div>
      <SectionTwo />
    </div>
  );
}

export default Home;
