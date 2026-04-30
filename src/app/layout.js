import "./globals.css";
import Navbar from "@/Components/Navbar";



export const metadata = {
  title: "SkillSphere",
  description: "A big project of next js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased dm-sans`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
