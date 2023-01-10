'use client';

const WeatherByZipError = () => {
  return (
    <h2 className="text-5xl font-light">
      The provided
      <span className="text-secondary-400"> ZIP Code </span>
      is invalid.
    </h2>
  );
};

export default WeatherByZipError;
