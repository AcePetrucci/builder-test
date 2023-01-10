import type { Weather } from '@/types/open-weather';

export type FutureWeatherProps = {
  weathers: Weather[];
  period: string;
};
