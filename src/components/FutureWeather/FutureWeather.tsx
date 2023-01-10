import { DateTime } from 'luxon';

import type { FutureWeatherProps } from './props';

export const FutureWeather = ({ period, weathers }: FutureWeatherProps) => {
  return (
    <section className="scrollbar flex w-full max-w-6xl flex-nowrap items-center gap-16 overflow-x-auto pb-2">
      {weathers.map((futureWeather) => {
        const futureWeatherIcon = `wi wi-owm-${period}-${futureWeather.weather[0]?.id}`;

        return (
          <section
            className="flex shrink-0 grow-0 flex-col items-center gap-2"
            key={futureWeather.dt}
          >
            <i className={`${futureWeatherIcon} text-3xl`} />

            <h2 className="text-3xl text-font-200">
              {Math.round(futureWeather.main.temp_min)}° /{' '}
              {Math.round(futureWeather.main.temp_max)}°
            </h2>

            <h3 className="text-xl font-bold text-font-200">
              {DateTime.fromSeconds(futureWeather.dt)
                .toFormat('ccc, t')
                .toUpperCase()}
            </h3>
          </section>
        );
      })}
    </section>
  );
};
