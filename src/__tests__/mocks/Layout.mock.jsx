import Navbar from "@/app/_components/navbar";
import { LangProvider } from "@/app/_contexts/LangContext";
import { ThemeProvider } from "@/app/_contexts/ThemeContext";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const LayoutMock = ({ children }) => {
  return (
    <LangProvider>
      <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main className="bg-gray-100 ">
            <Suspense>{children}</Suspense>
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
      </ThemeProvider>
    </LangProvider>
  );
};

export default LayoutMock;
