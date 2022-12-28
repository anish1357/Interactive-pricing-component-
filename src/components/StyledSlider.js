import { Slider} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "hsl(174, 77%, 80%)",
  height: 6,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
    backgroundColor: "hsl(174, 86%, 45%)",
    "&:focus, &:hover": {
      backgroundColor: "hsl(174, 77%, 65%)",
      boxShadow: "0px 0px 25px 6px hsl(174, 77%, 80%)",
    },
    "&:active": {
      backgroundColor: "hsl(174, 86%, 45%)",
      boxShadow: "0px 0px 25px 6px hsl(174, 77%, 80%)",
    },
    "& .arrow-images": {
      height: "40%",
      width: "60%",
      backgroundColor: "transparent",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "hsl(224, 65%, 95%)",
  },[theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 0.5),
  },
}));


export default StyledSlider;