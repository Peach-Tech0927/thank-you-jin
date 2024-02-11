import * as React from "react";
import { Box, Typography } from "@mui/material";

const Subheader = () => {
  return (
    <Box
      height={"70vh"}
      sx={{
        backgroundImage: `url("/image/engineer-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box height={"100%"} sx={{ background: "rgba(255, 255, 255, 0.65)" }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Typography fontSize={{ xs: 25, md: 35 }}>
            エンジニアのための就活対策
          </Typography>
          <Typography fontSize={{ xs: 25, md: 35 }}>
            エンジニアのための就活対策
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Subheader;
