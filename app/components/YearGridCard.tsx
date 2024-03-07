import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { messages } from "../lib/data";

type TProps = {
  yearProps: string;
  cardColor: string;
};

const YearGridCard: React.FC<TProps> = ({ yearProps, cardColor }) => {
  return (
    <Grid container spacing={5} py={3} px={10}>
      {messages
        .filter((message) => yearProps === message.year)
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
            <Box mx={1} mt={1} bgcolor={cardColor} borderRadius={3}>
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
  );
};

export default YearGridCard;
