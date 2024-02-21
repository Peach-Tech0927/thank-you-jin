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
        <Box p={3}>
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
          <StyledTab label="one" color="#DE7897" />
          <StyledTab label="two" color="#8161DE" />
          <StyledTab label="three" color="#2AA6CD" />
          <StyledTab label="four" color="#F2821A" />
          <StyledTab label="five" color="#1CC033" />
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

//別ファイルでStyledTabをコンポーネントとして切り出したが、Mui-selectedが機能しなかったためshouldForwardPropを使用
const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, color }) => ({
  fontFamily: "revert-layer",
  color: "#575757",
  width: "150px",

  [theme.breakpoints.down("md")]: {
    width: "105px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },

  "&.Mui-selected": {
    color: color,
    borderBottom: `2px solid ${color}`,
  },
}));

export default BasicTabs;
