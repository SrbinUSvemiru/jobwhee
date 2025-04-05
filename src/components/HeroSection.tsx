import PlayIcon from "./PlayIcon";
import SearchBar from "./SearchBar";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex-col aspect-[1440/720] rounded-[50px] items-center justify-end relative">
      <div
        className="absolute inset-0 z-[0] w-full h-full top-0 left-0"
        style={{
          backgroundImage: "url('hero-section-bc.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maskImage: "url('hero_background_clip.svg')",
          maskSize: "contain",
          maskRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full flex justify-between z-10 h-[50%]">
        <div
          className="px-7 z-10 py-9 w-[567px] h-[191px] text-[40px] ml-[40px] mt-[40px] flex-col items-start justify-center font-[800]  text-center leading-[61px] text-white text-3xl 
        bg-white/10 backdrop-blur-[80px] whitespace-nowrap"
          style={{
            maskImage: "url('hero_one.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          <p className="w-fit">
            FIND THE <span className="text-lime-300">TALENT</span> SIGN UP
          </p>
          <p className="w-fit">
            & GET THE <span className="text-lime-300">JOB DONE</span>
          </p>
        </div>
        <div className="relative w-fit h-fit mr-[57px] mt-[121px]">
          <div
            className="pr-[33px] pt-[33px] w-[496px] h-[145px] pl-[61.5px] pb-[45px] text-[40px] flex justify-center items-center font-[800] text-center leading-[61px] text-white text-3xl 
        bg-white/10 backdrop-blur-[80px]"
            style={{
              maskImage: "url('hero_two.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <p>
              WELL <span className="text-lime-300">HANDLE</span> THAT
            </p>
          </div>
          <div className="absolute bottom-0 w-full translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-end gap-2.5">
            <button className="flex items-center whitespace-nowrap justify-center  text-black w-[222px] h-[51px]  font-[500]  bg-[#CBEC5E] text-[16px] rounded-[40px]">
              Sign Up For Contract
            </button>

            <button className="flex items-center  justify-center  text-black w-[51px] h-[51px] font-[500]  bg-white text-[16px] rounded-[40px] mr-[45px]">
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-end h-[50%] z-10">
        <SearchBar />
        <div className=" flex gap-x-[8.7px] mt-[17px] mb-[16px] z-10">
          <div className="rounded-[50%] bg-[#CBEC5E] w-[11.85px] h-[11.85px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] w-[11.85px] h-[11.85px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] w-[11.85px] h-[11.85px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] w-[11.85px] h-[11.85px]" />
          <div className="rounded-[50%] bg-[#CBEC5E6B] w-[11.85px] h-[11.85px]" />
        </div>
        <div className=" w-[355px] mb-[31px] z-[1] h-[62px] rounded-[61px] bg-white shadow-[0px_4px_28.3px_rgba(43,91,181,0.25)] flex items-center justify-center">
          <p className="text-black text-[20px] font-[800]">
            EDUCATION AND TUTORING
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
