const ArrowDownIcon = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 10 6"
        fill="none"
        style={{ height: "100%", width: "auto" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.47019 5.61966L0.227437 1.37691L1.28794 0.316406L5.00044 4.02891L8.71294 0.316406L9.77344 1.37691L5.53069 5.61966C5.39004 5.76026 5.19931 5.83925 5.00044 5.83925C4.80156 5.83925 4.61083 5.76026 4.47019 5.61966Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
