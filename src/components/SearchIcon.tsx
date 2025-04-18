const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M22.0727 22.0727L18.0392 18.0392M20.0559 11.9889C20.0559 14.1284 19.206 16.1803 17.6932 17.6932C16.1803 19.206 14.1284 20.0559 11.9889 20.0559C9.8494 20.0559 7.79752 19.206 6.28466 17.6932C4.77179 16.1803 3.92188 14.1284 3.92188 11.9889C3.92188 9.8494 4.77179 7.79752 6.28466 6.28466C7.79752 4.77179 9.8494 3.92188 11.9889 3.92188C14.1284 3.92188 16.1803 4.77179 17.6932 6.28466C19.206 7.79752 20.0559 9.8494 20.0559 11.9889Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
