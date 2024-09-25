import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import { LangProvider } from "./_contexts/LangContext";
import { ThemeProvider } from "./_contexts/ThemeContext";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Blog App",
  description: "Blog App for who loved to write",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <LangProvider>
        <ThemeProvider>
          <body className={`${poppins.className} dark`}>
            <header>
              <Navbar />
            </header>
            <main className="bg-gray-100 ">
              {children}
            </main>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </body>
        </ThemeProvider>
      </LangProvider>
    </html>
  );
}
