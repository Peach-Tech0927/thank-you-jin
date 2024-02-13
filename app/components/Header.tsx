import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Typography
          component="h1"
          m={"0 auto"}
          color={"#0068b7"}
          fontSize={20}
          fontFamily={"Hiragino Sans"}
        >
          エンジニア就活対策
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
