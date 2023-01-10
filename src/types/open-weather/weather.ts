export type WeatherMainData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type WeatherWindData = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherSysData = {
  pod: string;
};

export type Weather = {
  main: WeatherMainData;
  weather: WeatherData[];
  wind: WeatherWindData;
  pop: number;
  sys: WeatherSysData;
  dt: number;
};
