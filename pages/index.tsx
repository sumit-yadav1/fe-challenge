import {
  alpha,
  Box,
  Container,
  InputAdornment,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import Countries, { CountriesData } from "../components/CountriesList";
import Search from "@mui/icons-material/Search";
import SearchBox from "../components/Search";
import Filter from "../components/Filter";
import { useEffect, useRef, useState } from "react";

const styles = {
  search: {
    backgroundColor: "white",
    borderRadius: "12px",
    outline: "none",
  },
};

export default function Home() {
  const allCountries = useRef<CountriesData[]>([]);

  const [searchText, setSearchText] = useState("");

  const [filterParam, setFilterParam] = useState("all");

  const [list, setList] = useState<CountriesData[]>([]);

  const [searchParam] = useState(["name"]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    setList(data);
    allCountries.current = data;
  };

  const changeRegion = async (region: string) => {
    if (region === "all") {
      console.log("region===", region);
      fetchCountries();
    } else {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );

      const data = await res.json();
      console.log("region data=");

      setList(data);
    }
    setFilterParam(region);
  };

  const search = async (text: string) => {
    const newList = allCountries.current.filter((item) => {
      if (item.region === filterParam) {
        return (
          item.name.common
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) > -1
        );
      } else if (filterParam === "all") {
        return (
          item.name.common
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) > -1
        );
      }
    });

    setList(newList);

    setSearchText(text);
  };

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: "grey.50",
        minHeight: "calc(100vh -  64px)",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            alignItems: matches ? "" : "center",
            justifyContent: "space-between",
            padding: "1.5rem 0 2rem 0",
            gap: matches ? "2rem" : "",
          }}
        >
          <SearchBox
            placeholder="Search for country.."
            sx={{ outline: "none" }}
            variant="outlined"
            fullWidth={true}
            style={styles.search}
            value={searchText}
            onChange={search}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "#858585" }} />
                </InputAdornment>
              ),
            }}
          />
          <Filter filterParam={filterParam} changeRegion={changeRegion} />
        </Box>
        <Countries countries={list} />
      </Container>
    </Box>
  );
}
