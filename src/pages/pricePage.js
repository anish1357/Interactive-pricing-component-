import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Hidden,
  useMediaQuery,
  Button,
} from "@mui/material";

import circles from "../images/pattern-circles.svg"
import circlesdk from "../images/pattern-circles-dk.svg"
import background from "../images/bg-pattern.svg"
import backgrounddk from "../images/bg-pattern-dk.svg"
import ListItem from "../components/ListItem";
import { useTheme } from "@mui/material/styles";
import StyledSwitch from "../components/StyledSwitch";
import StyledSlider from "../components/StyledSlider";
import CustomThumb from "../components/StyledThumb";
const prices = [
  { price: "8.00", pageviews: "10K", yearly: "6.00" },
  { price: "12.00", pageviews: "50K", yearly: "9.00" },
  { price: "16.00", pageviews: "100K", yearly: "12.00" },
  { price: "24.00", pageviews: "500K", yearly: "18.00" },
  { price: "36.00", pageviews: "1M", yearly: "27.00" },
];

const InteractivePricing = ({mode}) => {
  const [isYearly, setIsYearly] = useState(false);
  const [planSelected, setPlanSelected] = useState(2);
  const [price, setPrice] = useState(null);
  const [pageViews, setPageViews] = useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let { price, pageviews,} = prices[planSelected];
    setPrice(price);
    setPageViews(pageviews);
  }, [planSelected]);

  useEffect(() => {
    let { price,  yearly } = prices[planSelected];
    if (isYearly) {
      setPrice(yearly);
    } else {
      setPrice(price);
    }
  }, [isYearly, planSelected]);

  return (
    <div role="main">
      <Box
        sx={{
          height: "100vh",
          background: `url(${mode ==="light" ? background : backgrounddk})`,
          backgroundSize: "100% 50%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            height: "100%",
            justifyContent: "flex-start",
          },
        }}
      >
        <Box
          sx={{
            background: `url(${mode ==="light" ? circles : circlesdk})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            textAlign: "center",
            padding: theme.spacing(10, 0),
            [theme.breakpoints.down("md")]: {
              padding: theme.spacing(10, 1),
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              marginBottom: theme.spacing(1),
              fontSize: "30px",
              color: mode ==="light" ? "hsl(227, 35%, 25%)":"rgba(255, 255, 255, 0.7)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              [theme.breakpoints.down("md")]: {
                fontSize: "24px",
              },
            }}
          >
            Simple, traffic-based pricing
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: "15px",
              color: "hsl(225, 20%, 60%)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
            }}
          >
            Sign-up for our 30-day trial. No credit card required
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: mode === "light"?"hsl(0, 0%, 100%)" : "6B728E",
            boxShadow: "8px 8px 30px hsl(223, 50%, 87%)",
            width: "550px",
            borderRadius: theme.spacing(1),
            [theme.breakpoints.down("md")]: {
              width: "90%",
              marginBottom: theme.spacing(8),
            },
          }}
        >
          <Box
            sx={{
              padding: theme.spacing(3, 5),
              [theme.breakpoints.down("md")]: {
                padding: theme.spacing(3),
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  width: "100%",
                },
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: "16px",
                  color: "hsl(225, 20%, 60%)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  [theme.breakpoints.down("md")]: {
                    margin: theme.spacing(3, 0),
                  },
                }}
              >
                {pageViews} PAGEVIEWS
              </Typography>

              <Hidden mdUp>
                <Box
                  sx={{
                    width: "100%",
                    margin: theme.spacing(2, 0),
                  }}
                >
                  <StyledSlider disableRipple
                    min={0}
                    max={4}
                    step={1}
                    mode={mode}
                    value={planSelected}
                    onChange={(e) => {
                      setPlanSelected(e.target.value);
                    }}
                    components={{ Thumb: CustomThumb }}
                  />
                </Box>
              </Hidden>
            
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: "36px",
                    color: mode==="light"?  "hsl(227, 35%, 25%)":"rgba(51, 47, 208,0.76)",
                    fontFamily: "Manrope, sans-serif",
                    marginRight: theme.spacing(1),
                    fontWeight: 800,
                    [theme.breakpoints.down("md")]: {
                      fontSize: "30px",
                    },
                  }}
                >
                  ${price}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: "15px",
                    color: "hsl(225, 20%, 60%)",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  /month
                </Typography>
              </Box>
            </Box>
            <Hidden mdDown>
                <Box
                  sx={{
                  
                    margin: theme.spacing(3, 0),
                  }}
                >
                  <StyledSlider
                    min={0}
                    max={4}
                    step={1}
                    value={planSelected}
                    mode={mode}
                    onChange={(e) => {
                      setPlanSelected(e.target.value);
                    }}
                    components={{ Thumb: CustomThumb }}
                  />
                </Box>
              </Hidden>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("md")]: {
                  marginTop: theme.spacing(3),
                },
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "15px",
                  color: "hsl(225, 20%, 60%)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  [theme.breakpoints.down("md")]: {
                    fontSize: "11px",
                  },
                }}
              >
                Monthly Billing
              </Typography>
              <StyledSwitch
                checked={isYearly}
                mode={mode}
                onChange={() => setIsYearly(!isYearly)}
              />
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "15px",
                  color: "hsl(225, 20%, 60%)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  [theme.breakpoints.down("md")]: {
                    fontSize: "11px",
                  },
                }}
              >
                Yearly Billing
              </Typography>
              <Box
                sx={{
                  backgroundColor: "hsl(14, 92%, 95%)",
                  borderRadius: "25px",
                  padding: theme.spacing(0, 1),
                  marginLeft: theme.spacing(1.5),
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: "13px",
                    color: "hsl(15, 100%, 70%)",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    [theme.breakpoints.down("md")]: {
                      fontSize: "11px",
                    },
                  }}
                >
                  {isSmall ? "-25%" : "25% discount"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr style={{
    border: "none",
    borderTop: "1px solid hsl(0, 0%, 90%)",
  }} />
          <Box
            sx={{
              padding: theme.spacing(3, 5),
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                padding: theme.spacing(1, 3),
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <ListItem text={"Unlimited websites"} />
              <ListItem text={"100% data ownership"} />
              <ListItem text={"email reports"} />
            </Box>
            <Button disableRipple
              sx={{
                borderRadius: "25px",
                border: "none",
                backgroundColor: "hsl(227, 35%, 25%)",
                textTransform:"none",
                padding: theme.spacing(2, 6),
                fontSize: "15px",
                color: "hsl(226, 100%, 87%)",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                transition: "0.5s all ease",
                "&:hover": {
                  cursor: "pointer",
                  fontWeight: 600,
                  color: "hsl(230, 100%, 99%)",
                  backgroundColor: "hsl(227, 35%, 25%)",
                },
                [theme.breakpoints.down("md")]: {
                  margin: theme.spacing(3, 0),
                  padding: theme.spacing(1.5, 6),
                },
              }}
            >
              Start my trial
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default InteractivePricing;
