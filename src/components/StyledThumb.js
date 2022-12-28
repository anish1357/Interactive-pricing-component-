import { SliderThumb } from "@mui/material";
import sliderlogo from "../images/icon-slider.svg"
const CustomThumb = (props) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
     
      <img
        alt="slider-icon"
        src={sliderlogo}
        className="arrow-images"
      />
    </SliderThumb>
  );
};

export default CustomThumb;