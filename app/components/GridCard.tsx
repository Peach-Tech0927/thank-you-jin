import { Grid, Box, Typography, styled } from "@mui/material";
import { messages } from "../data/data";
import Image from "next/image";

const GridCard = () => {
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 5 }}
      py={{ xs: 2, sm: 3 }}
      px={{ xs: 1, sm: 10 }}
    >
      {messages.map((message, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Box
            mx={1}
            mt={1}
            bgcolor={"#F8E0F1"}
            borderRadius={5}
            boxShadow={5}
            position={"relative"}
          >
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 2, sm: 4 }}>
              <Box position={"absolute"} right={-10} top={-10}>
                <StyledImage
                  src={"/sakura.png"}
                  alt={""}
                  width={80}
                  height={80}
                />
              </Box>
              <Typography
                my={{ xs: 0.7, sm: 1 }}
                letterSpacing={0.8}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "17px" }}
                fontFamily={"serif"}
              >
                {message.name}
              </Typography>
              <Typography
                fontSize={{ xs: "13px", sm: "16px" }}
                letterSpacing={0.8}
                fontFamily={"serif"}
              >
                {message.message}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const StyledImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 50,
    height: 50,
  },
}));

export default GridCard;
