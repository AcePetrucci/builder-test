import type { Weather } from '@/types/open-weather';

export type WeatherByZipPageProps = {
  params: {
    zip: string;
  };
};

export type WeatherByZipProps = {
  zip: string;
  weather: Weather[];
};
