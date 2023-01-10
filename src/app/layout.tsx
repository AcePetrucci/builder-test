import '../../styles/globals.css';
import '../../styles/weather-icons.min.css';
import '../../styles/weather-icons-wind.min.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="h-full">
      <head />
      <body className="flex h-full justify-center bg-primary-400 font-medium tracking-wide text-font-700">
        {children}
      </body>
    </html>
  );
}
