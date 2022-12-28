import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 4,
  margin: theme.spacing(0, 1),
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: "hsl(174, 86%, 45%)",
      },
    },
    "&:hover": {
      "& + .MuiSwitch-track": {
        backgroundColor: "hsl(174, 86%, 45%)",
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 44 / 2,
    backgroundColor: "hsl(223, 50%, 87%)",
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