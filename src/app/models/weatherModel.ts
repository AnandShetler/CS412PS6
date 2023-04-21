export class WEATHER {
  location: LOCATION | undefined;
  current: CURRENT | undefined;

}

class LOCATION {
  name: string | undefined;
  region: string | undefined;
  country: string | undefined;
  lat: number | undefined;
  lon: number | undefined;
  tz_id: string | undefined;
  localtime_epoch: number | undefined;
  localtime: string | undefined;
}

class CURRENT {
  last_updated_epoch: number | undefined;
  last_updated: string | undefined;
  temp_c: number | undefined;
  temp_f: number | undefined;
  is_day: number | undefined;
  condition: CONDITION | undefined;
  wind_mph: number | undefined;
  wind_kph: number | undefined;
  wind_degree: number | undefined;
  wind_dir: string | undefined;
  pressure_mb: number | undefined;
  pressure_in: number | undefined;
  precip_mm: number | undefined;
  precip_in: number | undefined;
  humidity: number | undefined;
  cloud: number | undefined;
  feelslike_c: number | undefined;
  feelslike_f: number | undefined;
  vis_km: number | undefined;
  vis_miles: number | undefined;
  uv: number | undefined;
  gust_mph: number | undefined;
  gust_kph: number | undefined;
}

class CONDITION {
  text: string | undefined;
  icon: string | undefined;
  code: number | undefined;
}
