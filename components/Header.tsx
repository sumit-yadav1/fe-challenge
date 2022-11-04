import {
  AppBar,
  Toolbar,
  Typography,
  ToggleButton,
  Box,
  Container,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "",
            justifyContent: "space-between",
          }}
        >
          <Toolbar>
            <Typography
              sx={{ fontSize: "1rem" }}
              variant="h1"
              color={"common.black"}
            >
              Where in the world?
            </Typography>
          </Toolbar>
          {/* <ToggleButton key={2} value="stand">
            <DarkModeOutlinedIcon />
            Dark Mode
          </ToggleButton> */}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
