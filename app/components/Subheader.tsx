"use client";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment } from "react";

const Subheader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const description = isSmallScreen
    ? `ご卒業
    おめでとうございます！！
    `
    : `ご卒業おめでとうございます！！
    `;

  return (
    <>
      <StyledBox>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          zIndex={1}
          sx={{ background: "rgba(255, 255, 255, 0.3)" }}
        >
          <Typography
            fontSize={{ xs: 25, md: 35 }}
            fontWeight={"bold"}
            color={"white"}
            fontFamily={"serif"}
          >
            {isSmallScreen ? (
              <>
                ご卒業
                <br />
                おめでとうございます！！
              </>
            ) : (
              `ご卒業おめでとうございます！！`
            )}
          </Typography>
        </Box>
      </StyledBox>
    </>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url("/image/members.jpg")`,
  textAlign: "center",
  width: "100%",
  height: "80vh",
  zIndex: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    background: "inherit",
    filter: "blur(6px)",
    zIndex: -1,
  },
}));

export default Subheader;
