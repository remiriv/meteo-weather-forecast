import { Room, Thermostat } from "@mui/icons-material";
import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./styles/styles.css";
import { divIcon } from "leaflet";
import { getWeatherForecast } from "./api/forecast";
import { franceCenter, cities, maxDaysForecast } from "./constants/map";
import { ICity, Forecast } from "./models/map";
import { CityName, SizedMapContainer } from "./styles/Map";

export { ForecastMap };

function ForecastMap() {
  const [selectedCity, setSelectedCity] = useState<ICity>();
  const [temperatures, setTemperatures] = useState<Forecast[]>();

  const iconMarkup = renderToStaticMarkup(<Room sx={{ height: "159px" }} />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    iconSize: [38, 76],
  });

  useMemo(async () => {
    if (!selectedCity) {
      return;
    }
    setTemperatures(await getWeatherForecast(selectedCity));
  }, [selectedCity]);

  const ComponentResize = () => {
    const map = useMap();

    setTimeout(() => {
      map.invalidateSize();
    }, 0);

    return null;
  };

  return (
    <SizedMapContainer
      center={[franceCenter.lat, franceCenter.long]}
      zoom={5.5}
      scrollWheelZoom={false}
    >
      <ComponentResize />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city: ICity) => (
        <Marker
          position={[city.lat, city.long]}
          icon={customMarkerIcon}
          eventHandlers={{
            click: (e) => {
              setSelectedCity(city);
              setTemperatures([]);
            },
          }}
        >
          <Popup>
            <Grid>
              <CityName>Temperatures in {city.name}</CityName>
            </Grid>
            {!temperatures && <CircularProgress sx={{ margin: "auto" }} />}
            {temperatures &&
              temperatures.slice(0, maxDaysForecast).map((temp: Forecast) => (
                <>
                  <Grid container direction="row">
                    <Typography>
                      <Thermostat color="primary" />
                      {`${new Date(temp.day).toLocaleDateString("fr")} || ${
                        temp.temperature
                      }°C`}
                    </Typography>
                  </Grid>
                </>
              ))}
          </Popup>
        </Marker>
      ))}
    </SizedMapContainer>
  );
}
