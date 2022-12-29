import { Slider} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)(({ theme,mode }) => ({
  color: mode==="light" ?"hsl(174, 77%, 80%)":"hsl(208, 61%, 44%)",
  height: 6,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
    backgroundColor: mode === "light" ?"hsl(174, 86%, 45%)":"hsl(211, 70%, 26%)",
    "&:focus, &:hover": {
      backgroundColor: mode === "light" ?"hsl(174, 77%, 65%)":"hsl(208, 61%, 44%)",
      boxShadow: mode === "light" ?"0px 0px 25px 6px hsl(174, 77%, 80%)":"0px 0px 25px 6px hsl(208, 77%, 80%)",
    },
    "&:active": {
      backgroundColor: mode === "light" ?"hsl(174, 86%, 45%)":"hsl(215, 65%, 36%)",
      boxShadow: mode === "light" ?"0px 0px 25px 6px hsl(174, 77%, 80%)":"0px 0px 25px 6px hsl(208, 77%, 80%)",
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