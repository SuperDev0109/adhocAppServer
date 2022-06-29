const ToggleButton = () => {
  
  return (
    <svg
      width="38"
      height="29"
      viewBox="0 0 38 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="toggleButton"
      
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="36.5"
        y2="1.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="8.5"
        y1="14.5"
        x2="36.5"
        y2="14.5"
        stroke="#FFB800"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="27.5"
        x2="36.5"
        y2="27.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default ToggleButton;
