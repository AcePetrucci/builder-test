import type { Weather } from '@/types/open-weather';

export type CurrentWeatherProps = {
  zip: string;
  weather: Weather;
  period: string;
};
