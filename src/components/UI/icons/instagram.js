const Instagram = () => {
  return (
    <svg
      width="83"
      height="83"
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_147_693)">
        <circle cx="41.5" cy="39.5" r="34.5" fill="white" />
      </g>
      <rect
        x="23.5"
        y="21.5"
        width="37"
        height="37"
        rx="8.5"
        stroke="black"
        strokeWidth="3"
      />
      <circle cx="42" cy="40" r="8.5" stroke="black" strokeWidth="3" />
      <circle cx="52" cy="29" r="2" fill="black" />
      <defs>
        <filter
          id="filter0_d_147_693"
          x="0"
          y="0"
          width="83"
          height="83"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_147_693"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.291667 0 0 0 0 0.291667 0 0 0 0 0.291667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_147_693"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_147_693"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Instagram;
