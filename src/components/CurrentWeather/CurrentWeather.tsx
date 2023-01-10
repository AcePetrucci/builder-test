import { DateTime } from 'luxon';

import type { CurrentWeatherProps } from './props';

const speedMap = new Map([
  ['F', 'mph'],
  ['C', 'm/s'],
]);

export const CurrentWeather = ({
  zip,
  weather,
  period,
}: CurrentWeatherProps) => {
  const weatherIcon = `wi wi-owm-${period}-${weather.weather[0]?.id}`;

  const speed = speedMap.get('F');

  return (
    <>
      <h2 className="text-5xl font-light">
        Right now, in the
        <span className="font-normal text-secondary-400"> {zip} </span>
        US Zip Code, it is
        <span className="font-normal text-secondary-400">
          {' '}
          {weather.weather[0]?.description}
        </span>
        .
      </h2>

      <section className="flex items-center gap-32">
        <div className="text-9xl">
          <i className={weatherIcon} />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-extralight">
            {DateTime.fromSeconds(weather.dt).toFormat('cccc, t')}
          </h3>
          <h2 className="text-9xl font-light text-secondary-400">
            {Math.round(weather.main.temp)}°
          </h2>

          <span className="text-2xl font-bold text-font-200">
            {Math.round(weather.main.temp_min)}° /{' '}
            {Math.round(weather.main.temp_max)}°
          </span>
        </div>

        <div className="flex flex-col items-baseline gap-4">
          <div className="flex items-center gap-4">
            <i className="wi wi-strong-wind w-10 text-center text-2xl" />

            <div className="text-3xl font-bold text-font-200">
              {Math.round(weather.wind.speed)}
              <span className="text-base"> {speed} </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <i className="wi wi-umbrella w-10 text-center text-2xl" />

            <div className="text-3xl font-bold text-font-200">
              {Math.round(weather.pop * 100)}
              <span className="text-base"> % </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <i className="wi wi-raindrop w-10 text-center text-2xl" />

            <div className="text-3xl font-bold text-font-200">
              {Math.round(weather.main.humidity)}
              <span className="text-base"> % </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
