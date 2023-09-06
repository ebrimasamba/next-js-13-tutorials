import "./globals.css";
import { Montserrat } from "next/font/google";

const lukiestGuy = Montserrat({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "variable",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lukiestGuy.variable}>{children}</body>
    </html>
  );
}
