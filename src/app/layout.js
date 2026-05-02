import { Bounce, Slide, ToastContainer } from "react-toastify";
import "./globals.css";



export const metadata = {
  title: "SkillSphere",
  description: "A big project of next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased dm-sans`}>

      <body className="min-h-full flex flex-col bg-black">
        <main className="grow">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          {children}
        </main>
      </body>

    </html>
  );
}
