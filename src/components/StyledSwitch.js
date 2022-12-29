import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSwitch = styled(Switch)(({ theme,mode }) => ({
  padding: 4,
  margin: theme.spacing(0, 1),
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: mode==="light"?"hsl(174, 86%, 45%)":"hsl(208, 61%, 44%)",
      },
    },
    "&:hover": {
      "& + .MuiSwitch-track": {
        backgroundColor:  mode==="light"?"hsl(174, 86%, 45%)":"hsl(208, 61%, 44%)",
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 44 / 2,
    backgroundColor: mode==="light"?"hsl(223, 50%, 87%)":"hsl(215, 65%, 36%)",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    color: "#FFFFFF",
    width: 20,
    height: 20,
    margin: 0.5,
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 0.5),
  },
}));

export default StyledSwitch;