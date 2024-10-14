import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
          {/* <div className="bg-slate-900 rounded-[3rem] p-5  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-600 via-slate-700 to-slate-900"> */}
          <div className="bg-slate-900  rounded-[3rem] p-5 ">
            <div className="text-white">
              <div className="grid grid-cols-2   absolutex w-fullx  m-4 ">
                <div className="max-w-xsx text-left">
                  <p>
                    Longitude - <span className="font-bold">28.12312</span>
                  </p>
                  <p>
                    Latitude - <span className="font-bold">28.12312</span>
                  </p>
                </div>
                <div className="max-w-xsx text-right">
                  <p>
                    <span className="font-bold">Chrome v119.0.0.0</span> -
                    Browser
                  </p>
                  <p>
                    <span className="font-bold">Window 10</span> - OS
                  </p>
                </div>
              </div>
              <div className="px-20 min-h-[30rem] ">{children}</div>
              <div className="grid grid-cols-3   absolutex w-fullx items-end  m-4 ">
                <div className="max-w-xsx text-left">
                  <p>Local Time - 16.05</p>
                  <p>Time Spend - 00:05</p>
                </div>
                <div>
                  <div className="text-center rounded-[4rem] bg-slate-800 py-5 px-7 flex justify-between bottom-[-4rem] relative">
                    <Link className="text-1xl text-center px-2" href="/">
                      Home
                    </Link>
                    <Link
                      className="text-1xl text-center px-2"
                      href="/projects"
                    >
                      Proyects
                    </Link>
                    <Link className="text-1xl text-center px-2" href="/about">
                      About
                    </Link>
                    <Link className="text-1xl text-center px-2" href="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="max-w-xsx text-right">
                  <p>
                    <span className="font-bold">122.151.153.939</span> - IP
                  </p>
                  <p>
                    <span className="font-bold">Chrome v119.0.0.0</span> -
                    Browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
