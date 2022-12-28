import {useState,useEffect} from "react";
import { Box, Typography, Hidden, useMediaQuery } from "@mui/material";

// import CustomSwitch from "../components/CustomSwitch";
// import CustomSlider from "../components/CustomSlider";
// import CustomThumb from "../components/CustomThumb";
// import ListFeature from "../components/ListFeature";

import { useTheme } from "@mui/material/styles";

const prices = [
    { "price": "8.00", "pageviews": "10K", "yearly":"6.00" },
    { "price": "12.00", "pageviews": "50K", "yearly":"9.00" },
    { "price": "16.00", "pageviews": "100K", "yearly":"12.00"},
    { "price": "24.00", "pageviews": "500K", "yearly":"18.00" },
    { "price": "36.00", "pageviews": "1M", "yearly":"27.00" }
  ]

const InteractivePricing = () => {

  const [isYearly, setIsYearly] = useState(false);
  const [planSelected, setPlanSelected] = useState(2);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedPageViews, setSelectedPageViews] = useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let { price, pageviews, yearly } = prices[planSelected];
    setSelectedPrice(price);
    setSelectedPageViews(pageviews);
  }, [planSelected]);

  useEffect(() => {
    let { price, pageviews, yearly } = prices[planSelected];
    if (isYearly) {
      setSelectedPrice(yearly);
    } else {
      setSelectedPrice(price);
    }
  }, [isYearly, planSelected]);

  return (
    <div role="main">
      <Box sx={{
      height: "100vh",
      background: "url(/images/bg-pattern.svg), hsl(230, 100%, 99%)",
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
    }} >
        <Box sx={{
      background: "url(/images/pattern-circles.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
      textAlign: "center",
      padding: theme.spacing(10, 0),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(10, 1),
      },
    }}>
          <Typography
            variant="h1"
            component="h1"
             sx= {{
              marginBottom: theme.spacing(1),
              fontSize: "30px",
              color: "hsl(227, 35%, 25%)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
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
        <Box >
          <Box >
            <Box >
              <Typography
                variant="h3"
                component="h3"
            
              >
                {selectedPageViews} PAGEVIEWS
              </Typography>
              {/* <Hidden mdUp>
                <Box className={classes.sliderMobileWrapper}>
                  <CustomSlider
                    min={0}
                    max={4}
                    step={1}
                    value={planSelected}
                    onChange={(e) => {
                      setPlanSelected(e.target.value);
                    }}
                    components={{ Thumb: CustomThumb }}
                  />
                </Box>
              </Hidden> */}
              <Box >
                <Typography
                  variant="h2"
                  component="h2"
                 
                >
                  ${selectedPrice}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                 
                >
                  /month
                </Typography>
              </Box>
            </Box>
            {/* <Hidden mdDown>
              <Box className={classes.sliderWrapper}>
                <CustomSlider
                  min={0}
                  max={4}
                  step={1}
                  value={planSelected}
                  onChange={(e) => {
                    setPlanSelected(e.target.value);
                  }}
                  components={{ Thumb: CustomThumb }}
                />
              </Box>
            </Hidden> */}
            <Box>
              <Typography
                variant="subtitle1"
                component="p"
             
              >
                Monthly Billing
              </Typography>
              {/* <CustomSwitch
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              /> */}
              <Typography
                variant="subtitle1"
                component="p"
                
              >
                Yearly Billing
              </Typography>
              <Box >
                <Typography
                  variant="subtitle1"
                  component="p"
             
                >
                  {isSmall ? "-25%" : "25% discount"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr  />
          <Box >
            <Box>
              {/* <ListFeature featureText="Unlimited websites" />
              <ListFeature featureText="100% data ownership" />
              <ListFeature featureText="Email reports" /> */}
            </Box>
            <button >Start my trial</button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default InteractivePricing;