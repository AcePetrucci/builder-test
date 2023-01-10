import { CurrentWeather } from '@/components/CurrentWeather';
import { FutureWeather } from '@/components/FutureWeather';

import type { WeatherByZipProps } from './props';

const periodMap = new Map([
  ['d', 'day'],
  ['n', 'night'],
]);

export const WeatherByZip = ({ zip, weather }: WeatherByZipProps) => {
  if (!weather[0]) return null;

  const currentWeather = weather[0];

  const period = periodMap.get(currentWeather.sys.pod) as string;

  return (
    <section className="flex w-full flex-col items-center gap-40">
      <CurrentWeather zip={zip} weather={currentWeather} period={period} />

      <FutureWeather period={period} weathers={weather.slice(1)} />
    </section>
  );
};
