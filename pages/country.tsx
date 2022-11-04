import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";
import { CountriesData } from "../components/CountriesList";
import { countryListWithCode } from "../utils/data";

const Country = () => {
  const router = useRouter();

  const [country, setCountry] = useState<Partial<CountriesData>>({});

  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${router.query.name}`
        );
        console.log("response", res);
        const data = await res.json();
        setCountry(data[0]);
      })();
    }
  }, [router.isReady]);

  const isDataPresent = Object.keys(country).length > 0;

  return (
    <Box
      sx={{
        backgroundColor: "grey.50",
        minHeight: "calc(100vh - 64px)",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: "2rem" }}>
          <Button
            sx={{
              background: "common.white",
              boxShadow: "2",
              fontSize: matches ? "14px" : "16px",
              padding: "6px 18px",
              color: "#222",
            }}
            onClick={() => {
              router.replace("/");
            }}
          >
            <KeyboardBackspaceIcon
              sx={{ color: "#222", fontSize: "22px", marginRight: "10px" }}
            />{" "}
            Back
          </Button>
        </Box>
        {isDataPresent && (
          <Box sx={{ padding: "1rem 0" }}>
            <Grid container spacing={1}>
              <Grid
                xs={12}
                md={6}
                sx={{ marginBottom: matches ? "2rem" : "0" }}
              >
                <Box
                  sx={{
                    width: matches ? "100%" : "70%",
                    height: "300px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={country?.flags?.png || ""}
                    //   width={300}
                    //   height={300}
                    fill={true}
                    alt="country image"
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "1.2rem",
                    color: "#000000",
                    marginBottom: "1.2rem",
                  }}
                  component="h1"
                >
                  {country?.name?.common}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem",
                    flexDirection: matches ? "column" : "row",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginRight: "5px",
                      }}
                    >
                      Native Name:
                    </Typography>
                    {"  "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.languages
                        ? country.name?.nativeName[
                            Object.keys(country.languages)[0]
                          ].common
                        : ""}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: matches ? "" : "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginRight: "5px",
                      }}
                    >
                      Top Level Domain:
                    </Typography>
                    {"  "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.tld ? country?.tld[0] : ""}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem",
                    flexDirection: matches ? "column" : "row",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
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
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country?.population}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginRight: "5px",
                      }}
                    >
                      Currencies:
                    </Typography>
                    {"  "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.currencies
                        ? country.currencies[Object.keys(country.currencies)[0]]
                            .name
                        : ""}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem",
                    flexDirection: matches ? "column" : "row",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
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
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.region}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flex: "1 1 0%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginRight: "5px",
                      }}
                    >
                      Languages:
                    </Typography>
                    {"  "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.languages
                        ? Object.values(country.languages).join(", ")
                        : ""}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignContent: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginRight: "5px",
                      }}
                    >
                      Sub Region:
                    </Typography>
                    {"  "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.subregion}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignContent: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
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
                        color: "#333",
                      }}
                      component="span"
                    >
                      {country.capital ? country.capital[0] : ""}
                    </Typography>
                  </Box>
                </Box>
                {country.borders && country.borders.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: matches ? "start" : "center",
                      flexDirection: matches ? "column" : "row",
                      gap: "15px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#000000",
                        marginTop: "2rem",
                        marginRight: "5px",
                      }}
                    >
                      Border Countries:
                    </Typography>
                    <Box>
                      {country.borders.map((border) => (
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "14px",
                            color: "#222",
                            marginTop: "2rem",
                            marginRight: "14px",
                            borderRadius: "2px",
                            border: "1px solid #fafafa",
                            boxShadow: 1,
                            padding: "2px 8px",
                          }}
                          component="span"
                        >
                          {countryListWithCode[border]}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Country;
