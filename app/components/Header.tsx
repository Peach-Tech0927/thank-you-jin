import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Typography
          component="h1"
          m={"0 auto"}
          color={"#DE7897"}
          fontSize={{ xs: 25, sm: 33 }}
          fontFamily={"serif"}
        >
          Graduation Anniversary
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
