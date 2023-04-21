import {WEATHER} from "../models/weatherModel";

export const WEATHERS: WEATHER[] =
  [
    {
      location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1681848030,
        localtime: "2023-04-18 21:00"
      },
      current: {
        last_updated_epoch: 1681848000,
        last_updated: "2023-04-18 21:00",
        temp_c: 10.0,
        temp_f: 50.0,
        is_day: 0,
        condition: {
          text: "Partly cloudy",
          icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          code: 1003
        },
        wind_mph: 10.5,
        wind_kph: 16.9,
        wind_degree: 80,
        wind_dir: "E",
        pressure_mb: 1026.0,
        pressure_in: 30.3,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 66,
        cloud: 50,
        feelslike_c: 7.9,
        feelslike_f: 46.1,
        vis_km: 10.0,
        vis_miles: 6.0,
        uv: 1.0,
        gust_mph: 13.6,
        gust_kph: 22.0
      }
    },
    {
      location: {
        name: "Boston",
        region: "Massachusetts",
        country: "United States of America",
        lat: 42.36,
        lon: -71.06,
        tz_id: "America/New_York",
        localtime_epoch: 1681868175,
        localtime: "2023-04-18 21:36"
      },
      current: {
        last_updated_epoch: 1681867800,
        last_updated: "2023-04-18 21:30",
        temp_c: 11.7,
        temp_f: 53.1,
        is_day: 0,
        condition: {
          text: "Overcast",
          icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
          code: 1009
        },
        wind_mph: 10.5,
        wind_kph: 16.9,
        wind_degree: 300,
        wind_dir: "WNW",
        pressure_mb: 1009.0,
        pressure_in: 29.8,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 46,
        cloud: 100,
        feelslike_c: 10.6,
        feelslike_f: 51.1,
        vis_km: 16.0,
        vis_miles: 9.0,
        uv: 1.0,
        gust_mph: 9.4,
        gust_kph: 15.1
      }
    },
    {
      location: {
        name: "New York",
        region: "New York",
        country: "United States of America",
        lat: 40.71,
        lon: -74.01,
        tz_id: "America/New_York",
        localtime_epoch: 1681868214,
        localtime: "2023-04-18 21:36"
      },
      current: {
        last_updated_epoch: 1681867800,
        last_updated: "2023-04-18 21:30",
        temp_c: 8.9,
        temp_f: 48.0,
        is_day: 0,
        condition: {
          text: "Clear",
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
          code: 1000
        },
        wind_mph: 8.1,
        wind_kph: 13.0,
        wind_degree: 270,
        wind_dir: "W",
        pressure_mb: 1013.0,
        pressure_in: 29.91,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 42,
        cloud: 0,
        feelslike_c: 5.7,
        feelslike_f: 42.3,
        vis_km: 16.0,
        vis_miles: 9.0,
        uv: 1.0,
        gust_mph: 18.1,
        gust_kph: 29.2
      }
    }
  ]
