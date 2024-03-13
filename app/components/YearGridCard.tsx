import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { messages } from "../data/data";

type TProps = {
  yearProps: string;
  cardColor: string;
};

const YearGridCard: React.FC<TProps> = ({ yearProps, cardColor }) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 5 }}
      py={{ xs: 2, sm: 3 }}
      px={{ xs: 1, sm: 10 }}
    >
      {messages
        .filter((message) => yearProps === message.year)
        .map((message, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Box
              mx={1}
              mt={1}
              bgcolor={cardColor}
              borderRadius={5}
              boxShadow={5}
            >
              <Box
                px={{ xs: 3, sm: 5 }}
                py={{ xs: 2, sm: 4 }}
                fontSize={{ xs: "13px", sm: "16px" }}
              >
                <Typography marginBottom={1}>{message.name}</Typography>
                <Typography letterSpacing={0.8}>{message.message}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default YearGridCard;
