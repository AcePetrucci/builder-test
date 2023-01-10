type WeatherLayoutProps = {
  children: React.ReactNode;
};

export const WeatherLayout = ({ children }: WeatherLayoutProps) => {
  return (
    <section className="flex h-full w-full flex-col flex-wrap items-center justify-center">
      {children}
    </section>
  );
};

export default WeatherLayout;
