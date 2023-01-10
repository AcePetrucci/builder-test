type WeatherByZipLayoutProps = {
  children: React.ReactNode;
};

const WeatherByZipLayout = ({ children }: WeatherByZipLayoutProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-40">
      {children}
    </section>
  );
};

export default WeatherByZipLayout;
