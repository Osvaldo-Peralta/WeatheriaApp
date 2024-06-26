import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = ({ city, setCity, getWeather }) => {
  const handleSearchChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <AppBar position="static" style={{ marginBottom: "40 px" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          WeatheriaApp
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <form onSubmit={handleSearchSubmit}>
            <StyledInputBase
              placeholder="Buscar ciudad..."
              inputProps={{ "aria-label": "search" }}
              value={city}
              onChange={handleSearchChange}
            />
          </form>
        </Search>
        <Button color="inherit" onClick={handleSearchSubmit}>
          Buscar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
