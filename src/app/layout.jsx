import "./globals.css";

export const metadata = {
  title: "SBS GAMESs",
  description:
    "Participa en increibles torneos llenos de emoción y competí por los mejores premios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
