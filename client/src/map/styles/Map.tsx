import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MapContainer } from "react-leaflet";

export const CityName = styled(Typography)(({ theme }) => ({
  fontWeight: "bolder",
  textDecoration: "underline",
  textAlign: "center",
}));

export const SizedMapContainer = styled(MapContainer)(({ theme }) => ({
  height: "100vh",
  width: "100%",
}));
