import React from "react";

import { Box,  Typography } from "@mui/material";
import check from "../images/icon-check.svg"

import { useTheme } from "@mui/material/styles";
const ListItem= ({ text }) =>{

    const  theme = useTheme();
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },
    }}>
      
      <img src={check} alt="tick-icon" />
      <Typography
        variant="subtitle1"
        component="p"
       sx={{
        fontSize: "15px",
        marginLeft: theme.spacing(1.5),
        color: "hsl(225, 20%, 60%)",
        fontFamily: "Manrope, sans-serif",
        fontWeight: 400,
      }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default ListItem;