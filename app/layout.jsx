import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black p-10">
        <div className="container mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-5">
            <div className="text-white">
              <div className="grid grid-cols-2   absolutex w-fullx  m-4 ">
                <div className="max-w-xsx text-left">
                  <p>Longitude - 28.12312</p>
                  <p>Latitude - 28.12312</p>
                </div>
                <div className="max-w-xsx text-right">
                  <p>Longitude - 28.12312</p>
                  <p>Latitude - 28.12312</p>
                </div>
              </div>
              <div className="px-20 ">{children}</div>
              <div className="grid grid-cols-2   absolutex w-fullx  m-4 ">
                <div className="max-w-xsx text-left">
                  <p>Longitude - 28.12312</p>
                  <p>Latitude - 28.12312</p>
                </div>
                <div className="max-w-xsx text-right">
                  <p>Longitude - 28.12312</p>
                  <p>Latitude - 28.12312</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
