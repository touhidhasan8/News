import dns from 'node:dns';
dns.setServers(["8.8.8.8", "8.8.4.4"])


import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "T News",
  description:
    "T News is a popular Bangladeshi online news platform providing the latest breaking news, politics, sports, entertainment, technology, and worldwide updates.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col container mx-auto`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}