import { Grid } from "@mui/material";
import { memo, useEffect, useState } from "react";
import CountryCard from "./CountryCard";

interface Dynamic {
  [key: string]: string;
}

interface DynamicObject {
  [key: string]: { name: string; symbol: string; common: string };
}

export interface CountriesData {
  name: { common: string; nativeName: DynamicObject };
  borders: string[];
  area: string;
  flags: { png: string };
  capital: string[];
  population: number;
  region: string;
  languages: Dynamic;
  tld: string[];
  currencies: DynamicObject;
  subregion: string;
}

interface Props {
  countries: CountriesData[];
}

const Countries = ({ countries }: Props) => {
  return (
    <Grid container spacing={8}>
      {countries.length > 0 &&
        countries.map((country, i) => (
          <CountryCard
            key={`${country.area}-${i}-${country.name.common}`}
            name={country.name.common}
            flagImage={country.flags.png}
            capital={country.capital}
            population={country.population}
            region={country.region}
          />
        ))}
    </Grid>
  );
};

export default memo(Countries);
