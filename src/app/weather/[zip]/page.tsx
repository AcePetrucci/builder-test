import type { ZipToLocation } from '@/types/open-weather';

import type { WeatherByZipPageProps } from './props';
import { WeatherByZip } from './WeatherByZip';

const fetchWeather = async (zip: string) => {
  const APIKey = process.env.OW_KEY;

  const { lat, lon }: ZipToLocation = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${APIKey}`
  ).then((res) => res.json());

  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
  ).then((res) => res.json());

  return weather;
};

const WeatherByZipPage = async ({ params: { zip } }: WeatherByZipPageProps) => {
  if (zip.length !== 5) throw new Error();

  const weather = await fetchWeather(zip);

  return <WeatherByZip zip={zip} weather={weather.list} />;
};

export default WeatherByZipPage;
