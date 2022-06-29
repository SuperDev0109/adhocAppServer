import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  
window.scrollTo(0, 0);
  

  return <>{props.children}</>
};

export default ScrollToTop;