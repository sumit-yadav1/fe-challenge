import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  key: string;
  name: string;
  flagImage: string;
  population: number;
  region: string;
  capital: string[];
}

const CountryCard = ({
  key,
  name,
  flagImage,
  population,
  region,
  capital,
}: Props) => {
  const router = useRouter();

  return (
    <Grid key={key} item xs={12} sm={6} md={3}>
      <Card
        sx={{
          height: "auto",
          marginTop: 2,
          borderRadius: "12px",
          cursor: "pointer",
        }}
        onClick={() => {
          const link = `/country?name=${name}`.toLocaleLowerCase();
          router.push(link);
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={flagImage}
          alt="green iguana"
        />

        <CardContent sx={{ height: "120px" }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "16px",
              lineHeight: "22px",
              color: "#000",
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
                marginRight: "5px",
              }}
            >
              Population:
            </Typography>
            {"  "}
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
              }}
              component="span"
            >
              {population}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
                marginRight: "5px",
              }}
            >
              Region:
            </Typography>
            {"  "}
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
              }}
              component="span"
            >
              {region}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
                marginRight: "5px",
              }}
            >
              Capital:
            </Typography>
            {"  "}
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "#000000",
                marginTop: "6px",
              }}
              component="span"
            >
              {capital}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CountryCard;
