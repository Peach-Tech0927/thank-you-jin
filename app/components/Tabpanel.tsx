"use client";
import { Box, Typography, Tabs, Tab, styled } from "@mui/material";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        justifyContent={"center"}
        display={"flex"}
        borderBottom={1}
        borderColor={"divider"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <StyledFirstTab label="one" />
          <StyledSecondTab label="two" />
          <StyledThirdTab label="three" />
          <StyledFourthTab label="four" />
          <StyledFifthTab label="five" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
    </Box>
  );
};

const StyledFirstTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#DE7897",
    borderBottom: "2px solid #DE7897",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "105px",
  },
  [theme.breakpoints.up("md")]: {
    width: "150px",
  },

  fontFamily: "revert-layer",
  color: "#575757",
}));

const StyledSecondTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#8161DE",
    borderBottom: "2px solid #8161DE",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "105px",
  },
  [theme.breakpoints.up("md")]: {
    width: "150px",
  },

  fontFamily: "revert-layer",
  color: "#575757",
}));

const StyledThirdTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#2AA6CD",
    borderBottom: "2px solid #2AA6CD",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "105px",
  },
  [theme.breakpoints.up("md")]: {
    width: "150px",
  },

  fontFamily: "revert-layer",
  color: "#575757",
}));

const StyledFourthTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#F2821A",
    borderBottom: "2px solid #F2821A",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "105px",
  },
  [theme.breakpoints.up("md")]: {
    width: "150px",
  },

  fontFamily: "revert-layer",
  color: "#575757",
}));

const StyledFifthTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#1CC033",
    borderBottom: "2px solid #1CC033",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "105px",
  },
  [theme.breakpoints.up("md")]: {
    width: "150px",
  },

  fontFamily: "revert-layer",
  color: "#575757",
}));

export default BasicTabs;
