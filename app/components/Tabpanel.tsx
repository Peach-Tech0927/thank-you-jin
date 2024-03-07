"use client";
import { Box, Typography, Tabs, Tab, styled, Grid } from "@mui/material";
import * as React from "react";
import { messages } from "../lib/data";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div> // div in p 解消のためにchildrenが囲われていた<typograpy>を削除
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
          <StyledTab label="一覧" color="#DE7897" />
          <StyledTab label="24卒" color="#8161DE" />
          <StyledTab label="25卒" color="#2AA6CD" />
          <StyledTab label="26卒" color="#F2821A" />
          <StyledTab label="27卒" color="#1CC033" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={5} p={"2%"}>
          {messages.map((message, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box mx={{ xs: 1, sm: 4 }} mt={1} bgcolor={"#D7EEFF"} width={500}>
                <Box
                  px={{ xs: 3, sm: 5 }}
                  py={{ xs: 2, sm: 4 }}
                  fontSize={{ xs: "13px", sm: "16px" }}
                >
                  <Typography marginBottom={1}>{message.name}</Typography>
                  <Typography>{message.message}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={5} p={"2%"}>
          {messages
            .filter((company) => company.year === "24卒")
            .map((message, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box mx={{ xs: 1, sm: 4 }} mt={1} bgcolor={"#D7EEFF"}>
                  <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 2, sm: 4 }}
                    fontSize={{ xs: "13px", sm: "16px" }}
                  >
                    <Typography marginBottom={1}>{message.name}</Typography>
                    <Typography>{message.message}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={5} p={"2%"}>
          {messages
            .filter((company) => company.year === "25卒")
            .map((message, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box mx={{ xs: 1, sm: 4 }} mt={1} bgcolor={"#D7EEFF"}>
                  <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 2, sm: 4 }}
                    fontSize={{ xs: "13px", sm: "16px" }}
                  >
                    <Typography marginBottom={1}>{message.name}</Typography>
                    <Typography>{message.message}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Grid container spacing={5} p={"2%"}>
          {messages
            .filter((company) => company.year === "26卒")
            .map((message, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box mx={{ xs: 1, sm: 4 }} mt={1} bgcolor={"#D7EEFF"}>
                  <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 2, sm: 4 }}
                    fontSize={{ xs: "13px", sm: "16px" }}
                  >
                    <Typography marginBottom={1}>{message.name}</Typography>
                    <Typography>{message.message}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Grid container spacing={5} p={"2%"}>
          {messages
            .filter((company) => company.year === "27卒")
            .map((message, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box mx={{ xs: 1, sm: 4 }} mt={1} bgcolor={"#D7EEFF"}>
                  <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 2, sm: 4 }}
                    fontSize={{ xs: "13px", sm: "16px" }}
                  >
                    <Typography marginBottom={1}>{message.name}</Typography>
                    <Typography>{message.message}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
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
