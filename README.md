# meteo-weather-forecast
React application displaying temperature forecast for 3 days for multiple cities. 

# Weather forecast

This application displays weather forecast for two cities in France: Paris, and Toulouse.
The default version is displaying temperatures in a three day time range but this can be updated with an environment variable. 

### Adding new cities  

If you want to add new cities, it's easy: update the file `client/src/maps/constants/map.ts` and add a new city to the variable `cities` with the following syntax: 

    {
	    name: "Your city name",
	    lat: "latitude coordinates",
	    long: "longitude coordinates",
    }

And that is all ! It will add a new marker on the map and retrieve temperatures. 

# Local development

The application uses a docker-compose to launch the frontend and the server simultaneously. 
To run the docker-compose and build the application locally, first build the Dockerfile for the two parts of the application, then launch the stack. 

### Prerequisites

You need to have 
- a working **API Key for the OpenWeather API**. 
- **Docker** to build and run the docker-compose 

### Launching with docker-compose
Then, run the following commands: 

    APP_ID=<<YOUR_API_KEY>> docker-compose build
    APP_ID=<<YOUR_API_KEY>> docker-compose up

Then, use your browser to go to: 

    http://localhost:3000/

and you should see the map ! 

# Possible improvements 

#### Technical improvements 
- Pushing the **built containers to DockerHub** to make the application easier to install 
- Frontend building with react-scripts is very slow and can be improved **switching to vite** for example
- **Rate limiting** to avoid exploding the quotas of the free OpenWeather API

#### Temperature display
- Choosing to visualize hourly / daily / current temperatures (with a dropdown or a button to choose)
- Using **GeoJSONs** to delimit a clickable zone around a city instead of a marker 
- Show **evolution** (+ or - / hot or cold color) between the different temperatures
- Query and store most requested cities data with a **1 hour cache** to avoir requesting the API each time


