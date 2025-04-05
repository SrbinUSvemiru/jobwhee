"use client";

const GreeceIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2_1358"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_1358)">
          <path d="M0 0H36.072V24.048H0V0Z" fill="#1960AD" />
        </g>
        <mask
          id="mask1_2_1358"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_1358)">
          <path
            d="M36.072 21.3761H0V18.7041H36.072V21.3761ZM36.072 16.0319H0V13.36H5.34415V8.01617H0V5.34415H5.34415V0H8.01614V5.34415H13.3599V8.01614H8.01617V13.3599H36.072V16.0319ZM36.072 10.688H13.3599V8.01602H36.072V10.688ZM36.072 5.34391H13.3599V2.6719H36.072V5.34391Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default GreeceIcon;
