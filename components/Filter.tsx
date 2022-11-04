import { List, FormControl, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const regions = [
  { name: "Filter by Region", value: "all" },
  { name: "Africa", value: "Africa" },
  { name: "Americas", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
];

interface Props {
  filterParam: string;
  changeRegion(value: string): void;
}

const Filter = ({ filterParam, changeRegion }: Props) => {
  return (
    <Box sx={{ width: "200px" }}>
      <List
        sx={{
          width: "100%",
          bgcolor: "fff",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <FormControl
          fullWidth
          sx={{
            backgroundColor: "#fff",
            display: "flex",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterParam}
            onChange={(e) => changeRegion(e.target.value)}
            fullWidth
            sx={{}}
          >
            {regions.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </List>
    </Box>
  );
};

export default Filter;
